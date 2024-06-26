import 'client-only';
import { Dexie, DexieOptions, Table } from 'dexie';
import {
	MediaFormat,
	MediaSeason,
	MediaStatus,
	PartialDate,
} from '../../anilist-client';
import { DB_PREFIX } from '../prefix';

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
	startDate: PartialDate | null;
	endDate: PartialDate | null;
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

export class MediaDB extends Dexie {
	// Tables is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	media!: Table<MediaData>;

	constructor(options?: DexieOptions) {
		super(DB_PREFIX + 'media', options);
		this.version(1).stores({
			media: `&id,updatedAt,format,status,type`,
		});
		this.version(2).upgrade(async (tx) => {
			// FuzzyDate has changed from ISO string to a PartialDate object
			// this hasn't been published yet so it's simplest to truncate the database.
			await tx.table('media').clear();
		});
	}
}

export const mediaDB = new MediaDB({ autoOpen: true });
