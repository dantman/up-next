/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from '@react-hookz/web';
import clsx from 'clsx';
import { forwardRef, ImgHTMLAttributes, Ref } from 'react';

export interface BackgroundCoveringImageProps
	extends ImgHTMLAttributes<HTMLImageElement> {}

/**
 * An `<img />` element that behaves like a background image when accompanied by a relative parent and siblings
 */
export const BackgroundCoveringImage = forwardRef(
	function BackgroundCoveringImage(
		{ className, ...props }: BackgroundCoveringImageProps,
		ref: Ref<HTMLImageElement>,
	) {
		const shouldAvoidBackground = useMediaQuery(
			'(prefers-reduced-transparency: reduce), (prefers-contrast: more), (prefers-reduced-data: reduce',
		);

		// In some cases we want to avoid the background and omit the image entirely
		// - When the user has an accessibility preference to reduce transparency
		// - When the user needs high-contrast
		// - When the user has a data restriction
		if (shouldAvoidBackground) return null;

		return (
			<img
				ref={ref}
				fetchPriority="low"
				{...props}
				className={clsx(
					'absolute inset-0 z-0 h-full w-full object-cover',
					className,
				)}
			/>
		);
	},
);
