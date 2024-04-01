import { MediaTitle, UserTitleLanguage } from '../../../anilist-client';

/**
 * Order in which to look up title languages
 */
export type TitleLanguageOrder =
	| 'english,romaji,native'
	| 'romaji,english,native'
	| 'native,romaji,english';

const titleLanguageMap: Record<UserTitleLanguage, TitleLanguageOrder> = {
	ENGLISH: 'english,romaji,native',
	ENGLISH_STYLISED: 'english,romaji,native',
	ROMAJI: 'romaji,english,native',
	ROMAJI_STYLISED: 'romaji,english,native',
	NATIVE: 'native,romaji,english',
	NATIVE_STYLISED: 'native,romaji,english',
};

/**
 * For a user preference get the language order to look up titles in
 */
export function titleLanguageOrderForPreference(
	titleLanguage: UserTitleLanguage | undefined | null,
): TitleLanguageOrder {
	if (titleLanguage && titleLanguage in titleLanguageMap)
		return titleLanguageMap[titleLanguage];

	// Default to romaji first since that appears to be the AniList website default
	return 'romaji,english,native';
}

/**
 * Lookup a title from a MediaTitle using a title language order preference
 */
export function getPreferredMediaTitle(
	titles: Partial<MediaTitle> | undefined | null,
	titleLanguageOrder: TitleLanguageOrder,
): string | null {
	if (titles) {
		if (titleLanguageOrder === 'native,romaji,english')
			return titles.native || titles.romaji || titles.english || null;
		if (titleLanguageOrder === 'english,romaji,native')
			return titles.english || titles.romaji || titles.native || null;
		return titles.romaji || titles.english || titles.native || null;
	}
	return null;
}
