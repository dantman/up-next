import 'client-only';
import { Dexie, DexieOptions, Table } from 'dexie';
import { DB_PREFIX } from '../prefix';

export interface MetaLogin {
	id: number;
	name: string;
	mediumAvatar: string | undefined;
	lastUsed: number;
}

export class MetaDB extends Dexie {
	// Tables is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	logins!: Table<MetaLogin>;

	constructor(options?: DexieOptions) {
		super(DB_PREFIX + 'meta', options);

		this.version(1).stores({
			logins: '&id,lastUsed',
		});
	}
}

export const metaDB = new MetaDB({ autoOpen: true });
