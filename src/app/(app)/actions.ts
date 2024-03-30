'use server';
import invariant from 'invariant';
import { getPublicBackendAniListClient } from '../../anilist-client/server';

/**
 * Fetch a batch of Media objects from AniList
 *
 * This uses only publicly available data so cache can be shared between users
 * @todo Implement cache using cache() and a DataLoader
 */
export async function getBulkAnilistMedia(mediaIds: number[]) {
	const aniList = getPublicBackendAniListClient();

	const chunkData = await aniList.query({
		Page: {
			__args: { page: 0, perPage: mediaIds.length * 2 },
			pageInfo: { hasNextPage: true },
			media: {
				__args: { id_in: mediaIds },
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

	return media;
}
