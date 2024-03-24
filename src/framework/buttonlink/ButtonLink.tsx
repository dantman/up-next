import Link, { LinkProps } from 'next/link';
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	forwardRef,
	ReactNode,
	Ref,
} from 'react';

export type ButtonLinkProps = Omit<LinkProps, 'href'> &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		// Do not allow UrlObject like <Link> does
		href?: string;
		children?: ReactNode;
	} & ButtonHTMLAttributes<HTMLButtonElement> & {
		/**
		 * Use an <a> even if this looks like an internal link
		 */
		externalLink?: boolean;
	};

export type ButtonLinkElement = HTMLAnchorElement | HTMLButtonElement;

/**
 * A helper component that can be either a <Link> or a <button> depending on whether a href prop is passed
 */
export const ButtonLink = forwardRef(function ButtonLink(
	{
		externalLink = false,
		// <a>
		download,
		href,
		hrefLang,
		media,
		ping,
		rel,
		target,
		referrerPolicy,
		// <button>
		autoFocus,
		disabled,
		form,
		formAction,
		formEncType,
		formMethod,
		formNoValidate,
		formTarget,
		name,
		value,
		// Shared
		...sharedProps
	}: ButtonLinkProps,
	ref: Ref<ButtonLinkElement>,
) {
	const anchorProps = {
		download,
		href,
		hrefLang,
		media,
		ping,
		rel,
		target,
		referrerPolicy,
	};
	const buttonProps = {
		autoFocus,
		disabled,
		form,
		formAction,
		formEncType,
		formMethod,
		formNoValidate,
		formTarget,
		name,
		value,
	};

	return href && externalLink ? (
		<a
			ref={ref as Ref<HTMLAnchorElement>}
			{...anchorProps}
			{...sharedProps}
			href={href}
		/>
	) : href ? (
		<Link
			ref={ref as Ref<HTMLAnchorElement>}
			{...anchorProps}
			{...sharedProps}
			href={href}
		/>
	) : (
		<button
			ref={ref as Ref<HTMLButtonElement>}
			{...buttonProps}
			{...sharedProps}
		/>
	);
});
