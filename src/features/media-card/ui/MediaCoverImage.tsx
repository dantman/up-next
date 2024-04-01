/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ImgHTMLAttributes, Ref } from 'react';
import { MediaData } from '../../../local-db/mediadb';

export interface MediaCoverImageProps
	extends HTMLAttributes<HTMLDivElement>,
		Pick<
			ImgHTMLAttributes<HTMLImageElement>,
			'decoding' | 'fetchPriority' | 'loading'
		> {
	coverImage: MediaData['coverImage'] | undefined;
	imgProps?: Omit<
		ImgHTMLAttributes<HTMLImageElement>,
		'src' | 'srcset' | 'sizes' | 'width' | 'height' | 'usemap'
	>;
}

/**
 * UI element to display an AniList media cover image
 */
export const MediaCoverImage = forwardRef(function MediaCoverImage(
	props: MediaCoverImageProps,
	ref: Ref<HTMLDivElement>,
) {
	const {
		coverImage,
		decoding,
		imgProps: imgPropsProp,
		...divPropsProp
	} = props;
	const src = coverImage?.medium;
	const color = coverImage?.color;

	const divProps = { ...divPropsProp };
	const imgProps = { alt: '', decoding, ...imgPropsProp, src };

	return (
		<div
			ref={ref}
			{...divProps}
			className={clsx(
				'flex flex-row content-center items-center overflow-hidden object-center',
				// Medium size cover images in AniList are mostly 100px wide with some outliers that are slightly narrower
				// The heights of 100px wide images vary much more widly but seem to average somewhere around 140px so crop to that aspect ratio
				'aspect-[100/140]',
				divProps.className,
			)}
			style={color ? { backgroundColor: color } : undefined}
		>
			{src && (
				<img
					{...imgProps}
					className={clsx(
						'max-h-full w-full object-none object-center',
						imgProps?.className,
					)}
					src={src}
				/>
			)}
		</div>
	);
});
