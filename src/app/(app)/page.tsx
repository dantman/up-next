'use client';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { useMutation, useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import invariant from 'invariant';
import { useEffect, useState } from 'react';
import {
	fuzzyDateToIsoDate,
	getAniList,
	withoutNulls,
} from '../../anilist-client';
import { DialogIconHeader } from '../../framework/dialog/DialogIconHeader';
import { DialogMessageContainer } from '../../framework/dialog/DialogMessageContainer';
import { DialogShell } from '../../framework/dialog/DialogShell';
import { DialogTitle } from '../../framework/dialog/DialogTitle';
import { styleVariables } from '../../framework/tw-utils/styleVariables';
import { MediaData, mediaDB } from '../../local-db/mediadb';
import { MetaLogin } from '../../local-db/metadb';
import { useActiveLogin } from '../../login-state/ActiveLogin';
import { useLoginToken } from '../../login-state/useLoginToken';

export default function Home() {
	const activeLogin = useActiveLogin();
	const token = useLoginToken(activeLogin);

	// @todo Add UI for when user is not loaded
	// @todo Separate code using the anilist API so the UI can run without the token
	return activeLogin && token ? (
		<AuthenticatedHome activeLogin={activeLogin} />
	) : null;
}

function AuthenticatedHome({ activeLogin }: { activeLogin: MetaLogin }) {
	const { data: lastUpdatedMediaListEntry } = useQuery(
		activeLogin
			? {
					queryKey: ['LastUpdatedMediaListEntry', activeLogin.id],
					queryFn: async () =>
						(await getAniList(activeLogin))
							.query({
								MediaList: {
									__args: {
										userId: activeLogin.id,
										type: 'ANIME',
										sort: ['UPDATED_TIME_DESC'],
									},
									id: true,
									updatedAt: true,
								},
							})
							.then((data) => data.MediaList),
				}
			: { enabled: false, queryKey: [], queryFn: () => null },
	);
	const { data: mediaListUpdates } = useQuery(
		activeLogin
			? {
					queryKey: ['MediaListUpdates', activeLogin.id],
					queryFn: async () =>
						(await getAniList(activeLogin)).query({
							MediaListCollection: {
								__args: {
									userId: activeLogin.id,
									type: 'ANIME',
									forceSingleCompletedList: true,
								},
								hasNextChunk: true,
								lists: {
									entries: {
										id: true,
										updatedAt: true,
										media: {
											id: true,
											updatedAt: true,
										},
									},
								},
							},
						}),
				}
			: { enabled: false, queryKey: [], queryFn: () => null },
	);

	const [syncProgress, setSyncProgress] = useState<null | number>(null);
	const { mutate: fullSync, isPending: isFullSyncPending } = useMutation({
		mutationFn: async (login: MetaLogin) => {
			console.log({ login });
			setSyncProgress(null);
			const aniList = await getAniList(login);
			const { Viewer, MediaListCollection } = await aniList.query({
				Viewer: {
					id: true,
				},
				MediaListCollection: {
					__args: {
						userId: login.id,
						type: 'ANIME',
						forceSingleCompletedList: true,
					},
					hasNextChunk: true,
					lists: {
						name: true,
						entries: {
							id: true,
							status: true,
							media: {
								id: true,
								updatedAt: true,
							},
							progress: true,
							repeat: true,
							priority: true,
							private: true,
							hiddenFromStatusLists: true,
							updatedAt: true,
						},
					},
				},
			});
			console.log({ Viewer, MediaListCollection });
			invariant(MediaListCollection, 'Expected to get a result');
			invariant(Viewer?.id === login.id, 'Got media list for the wrong user');
			invariant(
				!MediaListCollection.hasNextChunk,
				'Expected to get everything in one chunk',
			);
			const x = {
				[Symbol.iterator]: function* () {
					invariant(MediaListCollection.lists, 'Expected a lists response');
					for (const list of MediaListCollection.lists) {
						invariant(list, 'Expected list to not be null');
						invariant(list.entries, 'Expected list to have entries');
						for (const entry of list.entries) {
							invariant(entry, 'Expected entry to not be null');
							yield entry;
						}
					}
				},
			};

			const mediaIds = Array.from({
				[Symbol.iterator]: function* () {
					for (const mediaList of x) {
						const media = mediaList.media;
						if (!media) continue;
						yield media.id;
					}
				},
			});

			// @todo Find a good way to chunk, what about DataLoader?
			const CHUNK_SIZE = 50;
			const chunkIds = mediaIds.slice(0, CHUNK_SIZE);
			const chunkData = await aniList.query({
				Page: {
					__args: { page: 0, perPage: CHUNK_SIZE },
					pageInfo: { hasNextPage: true },
					media: {
						__args: { id_in: chunkIds },
						id: true,
						updatedAt: true,
						siteUrl: true,
						format: true,
						status: true,
						title: {
							romaji: true,
							english: true,
							native: true,
						},
						synonyms: true,
						description: true,
						coverImage: {
							color: true,
							medium: true,
							large: true,
						},
						bannerImage: true,
						season: true,
						seasonYear: true,
						startDate: {
							year: true,
							month: true,
							day: true,
						},
						endDate: {
							year: true,
							month: true,
							day: true,
						},
						episodes: true,
						duration: true,
						hashtag: true,
						nextAiringEpisode: {
							id: true,
							airingAt: true,
							timeUntilAiring: true,
							episode: true,
						},
						genres: true,
						averageScore: true,
						meanScore: true,
						popularity: true,
						trending: true,
						// @todo Try and get information out of this in the future
						// streamingEpisodes: {
						// 	title: true,
						// 	thumbnail: true,
						// 	url: true,
						// 	site: true,
						// },
					},
				},
			});

			invariant(chunkData?.Page?.media, 'Expected bulk fetch to return media');
			invariant(
				!chunkData.Page?.pageInfo?.hasNextPage,
				'Bulk media fetching should not paginate',
			);
			const { media } = chunkData.Page;
			const bulkMedia = withoutNulls(media).map(function (media): MediaData {
				invariant(media.title, 'Expected media to have a title');

				return {
					id: media.id,
					updatedAt: media.updatedAt,
					siteUrl: media.siteUrl,
					format: media.format,
					status: media.status,
					title: {
						romaji: media.title.romaji,
						english: media.title.english,
						native: media.title.native,
					},
					synonyms: withoutNulls(media.synonyms),
					description: media.description,
					coverImage: media.coverImage
						? {
								color: media.coverImage.color,
								medium: media.coverImage.medium,
								large: media.coverImage.large,
							}
						: null,
					bannerImage: media.bannerImage,
					season: media.season,
					seasonYear: media.seasonYear,
					startDate: media.startDate
						? fuzzyDateToIsoDate(media.startDate)
						: null,
					endDate: media.endDate ? fuzzyDateToIsoDate(media.endDate) : null,
					episodes: media.episodes,
					duration: media.duration,
					hashtag: media.hashtag,
					nextAiringEpisode: media.nextAiringEpisode
						? {
								id: media.nextAiringEpisode.id,
								airingAt: media.nextAiringEpisode.airingAt,
								timeUntilAiring: media.nextAiringEpisode.timeUntilAiring,
								episode: media.nextAiringEpisode.episode,
							}
						: null,
					genres: withoutNulls(media.genres),
					averageScore: media.averageScore,
					meanScore: media.meanScore,
					popularity: media.popularity,
					trending: media.trending,
				};
			});
			console.log({ bulkMedia });
			// await mediaDB.media.bulkGet(mediaIDs)
			await mediaDB.media.bulkPut(bulkMedia);

			const mediaTotal = mediaIds.length;
			let mediaDone = 0;
			mediaDone += chunkIds.length;
			const mediaProgress = mediaDone / mediaTotal;

			const mediaListProgress = 0;

			// For progress bar use
			// - Media syncing 80%
			// - User media list syncing 20%
			const progress = mediaProgress * 0.8 + mediaListProgress * 0.2;
			setSyncProgress(progress);

			// await new Promise((resolve) => {
			// 	setTimeout(resolve, 60_000 * 5);
			// });
		},
	});

	useEffect(() => {
		if (activeLogin) {
			fullSync(activeLogin);
		}
	}, [activeLogin, fullSync]);

	// useEffect(() => {
	// 	if (activeLogin && isFullSyncPending) {
	// 		return () => {
	// 			setTimeout(() => {
	// 				fullSync(activeLogin);
	// 			}, 5_000);
	// 		};
	// 	}
	// }, [activeLogin, fullSync, isFullSyncPending]);

	// @todo Use these to trigger updates
	// console.log({ lastUpdatedMediaListEntry, mediaListUpdates });

	return (
		<>
			<DialogShell
				open={isFullSyncPending}
				onClose={() => {
					if (isFullSyncPending) {
						console.warn('Close ignored because full sync is still running');
					}
				}}
				className="bg-yellow-50/90"
			>
				<DialogIconHeader
					bg="bg-yellow-900/10"
					icon={<ArrowDownOnSquareIcon className="text-black" />}
				/>
				<DialogTitle>Syncing from AniList</DialogTitle>
				<DialogMessageContainer>
					<p>
						{
							"Please wait a bit. We're setting up your local anime database and syncing your watch list from AniList."
						}
					</p>

					<div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
						<div
							className={clsx(
								'h-2.5 origin-left rounded-full bg-indigo-600',
								syncProgress == null
									? 'indeterminate w-full'
									: 'w-[--progress-percent]',
							)}
							style={styleVariables(
								{},
								{
									'--progress-percent':
										syncProgress == null
											? '0%'
											: (syncProgress * 100).toFixed(4) + '%',
								},
							)}
						></div>
					</div>
				</DialogMessageContainer>
			</DialogShell>
			<h1 className="sr-only">Page title</h1>
			{/* Main 3 column grid */}
			<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
				{/* Left column */}
				<div className="grid grid-cols-1 gap-4 lg:col-span-2">
					<section aria-labelledby="section-1-title">
						<h2 className="sr-only" id="section-1-title">
							Section title
						</h2>
						<div className="overflow-hidden rounded-lg bg-white shadow">
							<div className="p-6">{/* Your content */}</div>
						</div>
					</section>
				</div>

				{/* Right column */}
				<div className="grid grid-cols-1 gap-4">
					<section aria-labelledby="section-2-title">
						<h2 className="sr-only" id="section-2-title">
							Section title
						</h2>
						<div className="overflow-hidden rounded-lg bg-white shadow">
							<div className="p-6">{/* Your content */}</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
