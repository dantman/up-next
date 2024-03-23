'use client';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import 'client-only';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';

const fetcher = createGraphiQLFetcher({ url: '/api/anilist/graphql' });

export function GraphiQLPage() {
	if (process.env.NODE_ENV !== 'development') {
		throw new Error(`GraphiQL is only available in development mode`);
	}

	return <GraphiQL fetcher={fetcher} />;
}
