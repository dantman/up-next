import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

export interface NextAuthSessionInfo extends Partial<Session> {
	hasSession: boolean;
}

/**
 * Get the data stored in NextAuth's session
 */
export function useNextAuthSessionInfo(
	options?: Omit<
		UndefinedInitialDataOptions<
			NextAuthSessionInfo,
			Error,
			NextAuthSessionInfo,
			['NextAuthSessionInfo']
		>,
		'queryKey' | 'queryFn'
	>,
): NextAuthSessionInfo | undefined {
	const { data: sessionInfo } = useQuery({
		...options,
		queryKey: ['NextAuthSessionInfo'],
		queryFn: async (): Promise<NextAuthSessionInfo> => {
			const session = await getSession();
			return { ...session, hasSession: !!session };
		},
	});

	return sessionInfo;
}
