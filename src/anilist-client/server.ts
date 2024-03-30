import { Client as AniListClient, createClient } from './__generated__';
import { makeAniListFetcher } from './fetcher';

/**
 * Get an AniList client that makes anonymous requests directly to AniList
 */
export function getPublicBackendAniListClient(): AniListClient {
	const url = 'https://graphql.anilist.co';
	return createClient({ url, fetcher: makeAniListFetcher(url, null) });
}
