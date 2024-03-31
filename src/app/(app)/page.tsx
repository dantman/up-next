'use client';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { useMutation, useQuery } from '@tanstack/react-query';
import chunkify from 'chunkify';
import 'client-only';
import clsx from 'clsx';
import invariant from 'invariant';
import { useState } from 'react';
import {
	fuzzyDateToIncompleteDate,
	getAniList,
	withoutNulls,
} from '../../anilist-client';
import { DialogIconHeader } from '../../framework/dialog/DialogIconHeader';
import { DialogMessageContainer } from '../../framework/dialog/DialogMessageContainer';
import { DialogShell } from '../../framework/dialog/DialogShell';
import { DialogTitle } from '../../framework/dialog/DialogTitle';
import { unwrapAction } from '../../framework/server-actions/client';
import { styleVariables } from '../../framework/tw-utils/styleVariables';
import { MediaData, mediaDB } from '../../local-db/mediadb';
import { MetaLogin } from '../../local-db/metadb';
import { useActiveLogin } from '../../login-state/ActiveLogin';
import { useLoginToken } from '../../login-state/useLoginToken';
import { getBulkAnilistMedia } from './actions';

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

			const mediaIds = new Map<number, number>(
				Array.from({
					[Symbol.iterator]: function* () {
						for (const mediaList of x) {
							const media = mediaList.media;
							if (!media) continue;
							invariant(media.updatedAt, 'updatedAt cannot be null');
							yield [media.id, media.updatedAt];
						}
					},
				}),
			);

			// Sync media in chunks
			const progress = {
				mediaTotal: mediaIds.size,
				mediaDone: 0,
				get mediaProgress() {
					return this.mediaDone / this.mediaTotal;
				},
				get mediaListProgress() {
					return 0;
				},
				get total() {
					// For progress bar use
					// - Media syncing 80%
					// - User media list syncing 20%
					return this.mediaProgress * 0.8 + this.mediaListProgress * 0.2;
				},
			};
			const CHUNK_SIZE = 20;
			for (const chunkIdEntries of chunkify(mediaIds.entries(), CHUNK_SIZE)) {
				const media = await unwrapAction(
					getBulkAnilistMedia(new Map(chunkIdEntries)),
				);

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
							? fuzzyDateToIncompleteDate(media.startDate)
							: null,
						endDate: media.endDate
							? fuzzyDateToIncompleteDate(media.endDate)
							: null,
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

				progress.mediaDone += chunkIdEntries.length;
				setSyncProgress(progress.total);
			}
		},
	});

	// useEffect(() => {
	// 	if (activeLogin) {
	// 		fullSync(activeLogin);
	// 	}
	// }, [activeLogin, fullSync]);

	(window as any).startFullSync = () => fullSync(activeLogin);

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
