/**
 * A server action return value that has been wrapped to be sent to the client
 * Primarily separates the result and error so the client can re-throw it
 */
export type WrappedActionReturnValue<Result, Error = unknown> =
	| { result: Result }
	| { error: Error };
