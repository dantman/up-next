import 'client-only';
import invariant from 'invariant';
import { MetaLogin, metaDB } from '../local-db/metadb';
import { Client as AniListClient, createClient } from './__generated__';
import { makeAniListFetcher } from './fetcher';
export type { AniListClient };

/**
 * Get an AniList client for a known access token
 */
export function getAniListClient(
	getAccessToken: (() => string | Promise<string>) | null,
): AniListClient {
	const url = '/api/anilist/graphql';
	return createClient({
		url,
		fetcher: makeAniListFetcher(url, async () => getAccessToken?.() ?? null),
	});
}

/**
 * Get the AniList client with a login's access token
 */
export async function getAniList(login: MetaLogin): Promise<AniListClient> {
	return getAniListClient(async () => {
		const token = await metaDB.accessTokens.get(login.id);
		invariant(token, `Could not find token for ${login.id} in MetaDB`);
		return token.accessToken;
	});
}
