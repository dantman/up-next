'use client';
import 'client-only';
import { createContext, useContext } from 'react';
import { MetaLogin } from '../local-db/metadb';
import { MetaLoginAccessTokenState } from './useLoginToken';

export interface ActiveLoginContext {
	login: MetaLogin | null;
	token: MetaLoginAccessTokenState | null;
}

export const ActiveLoginContext = createContext<ActiveLoginContext>({
	login: null,
	token: null,
});

/**
 * Get the currently active MetaLogin
 */
export function useActiveLogin(): MetaLogin | null {
	return useContext(ActiveLoginContext).login;
}

export function useActiveLoginToken(): MetaLoginAccessTokenState | null {
	return useContext(ActiveLoginContext).token;
}
