'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import invariant from 'invariant';
import { useEffect } from 'react';
import {
	anilist,
	fuzzyDateToIsoDate,
	withoutNulls,
} from '../../anilist-client';
import { MediaData } from '../../local-db/mediadb';
import { MetaLogin } from '../../local-db/metadb';
import { useActiveLogin } from '../../login-state/ActiveLogin';

export default function Home() {
	const activeLogin = useActiveLogin();

	const { data: lastUpdatedMediaListEntry } = useQuery(
		activeLogin
			? {
					queryKey: ['LastUpdatedMediaListEntry', activeLogin.id],
					queryFn: () =>
						anilist
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
					queryFn: () =>
						anilist.query({
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

	const { mutate: fullSync } = useMutation({
		mutationFn: async (login: MetaLogin) => {
			console.log({ login });
			const { Viewer, MediaListCollection } = await anilist.query({
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
			const chunkData = await anilist.query({
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

			invariant(chunkData.Page?.media, 'Expected bulk fetch to return media');
			invariant(
				!chunkData.Page?.pageInfo?.hasNextPage,
				'Bulk media fetching should not paginate',
			);
			const { media } = chunkData.Page;
			console.log(
				media
					.filter((media) => !!media)
					.map(function (media): MediaData | null {
						if (!media) return null;

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
					}),
			);
		},
	});

	useEffect(() => {
		if (activeLogin) {
			fullSync(activeLogin);
		}
	}, [activeLogin, fullSync]);

	// console.log({ lastUpdatedMediaListEntry, mediaListUpdates });

	return (
		<>
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
