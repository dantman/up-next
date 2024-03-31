import 'server-only';
import { PackedError, packError } from './errors';
import { WrappedActionReturnValue } from './types';

/**
 * Wrap a Server Action so it can be unwrapped on the client
 *
 * Main functionality is to wrap an error using a Result object
 */
export function wrapAction<const Args extends any[], const Result>(
	action: (...args: Args) => Promise<Result>,
): (...args: Args) => Promise<WrappedActionReturnValue<Result, PackedError>> {
	return async (...args) => {
		try {
			const result = await action(...args);
			return { result };
		} catch (error) {
			return { error: packError(error) };
		}
	};
}
