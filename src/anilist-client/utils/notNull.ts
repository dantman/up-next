export type IsNotNullable<T> = T extends null | undefined ? never : T;

/**
 * GraphQL arrays are often (T | null)[], so this is used as a filter to omit the null values
 *
 * @internal TypeScript is picking the wrong overload of .filter when trying to remove null
 * @example
 * ```typescript
 * arrayFromGraphQL.filter(notNull);
 * ```
 */
export function notNull<T>(
	data: T | null | undefined,
): data is IsNotNullable<T> {
	return data != null;
}

/**
 * GraphQL arrays are often `(T | null)[] | null`, so this is used as a filter to omit the null values
 */
export function withoutNulls<T>(values: (T | null | undefined)[] | null): T[] {
	if (values == null) return [];
	return values.filter(notNull);
}
