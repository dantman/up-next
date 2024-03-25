import invariant from 'invariant';
import { MetaLogin, metaDB } from '../local-db/metadb';
import { useActiveLoginToken } from '../login-state/ActiveLogin';
import { Client as AniListClient, createClient } from './__generated__';
import { limiter, rateLimitResult } from './rateLimit';
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
export function getAniListClient(
	getAccessToken: (() => string | Promise<string>) | null,
): AniListClient {
	const url = 'https://graphql.anilist.co';
	return createClient({
		url,
		async fetcher(operation) {
			return await limiter.schedule(async () => {
				const accessToken = await getAccessToken?.();

				const response = await fetch(url, {
					method: 'POST',
					headers: {
						'User-Agent':
							'UpNext/github.com/dantman/up-next ' + navigator.userAgent,
						'Content-Type': 'application/json',
						Accept: 'application/json',
						Authorization: 'Bearer ' + accessToken,
					},
					body: JSON.stringify(operation),
				});

				rateLimitResult(response.headers);

				if (!response.ok) {
					throw new Error(`${response.statusText}: ${await response.text()}`);
				}

				return await response.json();
			});
		},
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
