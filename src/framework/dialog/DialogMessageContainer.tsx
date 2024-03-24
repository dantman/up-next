import clsx from 'clsx';
import { forwardRef, HTMLAttributes, Ref } from 'react';

export interface DialogMessageContainerProps
	extends HTMLAttributes<HTMLDivElement> {}

/**
 * Container with styles for messages inside a dialog, should be used with a <p> tag
 *
 * @example
 * ```typescript
 * <Dialog>
 *   <DialogTitle>Hello world!</DialogTitle>
 *   <DialogMessageContainer>
 *     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
 *   </DialogMessageContainer>
 * </Dialog>
 * ```
 */
export const DialogMessageContainer = forwardRef(
	function DialogMessageContainer(
		{ className, ...props }: DialogMessageContainerProps,
		ref: Ref<HTMLDivElement>,
	) {
		return <div ref={ref} {...props} className={clsx('', className)} />;
	},
);
