import { MediaFormat, MediaSeason, MediaStatus } from '../../anilist-client';

export interface MediaData {
	id: number;
	updatedAt: number | null;
	siteUrl: string | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
	};
	synonyms: string[];
	description: string | null;
	coverImage: {
		color: string | null;
		medium: string | null;
		large: string | null;
	} | null;
	bannerImage: string | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	startDate: string | null;
	endDate: string | null;
	episodes: number | null;
	duration: number | null;
	hashtag: string | null;
	nextAiringEpisode: {
		id: number;
		airingAt: number;
		timeUntilAiring: number;
		episode: number;
	} | null;
	genres: string[];
	averageScore: number | null;
	meanScore: number | null;
	popularity: number | null;
	trending: number | null;
}
