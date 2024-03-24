import clsx from 'clsx';
import { forwardRef, HTMLAttributes, Ref } from 'react';

export interface DialogActionsProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Dialog footer for action buttons
 */
export const DialogActions = forwardRef(function DialogActions(
	{ className, ...props }: DialogActionsProps,
	ref: Ref<HTMLDivElement>,
) {
	return (
		<div
			ref={ref}
			{...props}
			className={clsx(
				// External padding
				'mt-5 sm:mt-6',
				// Internal layout
				'flex gap-3',
				// XS
				'flex-col',
				// SM
				'sm:flex-row-reverse sm:*:flex-1',
				className,
			)}
		/>
	);
});
