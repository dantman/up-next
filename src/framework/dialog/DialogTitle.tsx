import {
	Dialog as HeadlessDialog,
	DialogTitleProps as HeadlessDialogTitleProps,
} from '@headlessui/react';
import clsx from 'clsx';
import { ReactElement, Ref, forwardRef } from 'react';

export type DialogTitleElementTypes = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type DialogTitleProps<TTag extends DialogTitleElementTypes> =
	HeadlessDialogTitleProps<TTag> & { className?: string };

/**
 *
 */
export const DialogTitle = forwardRef(function DialogTitle<
	TTag extends DialogTitleElementTypes,
>(
	{ as: asElement, className, ...props }: DialogTitleProps<TTag>,
	ref: Ref<HTMLHeadingElement>,
) {
	return (
		<HeadlessDialog.Title
			ref={ref}
			as={asElement ?? 'h3'}
			{...props}
			className={clsx(
				'mb-2 text-center text-base font-semibold leading-6 text-gray-900',
				className,
			)}
		/>
	);
}) as <TTag extends DialogTitleElementTypes>(
	props: DialogTitleProps<TTag>,
) => ReactElement;
