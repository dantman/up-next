import warning from 'warning';

/**
 * Variant switching helper useful in combination with clsx for switching between sets of Tailwind CSS classes
 */
export function variants<Variant extends string, Result = string>(
	value: Variant,
	variants: Record<Variant, Result>,
): Result {
	warning(
		value in variants,
		`${value} is not a valid variant for ${Object.keys(variants).join(', ')}`,
	);

	if (value in variants) {
		return variants[value];
	}

	// Assume that the first item in the list is the default
	for (const variant in variants) {
		return variants[variant];
	}

	throw new Error('Invariant: Variants list is likely empty');
}
