import Bottleneck from 'bottleneck';
import ms from 'ms';
import warning from 'warning';

function parseLimit(rate: string | null) {
	if (rate == null) return NaN;
	warning(
		/^\d+$/.test(rate),
		`Expected rate number "${rate}" to only contain digits`,
	);
	return parseInt(rate);
}

const REQUESTS_PER_MINUTE = 30;
export const limiter = new Bottleneck({
	minTime: ms('1 minute') / REQUESTS_PER_MINUTE,
	maxConcurrent: 2,
});

let clientRateLimitPerMinute = Infinity;
let requestRemaining = Infinity;

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
