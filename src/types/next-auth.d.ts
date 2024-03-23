import 'next-auth';

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		/** OAuth access token */
		aniListAccessToken?: string;
	}
}

declare module 'next-auth/jwt' {
	/** Returned by the `jwt` callback and `auth`, when using JWT sessions */
	interface JWT {
		/** OAuth access token */
		aniListAccessToken?: string;
	}
}
