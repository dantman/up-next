import invariant from 'invariant';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { z } from 'zod';

const UserQuery = /* GraphQL */ `
	{
		Viewer {
			id
			name
			avatar {
				large
				medium
			}
			bannerImage
			siteUrl
		}
	}
`;
const UserQueryResultSpec = z.object({
	data: z.object({
		Viewer: z.object({
			id: z
				.number()
				.int()
				.transform((id) => String(id)),
			name: z.string(),
			// @todo avatar
			// @todo bannerImage
			siteUrl: z.string().url(),
		}),
	}),
});

export const authOptions: NextAuthOptions = {
	providers: [
		{
			id: 'anilist',
			name: 'AniList',
			type: 'oauth',
			authorization: {
				url: 'https://anilist.co/api/v2/oauth/authorize',
				params: { scope: '' },
			},
			token: 'https://anilist.co/api/v2/oauth/token',
			userinfo: {
				async request(context) {
					invariant(context.tokens.access_token, 'Expected access token');
					const res = await context.client.requestResource(
						'https://graphql.anilist.co?' +
							new URLSearchParams({
								query: UserQuery,
							}),
						context.tokens.access_token,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								Accept: 'application/json',
							},
						},
					);
					return JSON.parse(res.body?.toString('utf-8') ?? 'null');
				},
			},
			idToken: false,
			checks: ['pkce', 'state'],
			profile(profile, tokens) {
				const { data } = UserQueryResultSpec.parse(profile);
				return data.Viewer;
			},
			clientId: process.env.ANILIST_CLIENT_ID,
			clientSecret: process.env.ANILIST_CLIENT_SECRET,
		},
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.aniListAccessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			session.aniListAccessToken = token.aniListAccessToken;
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
