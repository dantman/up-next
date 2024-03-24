import { QueryClient } from '@tanstack/react-query';
import 'client-only';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,
		},
		mutations: {
			throwOnError: true,
		},
	},
});
