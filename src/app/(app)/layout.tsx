'use client';
import { useQuery } from '@tanstack/react-query';
import { getSession, signIn, signOut } from 'next-auth/react';
import { anilist } from '../../anilist-client';
import { Footer } from '../../framework/layout/Footer';
import { Header } from '../../framework/layout/Header';

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

	return (
		<div className="min-h-full">
			<Header
				userHasSession={authProfileInfo?.hasSession}
				userName={anilistViewerInfo?.name}
				userAvatar={anilistViewerInfo?.avatar?.medium ?? undefined}
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
