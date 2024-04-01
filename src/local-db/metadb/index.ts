import 'client-only';
import { Dexie, DexieOptions, Table } from 'dexie';
import { UserTitleLanguage } from '../../anilist-client';
import { DB_PREFIX } from '../prefix';

export interface MetaLogin {
	id: number;
	name: string;
	mediumAvatar: string | undefined;
	lastUsed: number;
	profileColor: string | undefined;
	titleLanguage: UserTitleLanguage | undefined;
}

export interface MetaLoginAccessToken {
	id: number;
	expires: number;
	accessToken: string;
}

export class MetaDB extends Dexie {
	// Tables is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	logins!: Table<MetaLogin, number>;
	accessTokens!: Table<MetaLoginAccessToken, number>;

	constructor(options?: DexieOptions) {
		super(DB_PREFIX + 'meta', options);

		this.version(1).stores({
			logins: '&id,lastUsed',
		});
		this.version(2).stores({
			accessTokens: '&id,expires',
		});
	}
}

export const metaDB = new MetaDB({ autoOpen: true });
