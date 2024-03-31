import { BaseFetcher } from './__generated__/runtime/createClient';
import { AniListError, RateLimitError } from './errors';
import { limiter, rateLimitResult } from './rateLimit';

/**
 * Make a fetcher to pass to the AniList client
 * - Asynchronously gets access tokens
 * - Implements rate limit behaviour
 */
export function makeAniListFetcher(
	url: string,
	accessToken: (() => Promise<string | null>) | string | null,
): BaseFetcher {
	const getAccessToken =
		typeof accessToken === 'function' ? accessToken : async () => accessToken;

	return async function fetcher(operation) {
		return await limiter.schedule(async () => {
			const accessToken = await getAccessToken();

			const headers = new Headers({
				'Content-Type': 'application/json',
				Accept: 'application/json',
			});
			if (accessToken) {
				headers.set('Authorization', 'Bearer ' + accessToken);
			}

			const response = await fetch(url, {
				method: 'POST',
				headers,
				body: JSON.stringify(operation),
			});

			rateLimitResult(response.headers);

			if (!response.ok) {
				const aniListError = await AniListError.fromResponse(response);

				if (response.status === 429) {
					const retryAfter = response.headers.get('Retry-After');
					throw new RateLimitError(
						`${response.status} ${response.statusText}\n${aniListError.message}`,
						retryAfter ? parseInt(retryAfter) : null,
						{ cause: aniListError },
					);
				}

				throw aniListError;
			}

			// @todo Decide what to do with non-JSON responses
			return await response.json();
		});
	};
}
