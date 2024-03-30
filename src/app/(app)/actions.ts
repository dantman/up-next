'use server';
import DataLoader from 'dataloader';
import invariant from 'invariant';
import { unstable_cache } from 'next/cache';
import { AniListClient } from '../../anilist-client';
import { getPublicBackendAniListClient } from '../../anilist-client/server';

function makeGetAniListMedia(aniList: AniListClient) {
	const dl = new DataLoader(
		async (mediaIds: readonly number[]) => {
			console.log(`Fetching media from AniList: ${mediaIds.join(', ')}`);
			const chunkData = await aniList.query({
				Page: {
					__args: { page: 0, perPage: mediaIds.length * 2 },
					pageInfo: { hasNextPage: true },
					media: {
						__args: { id_in: mediaIds.slice() },
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
			const mediaEntries = chunkData.Page.media;
			const mediaMap = new Map<number, (typeof mediaEntries)[number]>();
			for (const media of mediaEntries) {
				if (!media) continue;
				mediaMap.set(media.id, media);
			}

			// DataLoader expects an array of the same order as the original IDs
			// So use a Map to ensure the output array matches the input ID array
			return mediaIds.map((mediaId) => mediaMap.get(mediaId) ?? null);
		},
		{
			maxBatchSize: 50,
			batchScheduleFn(callback) {
				setTimeout(callback, 10);
			},
		},
	);

	const getAniListMedia = unstable_cache(
		async (mediaId: number, updatedAt: number) => {
			invariant(
				updatedAt,
				'An updatedAt must be passed to ensure that old results are not returned from the cache',
			);
			return dl.load(mediaId);
		},
		['anilist-media'],
		{ tags: ['anilist-media'], revalidate: false },
	);

	return getAniListMedia;
}

/**
 * Fetch a batch of Media objects from AniList
 * Expects both a media ID and the updatedAt of that media to know when to update the cache
 *
 * This uses only publicly available data so cache can be shared between users
 *
 * @param queriedMedia A Map of mediaId => lastUpdatedAt
 */
export async function getBulkAnilistMedia(queriedMedia: Map<number, number>) {
	const aniList = getPublicBackendAniListClient();

	const getAniListMedia = makeGetAniListMedia(aniList);

	return await Promise.all(
		Array.from(queriedMedia.entries(), async ([mediaId, updatedAt]) => {
			return await getAniListMedia(mediaId, updatedAt);
		}),
	);
}
