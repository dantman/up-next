'use client';
import 'client-only';
import { createContext, useContext } from 'react';
import { MetaLogin } from '../local-db/metadb';

export const ActiveLoginContext = createContext<null | MetaLogin>(null);

/**
 * Get the currently active MetaLogin
 */
export function useActiveLogin() {
	return useContext(ActiveLoginContext);
}
