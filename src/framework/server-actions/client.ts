import 'client-only';
import { PackedError, unpackError } from './errors';
import { WrappedActionReturnValue } from './types';

/**
 * Unwrap the response from a Server Action
 *
 * Main functionality is to unwrap the result and either return or re-throw an error
 *
 * @throws Re-throws Error from response
 */
export async function unwrapAction<const Result>(
	actionResult: Promise<WrappedActionReturnValue<Result, PackedError>>,
): Promise<Result> {
	const wrapped = await actionResult;
	if ('error' in wrapped) {
		throw unpackError(wrapped.error);
	} else {
		return wrapped.result;
	}
}
