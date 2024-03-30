import { BaseFetcher } from './__generated__/runtime/createClient';
import { limiter, rateLimitResult } from './rateLimit';

export class RateLimitError extends Error {
	public readonly retryAfterSeconds: number | null;

	constructor(message: string, retryAfterSeconds: number | null) {
		super(message);
		this.retryAfterSeconds = retryAfterSeconds;
	}
}

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

			if (response.status === 429) {
				const retryAfter = response.headers.get('Retry-After');
				throw new RateLimitError(
					await response.text(),
					retryAfter ? parseInt(retryAfter) : null,
				);
			}

			if (!response.ok) {
				throw new Error(`${response.statusText}: ${await response.text()}`);
			}

			return await response.json();
		});
	};
}
