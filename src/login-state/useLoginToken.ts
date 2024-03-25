import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useMemo, useState } from 'react';
import { MetaLogin, MetaLoginAccessToken, metaDB } from '../local-db/metadb';

/**
 * Get the number of milliseconds until
 */
function getTimeToExpiry(
	token: MetaLoginAccessToken | null | undefined,
	now: number,
): number | null {
	if (token) {
		if (token.expires < now) {
			return token.expires - now;
		}
	}

	return null;
}

export interface MetaLoginAccessTokenState extends MetaLoginAccessToken {
	isProbablyValid: boolean;
}

/**
 * Get the saved login token
 */
export function useLoginToken(
	login: MetaLogin | null | undefined,
): MetaLoginAccessTokenState | null {
	const id = login?.id;
	const token = useLiveQuery(async () => {
		return id ? await metaDB.accessTokens.get(id) : null;
	}, [id]);

	const [delayedNow, setDelayedNow] = useState(() => Date.now());
	if (token) {
		token.expires;
	}
	const isProbablyValid = token ? token.expires >= delayedNow : false;
	const timeToExpiry = getTimeToExpiry(token, delayedNow);

	useEffect(() => {
		if (timeToExpiry != null) {
			const t = setTimeout(() => {
				setDelayedNow(Date.now());
			}, timeToExpiry);

			return () => {
				clearTimeout(t);
			};
		}
	}, [delayedNow, timeToExpiry]);

	return useMemo((): MetaLoginAccessTokenState | null => {
		return token ? { ...token, isProbablyValid } : null;
	}, [isProbablyValid, token]);
}
