import invariant from 'invariant';
import { MetaLogin, metaDB } from '../local-db/metadb';
import { useActiveLoginToken } from '../login-state/ActiveLogin';
import { Client as AniListClient, createClient } from './__generated__';
export type { AniListClient };

export function useAniList() {
	const login = useActiveLoginToken();
	console.log(login);
	return createClient({
		url: 'https://graphql.anilist.co',
		headers: login?.isProbablyValid
			? {
					Authorization: 'Bearer ' + login.accessToken,
				}
			: undefined,
	});
}

/**
 * Get an AniList client for a known access token
 */
export function getAniListClient(accessToken: string | null): AniListClient {
	return createClient({
		url: 'https://graphql.anilist.co',
		headers: {
			Authorization: 'Bearer ' + accessToken,
		},
	});
}

/**
 * Get the AniList client with a login's access token
 */
export async function getAniList(login: MetaLogin): Promise<AniListClient> {
	const token = await metaDB.accessTokens.get(login.id);
	invariant(token, `Could not find token for ${login.id} in MetaDB`);
	return getAniListClient(token.accessToken);
}
