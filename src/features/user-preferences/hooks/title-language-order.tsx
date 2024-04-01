import { createContext, useCallback, useContext } from 'react';
import { MediaTitle } from '../../../anilist-client';
import {
	TitleLanguageOrder,
	getPreferredMediaTitle,
} from '../helpers/title-language';

/**
 *
 */
export const TitleLanguageOrderContext = createContext<TitleLanguageOrder>(
	'romaji,english,native',
);

/**
 * Returns a function that will Lookup a title from a MediaTitle in the user's preferencial order
 *
 * @see getPreferredMediaTitle
 */
export function useGetTitleLanguage(): (
	titles: Partial<MediaTitle> | undefined | null,
) => string | null {
	const titleLanguageOrder = useContext(TitleLanguageOrderContext);
	return useCallback(
		(titles: Partial<MediaTitle> | undefined | null) =>
			getPreferredMediaTitle(titles, titleLanguageOrder),
		[titleLanguageOrder],
	);
}
