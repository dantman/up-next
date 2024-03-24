import {
	Dialog,
	DialogProps,
	Transition,
	TransitionRootProps,
} from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, HTMLAttributes, Ref, forwardRef } from 'react';
import { variants } from '../tw-utils/variants';

export interface DialogShellProps
	extends HTMLAttributes<HTMLDivElement>,
		Pick<DialogProps<'div'>, 'onClose'> {
	backdrop?: 'transparent' | 'light' | 'medium' | 'dark';
	open: TransitionRootProps<typeof Fragment>['show'];
}

/**
 *
 */
export const DialogShell = forwardRef(function DialogShell(
	props: DialogShellProps,
	ref: Ref<HTMLDivElement>,
) {
	const {
		backdrop = 'light',
		open,
		onClose,
		children,
		className,
		...divProps
	} = props;
	const transitionProps = { show: open } satisfies TransitionRootProps<
		typeof Fragment
	>;
	const dialogProps = { onClose } satisfies DialogProps<'div'>;

	return (
		<Transition.Root {...transitionProps} show={open} as={Fragment}>
			<Dialog {...dialogProps} as="div" className="relative z-10">
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div
						className={clsx(
							'fixed inset-0 transition-opacity',
							'',
							variants(backdrop, {
								light: 'bg-gray-800 bg-opacity-20',
								transparent: 'bg-transparent bg-opacity-0',
								medium: 'bg-gray-800 bg-opacity-50',
								dark: 'bg-gray-900 bg-opacity-90',
							}),
						)}
					/>
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel
								ref={ref}
								{...divProps}
								as="div"
								className={clsx(
									'relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6',
									className,
								)}
							>
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
});
