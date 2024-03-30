import { FuzzyDateInput } from '..';

/**
 * Structure representing a partial date
 * Can be a full y-m-d date but can also be incomplete,
 * e.g. year-only, month-day, year-month, etc.
 *
 * This mirrors the FuzzyDate in the AniDB API but is locally written
 * so we can rely on the structure staying unchanged for local database usage
 */
export interface PartialDate {
	year: number | null;
	month: number | null;
	day: number | null;
}

/**
 * Convert a FuzzyDate object into an ISO date string
 */
export function fuzzyDateToIncompleteDate(
	fuzzyDate: Pick<FuzzyDateInput, 'year' | 'month' | 'day'>,
): PartialDate {
	const { year, month, day } = fuzzyDate;
	return {
		year: year ?? null,
		month: month ?? null,
		day: day ?? null,
	};
}
