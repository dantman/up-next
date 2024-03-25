import ms from 'ms';
import warning from 'warning';
import { delay } from '../framework/utils/delay';

function parseLimit(rate: string | null) {
	if (rate == null) return NaN;
	warning(
		/^\d+$/.test(rate),
		`Expected rate number "${rate}" to only contain digits`,
	);
	return parseInt(rate);
}

// AniList makes clients wait 1 minute after going over their rate limit
// https://anilist.gitbook.io/anilist-apiv2-docs/overview/rate-limiting
const WAIT_PERIOD = ms('1 minute');

let clientRateLimitPerMinute = Infinity;
let requestRemaining = Infinity;

export async function waitRateLimit(): Promise<void> {
	requestRemaining--;

	// When the requests remaining gets low, wait half the wait limit
	if (requestRemaining < 60) {
		console.debug(
			`Waiting for half the wait period as ${requestRemaining} of ${rateLimitResult} requests have been used`,
		);
		await delay(WAIT_PERIOD / 2);
	}
}

export function rateLimitResult(headers: Headers) {
	const rateLimit = parseLimit(headers.get('X-RateLimit-Limit'));
	const rateLimitRemaining = parseLimit(headers.get('X-RateLimit-Remaining'));

	if (rateLimit != null && rateLimitRemaining != null) {
		console.debug(
			`Rate limit after request ${rateLimitRemaining} of ${rateLimit}`,
		);

		clientRateLimitPerMinute = rateLimit;
		requestRemaining = rateLimitRemaining;
	}
}
