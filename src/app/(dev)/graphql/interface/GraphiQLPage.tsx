'use client';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import 'client-only';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';
import ms from 'ms';
import { useMemo } from 'react';
import { useNextAuthSessionInfo } from '../../../../framework/auth/useNextAuthSession';

export function GraphiQLPage() {
	if (process.env.NODE_ENV !== 'development') {
		throw new Error(`GraphiQL is only available in development mode`);
	}

	const sessionInfo = useNextAuthSessionInfo({ refetchInterval: ms('30s') });
	const accessToken = sessionInfo?.aniListAccessToken;

	const fetcher = useMemo(
		() =>
			createGraphiQLFetcher({
				url: '/api/anilist/graphql',
				headers: accessToken
					? { Authorization: 'Bearer ' + accessToken }
					: undefined,
			}),
		[accessToken],
	);

	return <GraphiQL fetcher={fetcher} />;
}
