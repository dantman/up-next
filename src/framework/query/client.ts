import { QueryClient } from '@tanstack/react-query';
import 'client-only';

function retry(failureCount: number, error: unknown) {
	console.debug(error);
	return false;
}

function onError(error: unknown) {
	console.error(error);
}

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,
			retry,
		},
		mutations: {
			throwOnError: true,
			retry,
			onError,
		},
	},
});
