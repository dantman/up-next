import { Temporal } from '@js-temporal/polyfill';
import invariant from 'invariant';

/**
 * Convert a FuzzyDate object into an ISO date string
 */
export function fuzzyDateToIsoDate(fuzzyDate: {
	year?: number | null;
	month?: number | null;
	day?: number | null;
}): string {
	const { year, month, day } = fuzzyDate;
	invariant(
		year != null && month != null && day != null,
		`Expected fuzzy date "${year}-${month}-${day}" to have a full date`,
	);
	return new Temporal.PlainDate(year, month, day).toString();
}
