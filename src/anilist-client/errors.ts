import { JsonValue } from 'type-fest';
import { z } from 'zod';
import { parseContentType } from '../framework/fetch/utils/content-type';

/**
 * Shared Zod spec to match a HTTP Response Code
 */
const ZodHttpResponseCode = z.number().positive().int();

/**
 * Error thrown when an AniList or CloudFlare rate limit is hit
 */
export class RateLimitError extends Error {
	public readonly retryAfterSeconds: number;

	constructor(
		message: string,
		retryAfterSeconds: number | null,
		options?: ErrorOptions,
	) {
		super(message, options);
		this.retryAfterSeconds = retryAfterSeconds ?? 60;
	}

	toJSON(): Pick<RateLimitError, 'name' | 'message' | 'retryAfterSeconds'> {
		return {
			name: this.name,
			message: this.message,
			retryAfterSeconds: this.retryAfterSeconds,
		} satisfies JsonValue;
	}

	static fromJSON(
		json: ReturnType<RateLimitError['toJSON']>,
		options?: ErrorOptions,
	): RateLimitError {
		const { name, message, retryAfterSeconds } = json;
		const error = new RateLimitError(message, retryAfterSeconds, options);
		error.name = name;
		return error;
	}
}

/**
 * Zod spec for a simple JSON error from AniList.
 *
 * @example
 * ```json
 * {
 *   "error": {
 *     "status": 500,
 *     "messages": [
 *       "Bad request"
 *     ]
 *   }
 * }
 * ```
 */
const SimpleErrorResponse = z.object({
	error: z.object({
		status: ZodHttpResponseCode.optional(),
		messages: z.array(z.string()),
	}),
});

/**
 * @example
 * ```json
 * {
 *   "data": null,
 *   "errors": [
 *     { "message": "Too Many Requests.", "status": 429 }
 *   ]
 * }
 * ```
 */
const GraphQLErrorResponse = z.object({
	data: z.any(),
	errors: z.array(
		z
			.object({ message: z.string(), status: ZodHttpResponseCode.optional() })
			.passthrough(),
	),
});

/**
 * Error throw when AniList responds with a JSON error response
 */
export class AniListError extends Error {
	toJSON(): Pick<AniListError, 'name' | 'message'> {
		return {
			name: this.name,
			message: this.message,
		} satisfies JsonValue;
	}

	static fromJSON(
		json: ReturnType<AniListError['toJSON']>,
		options?: ErrorOptions,
	): AniListError {
		const { name, message } = json;
		const error = new AniListError(message, options);
		error.name = name;
		return error;
	}

	static async fromResponse(response: Response) {
		const contentType = parseContentType(response.headers.get('Content-Type'));
		const isResponseJson = contentType?.essence === 'application/json';

		const makeCause = (body: string) =>
			`AniList responded with ${response.status} ${response.statusText}\n${body}`;

		if (isResponseJson) {
			const responseData = await response.json();

			const cause = makeCause(JSON.stringify(responseData, null, 2));

			const simpleError = SimpleErrorResponse.safeParse(responseData);
			if (simpleError.success) {
				const { error } = simpleError.data;
				return new AniListError(error.messages.join('\n'), {
					cause,
				});
			}

			// For GraphQL
			const graphQlError = GraphQLErrorResponse.safeParse(responseData);
			if (graphQlError.success) {
				const { errors } = graphQlError.data;
				const aniListErrors = errors.map(
					(error) => new AniListError(error.message, { cause: error }),
				);
				return new AniListMultiError(aniListErrors, { cause });
			}

			// For unknown error formats, just output the JSON
			return new AniListError(
				`AniList responded with an unexpected error:\n${JSON.stringify(responseData, null, 2)}`,
				{ cause },
			);
		} else {
			const responseText = await response.text();
			const cause = makeCause(responseText);
			// For unknown error formats, just output the body text
			// @todo If there are any plain text or HTML error responses from AniList or CloudFlare it may be worth extracting them
			return new AniListError(
				`AniList responded with an unexpected error:\n${responseText}`,
				{ cause },
			);
		}
	}
}

/**
 * An AniList error that may contain multiple error responses
 */
export class AniListMultiError extends AniListError {
	constructor(
		public readonly errors: AniListError[],
		options?: ErrorOptions,
	) {
		const message =
			'AniList responded with multiple errors:\n' +
			errors.map((error) => error.message).join('\n');
		super(message, options);
	}
}
