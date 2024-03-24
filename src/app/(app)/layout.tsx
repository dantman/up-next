'use client';
import { useQuery } from '@tanstack/react-query';
import { useLiveQuery } from 'dexie-react-hooks';
import { getSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { anilist } from '../../anilist-client';
import { Footer } from '../../framework/layout/Footer';
import { Header } from '../../framework/layout/Header';
import { metaDB } from '../../local-db/metadb';

function useMetaLogins() {
	const { data: anilistViewerInfo } = useQuery({
		queryKey: ['AnilistViewerInfo'],
		queryFn: () =>
			anilist
				.query({
					Viewer: {
						id: true,
						name: true,
						avatar: {
							medium: true,
						},
						bannerImage: true,
						siteUrl: true,
					},
				})
				.then((data) => data.Viewer),
	});

	useEffect(() => {
		if (anilistViewerInfo) {
			const { id, name, avatar } = anilistViewerInfo;

			metaDB.logins.put({
				id,
				name,
				mediumAvatar: avatar?.medium ?? undefined,
				lastUsed: Date.now(),
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

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { data: authProfileInfo } = useQuery({
		queryKey: ['AuthProfileInfo'],
		queryFn: async () => {
			const session = await getSession();
			return { ...session, hasSession: !!session };
		},
	});

	const { activeLogin } = useMetaLogins();

	return (
		<div className="min-h-full">
			<Header
				userHasSession={authProfileInfo?.hasSession}
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
	);
}
