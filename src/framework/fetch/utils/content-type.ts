import MIMEType from 'whatwg-mimetype';

/**
 * Parse a Content-Type header's value into a MIMEType instance if present
 *
 * @example
 * ```ts
 * const contentType = parseContentType(request.headers.get('Content-Type'));
 * ```
 */
export function parseContentType(
	contentTypeHeader: string | undefined | null,
): MIMEType | null {
	if (contentTypeHeader) {
		try {
			return MIMEType.parse(contentTypeHeader);
		} catch (error) {
			console.warn(
				`Unparseable MimeType in Content-Type header: ${contentTypeHeader}\nOriginal Error:`,
				error,
			);
			return null;
		}
	} else {
		return null;
	}
}
