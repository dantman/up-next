import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
	const clientUserAgent = req.headers.get('User-Agent');
	const requestHeaders = new Headers({
		'User-Agent':
			'UpNext/github.com/dantman/up-next' +
			(clientUserAgent ? ' ' + clientUserAgent : ''),
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Referer: req.nextUrl.origin,
	});

	if (req.ip) {
		requestHeaders.set('X-Forwarded-For', String(req.ip));
	}

	for (const [headerName, headerValue] of req.headers.entries()) {
		// Copy some headers from the client request
		// - Sec-Ch-*
		// - Accept-Language
		// - Authorization
		if (/^(Sec-Ch-.+|Accept-Language|Authorization)$/i.test(headerName)) {
			requestHeaders.set(headerName, headerValue);
		}
	}

	const res = await fetch('https://graphql.anilist.co', {
		method: 'POST',
		headers: requestHeaders,
		body: await req.text(),
	});

	const responseHeaders = new Headers({
		'Content-Type': 'application/json',
	});
	for (const [headerName, headerValue] of res.headers.entries()) {
		// Copy some headers from the response
		// - X-Content-Type-Options
		// - X-RateLimit-*
		// - RetryAfter
		// - Cf-*
		if (
			/^(Content-Type|X-Content-Type-Options|X-RateLimit-.+|RetryAfter|Cf-.+)$/i.test(
				headerName,
			)
		) {
			responseHeaders.set(headerName, headerValue);
		}
	}

	// @note For now we parse the JSON and don't pass Content-Type through for security
	//       If there are any HTTP errors from CloudFlare or AniList we may need to decide what to pass through.
	return Response.json(await res.json(), {
		status: res.status,
		statusText: res.statusText,
		headers: responseHeaders,
	});
}
