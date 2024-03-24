import { CSSProperties } from 'react';

export interface CSSVariables {
	[key: `--${string}`]: string | number | undefined;
}

/**
 * Extend a style prop with CSS Variables
 *
 * @note This exists primarily to silence TypeScript complaints about passing CSS variables to React's style prop
 */
export function styleVariables(
	style: CSSProperties | undefined,
	variables: CSSVariables,
): CSSVariables {
	return { ...style, ...variables };
}
