import clsx from 'clsx';
import {
	cloneElement,
	forwardRef,
	HTMLAttributes,
	PropsWithoutRef,
	ReactElement,
	Ref,
	SVGProps,
} from 'react';

export interface DialogIconHeaderProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	icon: ReactElement<PropsWithoutRef<SVGProps<SVGSVGElement>>>;
	iconSize?: string;
	bg?: string;
	bgSize?: string;
}

/**
 *
 */
export const DialogIconHeader = forwardRef(function DialogIconHeader(
	{ icon, iconSize, bgSize, bg, className, ...props }: DialogIconHeaderProps,
	ref: Ref<HTMLDivElement>,
) {
	return (
		<div
			ref={ref}
			{...props}
			className={clsx(
				'flex',
				bgSize ?? 'h-12 w-12',
				'items-center justify-center rounded-full',
				'mx-auto mb-3 sm:mb-5',
				bg ?? 'bg-gray-100',
				className,
			)}
		>
			{cloneElement(icon, {
				className: clsx('h-6 w-6', icon.props.className),
				'aria-hidden': 'true',
			})}
		</div>
	);
});
