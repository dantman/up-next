import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(req: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session?.aniListAccessToken) {
		return Response.json(
			{
				errors: [
					{ message: 'Cannot call the AniList API without an AniList login' },
				],
			},
			{ status: 403 },
		);
	}

	const res = await fetch('https://graphql.anilist.co', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${session.aniListAccessToken}`,
		},
		body: await req.text(),
	});

	return Response.json(await res.json());
}
