'use client';
import { Temporal } from '@js-temporal/polyfill';
import { useQuery } from '@tanstack/react-query';
import { useLiveQuery } from 'dexie-react-hooks';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { useEffect, useMemo } from 'react';
import warning from 'warning';
import { getAniListClient } from '../../anilist-client';
import { titleLanguageOrderForPreference } from '../../features/user-preferences/helpers/title-language';
import { TitleLanguageOrderContext } from '../../features/user-preferences/hooks/title-language-order';
import { useNextAuthSessionInfo } from '../../framework/auth/useNextAuthSession';
import { Footer } from '../../framework/layout/Footer';
import { Header } from '../../framework/layout/Header';
import { metaDB } from '../../local-db/metadb';
import { ActiveLoginContext } from '../../login-state/ActiveLogin';
import { useLoginToken } from '../../login-state/useLoginToken';

function useMetaLogins(session: Pick<Session, 'aniListAccessToken'> | null) {
	const accessToken = session?.aniListAccessToken;
	const { data: anilistViewerInfo } = useQuery(
		accessToken
			? {
					queryKey: ['AnilistViewerInfo'],
					queryFn: () =>
						getAniListClient(() => accessToken)
							.query({
								Viewer: {
									id: true,
									name: true,
									avatar: {
										medium: true,
									},
									bannerImage: true,
									siteUrl: true,
									options: {
										profileColor: true,
										titleLanguage: true,
									},
								},
							})
							.then((data) => data.Viewer),
				}
			: { enabled: false, queryKey: [], queryFn: () => null },
	);

	useEffect(() => {
		if (anilistViewerInfo) {
			const { id, name, avatar, options } = anilistViewerInfo;
			const { profileColor, titleLanguage } = options ?? {};

			metaDB.logins.put({
				id,
				name,
				mediumAvatar: avatar?.medium ?? undefined,
				lastUsed: Date.now(),
				profileColor: profileColor ?? undefined,
				titleLanguage: titleLanguage ?? undefined,
			});
		}
	}, [anilistViewerInfo]);

	const logins = useLiveQuery(
		async () => metaDB.logins.orderBy('lastUsed').reverse().toArray(),
		[],
	);

	const activeLogin = logins ? logins[logins.length - 1] : undefined;

	return { logins, activeLogin };
}

function useAuthSession() {
	const authSessionInfo = useNextAuthSessionInfo();

	useEffect(() => {
		if (authSessionInfo) {
			const { aniListID, expires, aniListAccessToken } = authSessionInfo;
			if (aniListID && expires && aniListAccessToken) {
				metaDB.accessTokens.put({
					id: aniListID,
					expires: Temporal.Instant.from(expires).epochMilliseconds,
					accessToken: aniListAccessToken,
				});
			}
		}
	}, [authSessionInfo]);

	const aniListID = authSessionInfo?.aniListID;
	const token = useLiveQuery(
		async () => (aniListID ? metaDB.accessTokens.get(aniListID) : null),
		[aniListID],
	);
	warning(
		!aniListID || !token || aniListID === token.id,
		'Token and active login do not match',
	);

	return { authSessionInfo };
}

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { authSessionInfo } = useAuthSession();
	const { activeLogin } = useMetaLogins(authSessionInfo ?? null);
	const activeToken = useLoginToken(activeLogin);
	const activeLoginContext = useMemo(
		(): ActiveLoginContext => ({
			login: activeLogin ?? null,
			token: activeToken ?? null,
		}),
		[activeLogin, activeToken],
	);

	const titleLanguageOrder = titleLanguageOrderForPreference(
		activeLogin?.titleLanguage,
	);

	return (
		<ActiveLoginContext.Provider value={activeLoginContext}>
			<TitleLanguageOrderContext.Provider value={titleLanguageOrder}>
				<div className="min-h-full">
					<Header
						userHasSession={authSessionInfo?.hasSession}
						userName={activeLogin?.name}
						userAvatar={activeLogin?.mediumAvatar}
						onSignIn={() => signIn('anilist')}
						onSignOut={() => signOut()}
					/>
					<main className="-mt-24 pb-8">
						<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
							{children}
						</div>
					</main>
					<Footer />
				</div>
			</TitleLanguageOrderContext.Provider>
		</ActiveLoginContext.Provider>
	);
}
