import clsx from 'clsx';
import { forwardRef, Ref } from 'react';
import {
	ButtonLink,
	ButtonLinkElement,
	ButtonLinkProps,
} from '../buttonlink/ButtonLink';
import { variants } from '../tw-utils/variants';

export type DialogButtonVariant = 'primary' | 'gray' | 'outlined';

export interface DialogButtonProps extends ButtonLinkProps {
	variant?: DialogButtonVariant;
	fullWidth?: boolean;
}

/**
 * Button styled button/link element for Dialog actions
 */
export const DialogButton = forwardRef(function DialogButton(
	{
		variant = 'outlined',
		fullWidth = true,
		children,
		className,
		...buttonProps
	}: DialogButtonProps,
	ref: Ref<ButtonLinkElement>,
) {
	const colorsOn = variants<DialogButtonVariant, 'outline' | 'bg'>(variant, {
		outlined: 'outline',
		gray: 'bg',
		primary: 'bg',
	});

	return (
		<ButtonLink
			ref={ref}
			type="button"
			{...buttonProps}
			className={clsx(
				'inline-flex justify-center',
				{ 'w-full': fullWidth },
				'rounded-md px-3 py-2 shadow-sm',
				'text-sm font-semibold',
				colorsOn === 'bg'
					? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
					: 'bg-opacity-0 ring-1 ring-inset',
				colorsOn === 'bg' ? '' : '',
				variants(variant, {
					outlined: 'text-gray-900 ring-gray-300 hover:bg-gray-50',
					gray: 'bg-gray-300 text-white hover:bg-gray-400 focus-visible:outline-gray-500',
					primary:
						'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
				}),
			)}
		>
			{children}
		</ButtonLink>
	);
});
