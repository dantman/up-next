'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import 'client-only';
import { queryClient } from './client';

/**
 * Provides react-query's QueryClient to client components
 */
export default function ReactQueryProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
