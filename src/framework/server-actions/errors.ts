import { AniListError, RateLimitError } from '../../anilist-client/errors';

const IS_CLIENT_SAFE = Symbol('IS_CLIENT_SAFE');

/**
 * Mark an error as safe to return to the client
 */
export function clientSafe(error: Error): void {
	Object.defineProperty(error, IS_CLIENT_SAFE, {
		value: true,
		enumerable: false,
		writable: false,
		configurable: false,
	});
}

/**
 * Check if an error is safe to return to the client
 */
export function isClientSafe(error: unknown): boolean {
	return error != null && typeof error === 'object' && IS_CLIENT_SAFE in error;
}

/**
 * A client-safe Error wrapped in a plain JS object
 */
export type PackedError =
	| {
			$error_AniListError: ReturnType<AniListError['toJSON']> & {
				cause?: PackedCause;
			};
	  }
	| {
			$error_RateLimitError: ReturnType<RateLimitError['toJSON']> & {
				cause?: PackedCause;
			};
	  };

/**
 * Client safe `error.cause` wrapped in a plain JS object
 */
export type PackedCause = string | PackedError | null;

/**
 * Pack a client-safe error into a primitive that can be returned by a Server Action
 */
export function packError(error: unknown): PackedError {
	if (isClientSafe(error)) {
		// @todo Wrap built-in errors marked as client safe?
	}

	if (error instanceof AniListError) {
		// @todo AniListMultiError should probably be packed separately
		return {
			$error_AniListError: {
				...error.toJSON(),
				cause: packCause(error.cause),
			},
		};
	}

	if (error instanceof RateLimitError) {
		return {
			$error_RateLimitError: {
				...error.toJSON(),
				cause: packCause(error.cause),
			},
		};
	}

	console.warn('ServerActions re-throwing error not marked as client-safe:');
	throw error;
}

/**
 * Pack the "cause" of an error known to be safe
 * This will pack similarly to packError but will allow strings to be passed through and not re-throw errors
 */
function packCause(cause: unknown): PackedCause | undefined {
	if (cause == null || typeof cause === 'string') return cause;
	try {
		return packError(cause);
	} catch (e) {
		console.debug('Not sending error cause to client:', cause);
		// Return null for the cause when packError does not consider it safe to pass through
		return null;
	}
}

/**
 * Unpack a Server Action error primitive into an Error instance
 */
export function unpackError(packedErrorOrCause: unknown): unknown {
	if (packedErrorOrCause != null && typeof packedErrorOrCause === 'object') {
		const packedError = packedErrorOrCause as PackedError;

		if ('$error_AniListError' in packedError) {
			const { cause, ...json } = packedError.$error_AniListError;
			return AniListError.fromJSON(json, { cause: unpackError(cause) });
		}

		if ('$error_RateLimitError' in packedError) {
			const { cause, ...json } = packedError.$error_RateLimitError;
			return RateLimitError.fromJSON(json, {
				cause: unpackError(cause),
			});
		}
	}

	return packedErrorOrCause;
}
