import 'client-only';
import { Dexie, DexieOptions, Table } from 'dexie';
import { MediaListStatus, PartialDate } from '../../anilist-client';
import { DB_PREFIX } from '../prefix';

export interface RawUserConsumptionData {
	id: number;
	mediaId: number;
	status: MediaListStatus | null;
	progress: number | null;
	repeat: number | null;
	priority: number | null;
	private: boolean | null;
	hiddenFromStatusLists: boolean | null;
	startedAt: PartialDate | null;
	completedAt: PartialDate | null;
	updatedAt: number;
}

export class UserConsumptionDB extends Dexie {
	// Tables is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	rawUserConsumption!: Table<RawUserConsumptionData>;

	constructor(userId: number, options?: DexieOptions) {
		super(DB_PREFIX + `userconsumption-${userId}`, options);
		this.version(1).stores({
			rawUserConsumption: `&id,mediaId,status,updatedAt`,
		});
	}
}

export function openUserConsumptionDB(userId: number): UserConsumptionDB {
	return new UserConsumptionDB(userId, {});
}
