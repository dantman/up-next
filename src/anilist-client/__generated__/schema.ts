// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Int: number,
    Boolean: boolean,
    String: string,
    Json: any,
    CountryCode: any,
    Float: number,
    FuzzyDateInt: any,
    ID: string,
}

export interface Query {
    Page: (Page | null)
    /** Media query */
    Media: (Media | null)
    /** Media Trend query */
    MediaTrend: (MediaTrend | null)
    /** Airing schedule query */
    AiringSchedule: (AiringSchedule | null)
    /** Character query */
    Character: (Character | null)
    /** Staff query */
    Staff: (Staff | null)
    /** Media list query */
    MediaList: (MediaList | null)
    /** Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required. */
    MediaListCollection: (MediaListCollection | null)
    /** Collection of all the possible media genres */
    GenreCollection: ((Scalars['String'] | null)[] | null)
    /** Collection of all the possible media tags */
    MediaTagCollection: ((MediaTag | null)[] | null)
    /** User query */
    User: (User | null)
    /** Get the currently authenticated user */
    Viewer: (User | null)
    /** Notification query */
    Notification: (NotificationUnion | null)
    /** Studio query */
    Studio: (Studio | null)
    /** Review query */
    Review: (Review | null)
    /** Activity query */
    Activity: (ActivityUnion | null)
    /** Activity reply query */
    ActivityReply: (ActivityReply | null)
    /** Follow query */
    Following: (User | null)
    /** Follow query */
    Follower: (User | null)
    /** Thread query */
    Thread: (Thread | null)
    /** Comment query */
    ThreadComment: ((ThreadComment | null)[] | null)
    /** Recommendation query */
    Recommendation: (Recommendation | null)
    /** Like query */
    Like: (User | null)
    /** Provide AniList markdown to be converted to html (Requires auth) */
    Markdown: (ParsedMarkdown | null)
    AniChartUser: (AniChartUser | null)
    /** Site statistics query */
    SiteStatistics: (SiteStatistics | null)
    /** ExternalLinkSource collection query */
    ExternalLinkSourceCollection: ((MediaExternalLink | null)[] | null)
    __typename: 'Query'
}


/** Page of data */
export interface Page {
    /** The pagination information */
    pageInfo: (PageInfo | null)
    users: ((User | null)[] | null)
    media: ((Media | null)[] | null)
    characters: ((Character | null)[] | null)
    staff: ((Staff | null)[] | null)
    studios: ((Studio | null)[] | null)
    mediaList: ((MediaList | null)[] | null)
    airingSchedules: ((AiringSchedule | null)[] | null)
    mediaTrends: ((MediaTrend | null)[] | null)
    notifications: ((NotificationUnion | null)[] | null)
    followers: ((User | null)[] | null)
    following: ((User | null)[] | null)
    activities: ((ActivityUnion | null)[] | null)
    activityReplies: ((ActivityReply | null)[] | null)
    threads: ((Thread | null)[] | null)
    threadComments: ((ThreadComment | null)[] | null)
    reviews: ((Review | null)[] | null)
    recommendations: ((Recommendation | null)[] | null)
    likes: ((User | null)[] | null)
    __typename: 'Page'
}

export interface PageInfo {
    /** The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic */
    total: (Scalars['Int'] | null)
    /** The count on a page */
    perPage: (Scalars['Int'] | null)
    /** The current page */
    currentPage: (Scalars['Int'] | null)
    /** The last page */
    lastPage: (Scalars['Int'] | null)
    /** If there is another page */
    hasNextPage: (Scalars['Boolean'] | null)
    __typename: 'PageInfo'
}


/** User sort enums */
export type UserSort = 'ID' | 'ID_DESC' | 'USERNAME' | 'USERNAME_DESC' | 'WATCHED_TIME' | 'WATCHED_TIME_DESC' | 'CHAPTERS_READ' | 'CHAPTERS_READ_DESC' | 'SEARCH_MATCH'


/** A user */
export interface User {
    /** The id of the user */
    id: Scalars['Int']
    /** The name of the user */
    name: Scalars['String']
    /** The bio written by user (Markdown) */
    about: (Scalars['String'] | null)
    /** The user's avatar images */
    avatar: (UserAvatar | null)
    /** The user's banner images */
    bannerImage: (Scalars['String'] | null)
    /** If the authenticated user if following this user */
    isFollowing: (Scalars['Boolean'] | null)
    /** If this user if following the authenticated user */
    isFollower: (Scalars['Boolean'] | null)
    /** If the user is blocked by the authenticated user */
    isBlocked: (Scalars['Boolean'] | null)
    bans: (Scalars['Json'] | null)
    /** The user's general options */
    options: (UserOptions | null)
    /** The user's media list options */
    mediaListOptions: (MediaListOptions | null)
    /** The users favourites */
    favourites: (Favourites | null)
    /** The users anime & manga list statistics */
    statistics: (UserStatisticTypes | null)
    /** The number of unread notifications the user has */
    unreadNotificationCount: (Scalars['Int'] | null)
    /** The url for the user page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** The donation tier of the user */
    donatorTier: (Scalars['Int'] | null)
    /** Custom donation badge text */
    donatorBadge: (Scalars['String'] | null)
    /** The user's moderator roles if they are a site moderator */
    moderatorRoles: ((ModRole | null)[] | null)
    /** When the user's account was created. (Does not exist for accounts created before 2020) */
    createdAt: (Scalars['Int'] | null)
    /** When the user's data was last updated */
    updatedAt: (Scalars['Int'] | null)
    /**
     * @deprecated Deprecated. Replaced with statistics field.
     * The user's statistics
     */
    stats: (UserStats | null)
    /**
     * @deprecated Deprecated. Replaced with moderatorRoles field.
     * If the user is a moderator or data moderator
     */
    moderatorStatus: (Scalars['String'] | null)
    /** The user's previously used names. */
    previousNames: ((UserPreviousName | null)[] | null)
    __typename: 'User'
}


/** A user's avatars */
export interface UserAvatar {
    /** The avatar of user at its largest size */
    large: (Scalars['String'] | null)
    /** The avatar of user at medium size */
    medium: (Scalars['String'] | null)
    __typename: 'UserAvatar'
}


/** A user's general options */
export interface UserOptions {
    /** The language the user wants to see media titles in */
    titleLanguage: (UserTitleLanguage | null)
    /** Whether the user has enabled viewing of 18+ content */
    displayAdultContent: (Scalars['Boolean'] | null)
    /** Whether the user receives notifications when a show they are watching aires */
    airingNotifications: (Scalars['Boolean'] | null)
    /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
    profileColor: (Scalars['String'] | null)
    /** Notification options */
    notificationOptions: ((NotificationOption | null)[] | null)
    /** The user's timezone offset (Auth user only) */
    timezone: (Scalars['String'] | null)
    /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
    activityMergeTime: (Scalars['Int'] | null)
    /** The language the user wants to see staff and character names in */
    staffNameLanguage: (UserStaffNameLanguage | null)
    /** Whether the user only allow messages from users they follow */
    restrictMessagesToFollowing: (Scalars['Boolean'] | null)
    /** The list activity types the user has disabled from being created from list updates */
    disabledListActivity: ((ListActivityOption | null)[] | null)
    __typename: 'UserOptions'
}


/** The language the user wants to see media titles in */
export type UserTitleLanguage = 'ROMAJI' | 'ENGLISH' | 'NATIVE' | 'ROMAJI_STYLISED' | 'ENGLISH_STYLISED' | 'NATIVE_STYLISED'


/** Notification option */
export interface NotificationOption {
    /** The type of notification */
    type: (NotificationType | null)
    /** Whether this type of notification is enabled */
    enabled: (Scalars['Boolean'] | null)
    __typename: 'NotificationOption'
}


/** Notification type enum */
export type NotificationType = 'ACTIVITY_MESSAGE' | 'ACTIVITY_REPLY' | 'FOLLOWING' | 'ACTIVITY_MENTION' | 'THREAD_COMMENT_MENTION' | 'THREAD_SUBSCRIBED' | 'THREAD_COMMENT_REPLY' | 'AIRING' | 'ACTIVITY_LIKE' | 'ACTIVITY_REPLY_LIKE' | 'THREAD_LIKE' | 'THREAD_COMMENT_LIKE' | 'ACTIVITY_REPLY_SUBSCRIBED' | 'RELATED_MEDIA_ADDITION' | 'MEDIA_DATA_CHANGE' | 'MEDIA_MERGE' | 'MEDIA_DELETION'


/** The language the user wants to see staff and character names in */
export type UserStaffNameLanguage = 'ROMAJI_WESTERN' | 'ROMAJI' | 'NATIVE'

export interface ListActivityOption {
    disabled: (Scalars['Boolean'] | null)
    type: (MediaListStatus | null)
    __typename: 'ListActivityOption'
}


/** Media list watching/reading status enum. */
export type MediaListStatus = 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED' | 'REPEATING'


/** A user's list options */
export interface MediaListOptions {
    /** The score format the user is using for media lists */
    scoreFormat: (ScoreFormat | null)
    /** The default order list rows should be displayed in */
    rowOrder: (Scalars['String'] | null)
    /** @deprecated No longer used */
    useLegacyLists: (Scalars['Boolean'] | null)
    /** The user's anime list options */
    animeList: (MediaListTypeOptions | null)
    /** The user's manga list options */
    mangaList: (MediaListTypeOptions | null)
    /**
     * @deprecated No longer used
     * The list theme options for both lists
     */
    sharedTheme: (Scalars['Json'] | null)
    /**
     * @deprecated No longer used
     * If the shared theme should be used instead of the individual list themes
     */
    sharedThemeEnabled: (Scalars['Boolean'] | null)
    __typename: 'MediaListOptions'
}


/** Media list scoring type */
export type ScoreFormat = 'POINT_100' | 'POINT_10_DECIMAL' | 'POINT_10' | 'POINT_5' | 'POINT_3'


/** A user's list options for anime or manga lists */
export interface MediaListTypeOptions {
    /** The order each list should be displayed in */
    sectionOrder: ((Scalars['String'] | null)[] | null)
    /** If the completed sections of the list should be separated by format */
    splitCompletedSectionByFormat: (Scalars['Boolean'] | null)
    /**
     * @deprecated This field has not yet been fully implemented and may change without warning
     * The list theme options
     */
    theme: (Scalars['Json'] | null)
    /** The names of the user's custom lists */
    customLists: ((Scalars['String'] | null)[] | null)
    /** The names of the user's advanced scoring sections */
    advancedScoring: ((Scalars['String'] | null)[] | null)
    /** If advanced scoring is enabled */
    advancedScoringEnabled: (Scalars['Boolean'] | null)
    __typename: 'MediaListTypeOptions'
}


/** User's favourite anime, manga, characters, staff & studios */
export interface Favourites {
    /** Favourite anime */
    anime: (MediaConnection | null)
    /** Favourite manga */
    manga: (MediaConnection | null)
    /** Favourite characters */
    characters: (CharacterConnection | null)
    /** Favourite staff */
    staff: (StaffConnection | null)
    /** Favourite studios */
    studios: (StudioConnection | null)
    __typename: 'Favourites'
}

export interface MediaConnection {
    edges: ((MediaEdge | null)[] | null)
    nodes: ((Media | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'MediaConnection'
}


/** Media connection edge */
export interface MediaEdge {
    node: (Media | null)
    /** The id of the connection */
    id: (Scalars['Int'] | null)
    /** The type of relation to the parent model */
    relationType: (MediaRelation | null)
    /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
    isMainStudio: Scalars['Boolean']
    /** The characters in the media voiced by the parent actor */
    characters: ((Character | null)[] | null)
    /** The characters role in the media */
    characterRole: (CharacterRole | null)
    /** Media specific character name */
    characterName: (Scalars['String'] | null)
    /** Notes regarding the VA's role for the character */
    roleNotes: (Scalars['String'] | null)
    /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
    dubGroup: (Scalars['String'] | null)
    /** The role of the staff member in the production of the media */
    staffRole: (Scalars['String'] | null)
    /** The voice actors of the character */
    voiceActors: ((Staff | null)[] | null)
    /** The voice actors of the character with role date */
    voiceActorRoles: ((StaffRoleType | null)[] | null)
    /** The order the media should be displayed from the users favourites */
    favouriteOrder: (Scalars['Int'] | null)
    __typename: 'MediaEdge'
}


/** Anime or Manga */
export interface Media {
    /** The id of the media */
    id: Scalars['Int']
    /** The mal id of the media */
    idMal: (Scalars['Int'] | null)
    /** The official titles of the media in various languages */
    title: (MediaTitle | null)
    /** The type of the media; anime or manga */
    type: (MediaType | null)
    /** The format the media was released in */
    format: (MediaFormat | null)
    /** The current releasing status of the media */
    status: (MediaStatus | null)
    /** Short description of the media's story and characters */
    description: (Scalars['String'] | null)
    /** The first official release date of the media */
    startDate: (FuzzyDate | null)
    /** The last official release date of the media */
    endDate: (FuzzyDate | null)
    /** The season the media was initially released in */
    season: (MediaSeason | null)
    /** The season year the media was initially released in */
    seasonYear: (Scalars['Int'] | null)
    /** The year & season the media was initially released in */
    seasonInt: (Scalars['Int'] | null)
    /** The amount of episodes the anime has when complete */
    episodes: (Scalars['Int'] | null)
    /** The general length of each anime episode in minutes */
    duration: (Scalars['Int'] | null)
    /** The amount of chapters the manga has when complete */
    chapters: (Scalars['Int'] | null)
    /** The amount of volumes the manga has when complete */
    volumes: (Scalars['Int'] | null)
    /** Where the media was created. (ISO 3166-1 alpha-2) */
    countryOfOrigin: (Scalars['CountryCode'] | null)
    /** If the media is officially licensed or a self-published doujin release */
    isLicensed: (Scalars['Boolean'] | null)
    /** Source type the media was adapted from. */
    source: (MediaSource | null)
    /** Official Twitter hashtags for the media */
    hashtag: (Scalars['String'] | null)
    /** Media trailer or advertisement */
    trailer: (MediaTrailer | null)
    /** When the media's data was last updated */
    updatedAt: (Scalars['Int'] | null)
    /** The cover images of the media */
    coverImage: (MediaCoverImage | null)
    /** The banner image of the media */
    bannerImage: (Scalars['String'] | null)
    /** The genres of the media */
    genres: ((Scalars['String'] | null)[] | null)
    /** Alternative titles of the media */
    synonyms: ((Scalars['String'] | null)[] | null)
    /** A weighted average score of all the user's scores of the media */
    averageScore: (Scalars['Int'] | null)
    /** Mean score of all the user's scores of the media */
    meanScore: (Scalars['Int'] | null)
    /** The number of users with the media on their list */
    popularity: (Scalars['Int'] | null)
    /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
    isLocked: (Scalars['Boolean'] | null)
    /** The amount of related activity in the past hour */
    trending: (Scalars['Int'] | null)
    /** The amount of user's who have favourited the media */
    favourites: (Scalars['Int'] | null)
    /** List of tags that describes elements and themes of the media */
    tags: ((MediaTag | null)[] | null)
    /** Other media in the same or connecting franchise */
    relations: (MediaConnection | null)
    /** The characters in the media */
    characters: (CharacterConnection | null)
    /** The staff who produced the media */
    staff: (StaffConnection | null)
    /** The companies who produced the media */
    studios: (StudioConnection | null)
    /** If the media is marked as favourite by the current authenticated user */
    isFavourite: Scalars['Boolean']
    /** If the media is blocked from being added to favourites */
    isFavouriteBlocked: Scalars['Boolean']
    /** If the media is intended only for 18+ adult audiences */
    isAdult: (Scalars['Boolean'] | null)
    /** The media's next episode airing schedule */
    nextAiringEpisode: (AiringSchedule | null)
    /** The media's entire airing schedule */
    airingSchedule: (AiringScheduleConnection | null)
    /** The media's daily trend stats */
    trends: (MediaTrendConnection | null)
    /** External links to another site related to the media */
    externalLinks: ((MediaExternalLink | null)[] | null)
    /** Data and links to legal streaming episodes on external sites */
    streamingEpisodes: ((MediaStreamingEpisode | null)[] | null)
    /** The ranking of the media in a particular time span and format compared to other media */
    rankings: ((MediaRank | null)[] | null)
    /** The authenticated user's media list entry for the media */
    mediaListEntry: (MediaList | null)
    /** User reviews of the media */
    reviews: (ReviewConnection | null)
    /** User recommendations for similar media */
    recommendations: (RecommendationConnection | null)
    stats: (MediaStats | null)
    /** The url for the media page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** If the media should have forum thread automatically created for it on airing episode release */
    autoCreateForumThread: (Scalars['Boolean'] | null)
    /** If the media is blocked from being recommended to/from */
    isRecommendationBlocked: (Scalars['Boolean'] | null)
    /** If the media is blocked from being reviewed */
    isReviewBlocked: (Scalars['Boolean'] | null)
    /** Notes for site moderators */
    modNotes: (Scalars['String'] | null)
    __typename: 'Media'
}


/** The official titles of the media in various languages */
export interface MediaTitle {
    /** The romanization of the native language title */
    romaji: (Scalars['String'] | null)
    /** The official english title */
    english: (Scalars['String'] | null)
    /** Official title in it's native language */
    native: (Scalars['String'] | null)
    /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
    userPreferred: (Scalars['String'] | null)
    __typename: 'MediaTitle'
}


/** Media type enum, anime or manga. */
export type MediaType = 'ANIME' | 'MANGA'


/** The format the media was released in */
export type MediaFormat = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT'


/** The current releasing status of the media */
export type MediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS'


/** Date object that allows for incomplete date values (fuzzy) */
export interface FuzzyDate {
    /** Numeric Year (2017) */
    year: (Scalars['Int'] | null)
    /** Numeric Month (3) */
    month: (Scalars['Int'] | null)
    /** Numeric Day (24) */
    day: (Scalars['Int'] | null)
    __typename: 'FuzzyDate'
}

export type MediaSeason = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL'


/** Source type the media was adapted from */
export type MediaSource = 'ORIGINAL' | 'MANGA' | 'LIGHT_NOVEL' | 'VISUAL_NOVEL' | 'VIDEO_GAME' | 'OTHER' | 'NOVEL' | 'DOUJINSHI' | 'ANIME' | 'WEB_NOVEL' | 'LIVE_ACTION' | 'GAME' | 'COMIC' | 'MULTIMEDIA_PROJECT' | 'PICTURE_BOOK'


/** Media trailer or advertisement */
export interface MediaTrailer {
    /** The trailer video id */
    id: (Scalars['String'] | null)
    /** The site the video is hosted by (Currently either youtube or dailymotion) */
    site: (Scalars['String'] | null)
    /** The url for the thumbnail image of the video */
    thumbnail: (Scalars['String'] | null)
    __typename: 'MediaTrailer'
}

export interface MediaCoverImage {
    /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
    extraLarge: (Scalars['String'] | null)
    /** The cover image url of the media at a large size */
    large: (Scalars['String'] | null)
    /** The cover image url of the media at medium size */
    medium: (Scalars['String'] | null)
    /** Average #hex color of cover image */
    color: (Scalars['String'] | null)
    __typename: 'MediaCoverImage'
}


/** A tag that describes a theme or element of the media */
export interface MediaTag {
    /** The id of the tag */
    id: Scalars['Int']
    /** The name of the tag */
    name: Scalars['String']
    /** A general description of the tag */
    description: (Scalars['String'] | null)
    /** The categories of tags this tag belongs to */
    category: (Scalars['String'] | null)
    /** The relevance ranking of the tag out of the 100 for this media */
    rank: (Scalars['Int'] | null)
    /** If the tag could be a spoiler for any media */
    isGeneralSpoiler: (Scalars['Boolean'] | null)
    /** If the tag is a spoiler for this media */
    isMediaSpoiler: (Scalars['Boolean'] | null)
    /** If the tag is only for adult 18+ media */
    isAdult: (Scalars['Boolean'] | null)
    /** The user who submitted the tag */
    userId: (Scalars['Int'] | null)
    __typename: 'MediaTag'
}


/** Character sort enums */
export type CharacterSort = 'ID' | 'ID_DESC' | 'ROLE' | 'ROLE_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC' | 'RELEVANCE'


/** The role the character plays in the media */
export type CharacterRole = 'MAIN' | 'SUPPORTING' | 'BACKGROUND'

export interface CharacterConnection {
    edges: ((CharacterEdge | null)[] | null)
    nodes: ((Character | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'CharacterConnection'
}


/** Character connection edge */
export interface CharacterEdge {
    node: (Character | null)
    /** The id of the connection */
    id: (Scalars['Int'] | null)
    /** The characters role in the media */
    role: (CharacterRole | null)
    /** Media specific character name */
    name: (Scalars['String'] | null)
    /** The voice actors of the character */
    voiceActors: ((Staff | null)[] | null)
    /** The voice actors of the character with role date */
    voiceActorRoles: ((StaffRoleType | null)[] | null)
    /** The media the character is in */
    media: ((Media | null)[] | null)
    /** The order the character should be displayed from the users favourites */
    favouriteOrder: (Scalars['Int'] | null)
    __typename: 'CharacterEdge'
}


/** A character that features in an anime or manga */
export interface Character {
    /** The id of the character */
    id: Scalars['Int']
    /** The names of the character */
    name: (CharacterName | null)
    /** Character images */
    image: (CharacterImage | null)
    /** A general description of the character */
    description: (Scalars['String'] | null)
    /** The character's gender. Usually Male, Female, or Non-binary but can be any string. */
    gender: (Scalars['String'] | null)
    /** The character's birth date */
    dateOfBirth: (FuzzyDate | null)
    /** The character's age. Note this is a string, not an int, it may contain further text and additional ages. */
    age: (Scalars['String'] | null)
    /** The characters blood type */
    bloodType: (Scalars['String'] | null)
    /** If the character is marked as favourite by the currently authenticated user */
    isFavourite: Scalars['Boolean']
    /** If the character is blocked from being added to favourites */
    isFavouriteBlocked: Scalars['Boolean']
    /** The url for the character page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** Media that includes the character */
    media: (MediaConnection | null)
    /** @deprecated No data available */
    updatedAt: (Scalars['Int'] | null)
    /** The amount of user's who have favourited the character */
    favourites: (Scalars['Int'] | null)
    /** Notes for site moderators */
    modNotes: (Scalars['String'] | null)
    __typename: 'Character'
}


/** The names of the character */
export interface CharacterName {
    /** The character's given name */
    first: (Scalars['String'] | null)
    /** The character's middle name */
    middle: (Scalars['String'] | null)
    /** The character's surname */
    last: (Scalars['String'] | null)
    /** The character's first and last name */
    full: (Scalars['String'] | null)
    /** The character's full name in their native language */
    native: (Scalars['String'] | null)
    /** Other names the character might be referred to as */
    alternative: ((Scalars['String'] | null)[] | null)
    /** Other names the character might be referred to as but are spoilers */
    alternativeSpoiler: ((Scalars['String'] | null)[] | null)
    /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
    userPreferred: (Scalars['String'] | null)
    __typename: 'CharacterName'
}

export interface CharacterImage {
    /** The character's image of media at its largest size */
    large: (Scalars['String'] | null)
    /** The character's image of media at medium size */
    medium: (Scalars['String'] | null)
    __typename: 'CharacterImage'
}


/** Media sort enums */
export type MediaSort = 'ID' | 'ID_DESC' | 'TITLE_ROMAJI' | 'TITLE_ROMAJI_DESC' | 'TITLE_ENGLISH' | 'TITLE_ENGLISH_DESC' | 'TITLE_NATIVE' | 'TITLE_NATIVE_DESC' | 'TYPE' | 'TYPE_DESC' | 'FORMAT' | 'FORMAT_DESC' | 'START_DATE' | 'START_DATE_DESC' | 'END_DATE' | 'END_DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODES' | 'EPISODES_DESC' | 'DURATION' | 'DURATION_DESC' | 'STATUS' | 'STATUS_DESC' | 'CHAPTERS' | 'CHAPTERS_DESC' | 'VOLUMES' | 'VOLUMES_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC'


/** The primary language of the voice actor */
export type StaffLanguage = 'JAPANESE' | 'ENGLISH' | 'KOREAN' | 'ITALIAN' | 'SPANISH' | 'PORTUGUESE' | 'FRENCH' | 'GERMAN' | 'HEBREW' | 'HUNGARIAN'


/** Staff sort enums */
export type StaffSort = 'ID' | 'ID_DESC' | 'ROLE' | 'ROLE_DESC' | 'LANGUAGE' | 'LANGUAGE_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC' | 'RELEVANCE'


/** Voice actors or production staff */
export interface Staff {
    /** The id of the staff member */
    id: Scalars['Int']
    /** The names of the staff member */
    name: (StaffName | null)
    /**
     * @deprecated Replaced with languageV2
     * The primary language the staff member dub's in
     */
    language: (StaffLanguage | null)
    /** The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu */
    languageV2: (Scalars['String'] | null)
    /** The staff images */
    image: (StaffImage | null)
    /** A general description of the staff member */
    description: (Scalars['String'] | null)
    /** The person's primary occupations */
    primaryOccupations: ((Scalars['String'] | null)[] | null)
    /** The staff's gender. Usually Male, Female, or Non-binary but can be any string. */
    gender: (Scalars['String'] | null)
    dateOfBirth: (FuzzyDate | null)
    dateOfDeath: (FuzzyDate | null)
    /** The person's age in years */
    age: (Scalars['Int'] | null)
    /** [startYear, endYear] (If the 2nd value is not present staff is still active) */
    yearsActive: ((Scalars['Int'] | null)[] | null)
    /** The persons birthplace or hometown */
    homeTown: (Scalars['String'] | null)
    /** The persons blood type */
    bloodType: (Scalars['String'] | null)
    /** If the staff member is marked as favourite by the currently authenticated user */
    isFavourite: Scalars['Boolean']
    /** If the staff member is blocked from being added to favourites */
    isFavouriteBlocked: Scalars['Boolean']
    /** The url for the staff page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** Media where the staff member has a production role */
    staffMedia: (MediaConnection | null)
    /** Characters voiced by the actor */
    characters: (CharacterConnection | null)
    /** Media the actor voiced characters in. (Same data as characters with media as node instead of characters) */
    characterMedia: (MediaConnection | null)
    /** @deprecated No data available */
    updatedAt: (Scalars['Int'] | null)
    /** Staff member that the submission is referencing */
    staff: (Staff | null)
    /** Submitter for the submission */
    submitter: (User | null)
    /** Status of the submission */
    submissionStatus: (Scalars['Int'] | null)
    /** Inner details of submission status */
    submissionNotes: (Scalars['String'] | null)
    /** The amount of user's who have favourited the staff member */
    favourites: (Scalars['Int'] | null)
    /** Notes for site moderators */
    modNotes: (Scalars['String'] | null)
    __typename: 'Staff'
}


/** The names of the staff member */
export interface StaffName {
    /** The person's given name */
    first: (Scalars['String'] | null)
    /** The person's middle name */
    middle: (Scalars['String'] | null)
    /** The person's surname */
    last: (Scalars['String'] | null)
    /** The person's first and last name */
    full: (Scalars['String'] | null)
    /** The person's full name in their native language */
    native: (Scalars['String'] | null)
    /** Other names the staff member might be referred to as (pen names) */
    alternative: ((Scalars['String'] | null)[] | null)
    /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
    userPreferred: (Scalars['String'] | null)
    __typename: 'StaffName'
}

export interface StaffImage {
    /** The person's image of media at its largest size */
    large: (Scalars['String'] | null)
    /** The person's image of media at medium size */
    medium: (Scalars['String'] | null)
    __typename: 'StaffImage'
}


/** Voice actor role for a character */
export interface StaffRoleType {
    /** The voice actors of the character */
    voiceActor: (Staff | null)
    /** Notes regarding the VA's role for the character */
    roleNotes: (Scalars['String'] | null)
    /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
    dubGroup: (Scalars['String'] | null)
    __typename: 'StaffRoleType'
}

export interface StaffConnection {
    edges: ((StaffEdge | null)[] | null)
    nodes: ((Staff | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'StaffConnection'
}


/** Staff connection edge */
export interface StaffEdge {
    node: (Staff | null)
    /** The id of the connection */
    id: (Scalars['Int'] | null)
    /** The role of the staff member in the production of the media */
    role: (Scalars['String'] | null)
    /** The order the staff should be displayed from the users favourites */
    favouriteOrder: (Scalars['Int'] | null)
    __typename: 'StaffEdge'
}


/** Studio sort enums */
export type StudioSort = 'ID' | 'ID_DESC' | 'NAME' | 'NAME_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC'

export interface StudioConnection {
    edges: ((StudioEdge | null)[] | null)
    nodes: ((Studio | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'StudioConnection'
}


/** Studio connection edge */
export interface StudioEdge {
    node: (Studio | null)
    /** The id of the connection */
    id: (Scalars['Int'] | null)
    /** If the studio is the main animation studio of the anime */
    isMain: Scalars['Boolean']
    /** The order the character should be displayed from the users favourites */
    favouriteOrder: (Scalars['Int'] | null)
    __typename: 'StudioEdge'
}


/** Animation or production company */
export interface Studio {
    /** The id of the studio */
    id: Scalars['Int']
    /** The name of the studio */
    name: Scalars['String']
    /** If the studio is an animation studio or a different kind of company */
    isAnimationStudio: Scalars['Boolean']
    /** The media the studio has worked on */
    media: (MediaConnection | null)
    /** The url for the studio page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** If the studio is marked as favourite by the currently authenticated user */
    isFavourite: Scalars['Boolean']
    /** The amount of user's who have favourited the studio */
    favourites: (Scalars['Int'] | null)
    __typename: 'Studio'
}


/** Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate. */
export interface AiringSchedule {
    /** The id of the airing schedule item */
    id: Scalars['Int']
    /** The time the episode airs at */
    airingAt: Scalars['Int']
    /** Seconds until episode starts airing */
    timeUntilAiring: Scalars['Int']
    /** The airing episode number */
    episode: Scalars['Int']
    /** The associate media id of the airing episode */
    mediaId: Scalars['Int']
    /** The associate media of the airing episode */
    media: (Media | null)
    __typename: 'AiringSchedule'
}

export interface AiringScheduleConnection {
    edges: ((AiringScheduleEdge | null)[] | null)
    nodes: ((AiringSchedule | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'AiringScheduleConnection'
}


/** AiringSchedule connection edge */
export interface AiringScheduleEdge {
    node: (AiringSchedule | null)
    /** The id of the connection */
    id: (Scalars['Int'] | null)
    __typename: 'AiringScheduleEdge'
}


/** Media trend sort enums */
export type MediaTrendSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'DATE' | 'DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODE' | 'EPISODE_DESC'

export interface MediaTrendConnection {
    edges: ((MediaTrendEdge | null)[] | null)
    nodes: ((MediaTrend | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'MediaTrendConnection'
}


/** Media trend connection edge */
export interface MediaTrendEdge {
    node: (MediaTrend | null)
    __typename: 'MediaTrendEdge'
}


/** Daily media statistics */
export interface MediaTrend {
    /** The id of the tag */
    mediaId: Scalars['Int']
    /** The day the data was recorded (timestamp) */
    date: Scalars['Int']
    /** The amount of media activity on the day */
    trending: Scalars['Int']
    /** A weighted average score of all the user's scores of the media */
    averageScore: (Scalars['Int'] | null)
    /** The number of users with the media on their list */
    popularity: (Scalars['Int'] | null)
    /** The number of users with watching/reading the media */
    inProgress: (Scalars['Int'] | null)
    /** If the media was being released at this time */
    releasing: Scalars['Boolean']
    /** The episode number of the anime released on this day */
    episode: (Scalars['Int'] | null)
    /** The related media */
    media: (Media | null)
    __typename: 'MediaTrend'
}


/** An external link to another site related to the media or staff member */
export interface MediaExternalLink {
    /** The id of the external link */
    id: Scalars['Int']
    /** The url of the external link or base url of link source */
    url: (Scalars['String'] | null)
    /** The links website site name */
    site: Scalars['String']
    /** The links website site id */
    siteId: (Scalars['Int'] | null)
    type: (ExternalLinkType | null)
    /** Language the site content is in. See Staff language field for values. */
    language: (Scalars['String'] | null)
    color: (Scalars['String'] | null)
    /** The icon image url of the site. Not available for all links. Transparent PNG 64x64 */
    icon: (Scalars['String'] | null)
    notes: (Scalars['String'] | null)
    isDisabled: (Scalars['Boolean'] | null)
    __typename: 'MediaExternalLink'
}

export type ExternalLinkType = 'INFO' | 'STREAMING' | 'SOCIAL'


/** Data and links to legal streaming episodes on external sites */
export interface MediaStreamingEpisode {
    /** Title of the episode */
    title: (Scalars['String'] | null)
    /** Url of episode image thumbnail */
    thumbnail: (Scalars['String'] | null)
    /** The url of the episode */
    url: (Scalars['String'] | null)
    /** The site location of the streaming episodes */
    site: (Scalars['String'] | null)
    __typename: 'MediaStreamingEpisode'
}


/** The ranking of a media in a particular time span and format compared to other media */
export interface MediaRank {
    /** The id of the rank */
    id: Scalars['Int']
    /** The numerical rank of the media */
    rank: Scalars['Int']
    /** The type of ranking */
    type: MediaRankType
    /** The format the media is ranked within */
    format: MediaFormat
    /** The year the media is ranked within */
    year: (Scalars['Int'] | null)
    /** The season the media is ranked within */
    season: (MediaSeason | null)
    /** If the ranking is based on all time instead of a season/year */
    allTime: (Scalars['Boolean'] | null)
    /** String that gives context to the ranking type and time span */
    context: Scalars['String']
    __typename: 'MediaRank'
}


/** The type of ranking */
export type MediaRankType = 'RATED' | 'POPULAR'


/** List of anime or manga */
export interface MediaList {
    /** The id of the list entry */
    id: Scalars['Int']
    /** The id of the user owner of the list entry */
    userId: Scalars['Int']
    /** The id of the media */
    mediaId: Scalars['Int']
    /** The watching/reading status */
    status: (MediaListStatus | null)
    /** The score of the entry */
    score: (Scalars['Float'] | null)
    /** The amount of episodes/chapters consumed by the user */
    progress: (Scalars['Int'] | null)
    /** The amount of volumes read by the user */
    progressVolumes: (Scalars['Int'] | null)
    /** The amount of times the user has rewatched/read the media */
    repeat: (Scalars['Int'] | null)
    /** Priority of planning */
    priority: (Scalars['Int'] | null)
    /** If the entry should only be visible to authenticated user */
    private: (Scalars['Boolean'] | null)
    /** Text notes */
    notes: (Scalars['String'] | null)
    /** If the entry shown be hidden from non-custom lists */
    hiddenFromStatusLists: (Scalars['Boolean'] | null)
    /** Map of booleans for which custom lists the entry are in */
    customLists: (Scalars['Json'] | null)
    /** Map of advanced scores with name keys */
    advancedScores: (Scalars['Json'] | null)
    /** When the entry was started by the user */
    startedAt: (FuzzyDate | null)
    /** When the entry was completed by the user */
    completedAt: (FuzzyDate | null)
    /** When the entry data was last updated */
    updatedAt: (Scalars['Int'] | null)
    /** When the entry data was created */
    createdAt: (Scalars['Int'] | null)
    media: (Media | null)
    user: (User | null)
    __typename: 'MediaList'
}


/** Review sort enums */
export type ReviewSort = 'ID' | 'ID_DESC' | 'SCORE' | 'SCORE_DESC' | 'RATING' | 'RATING_DESC' | 'CREATED_AT' | 'CREATED_AT_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC'

export interface ReviewConnection {
    edges: ((ReviewEdge | null)[] | null)
    nodes: ((Review | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'ReviewConnection'
}


/** Review connection edge */
export interface ReviewEdge {
    node: (Review | null)
    __typename: 'ReviewEdge'
}


/** A Review that features in an anime or manga */
export interface Review {
    /** The id of the review */
    id: Scalars['Int']
    /** The id of the review's creator */
    userId: Scalars['Int']
    /** The id of the review's media */
    mediaId: Scalars['Int']
    /** For which type of media the review is for */
    mediaType: (MediaType | null)
    /** A short summary of the review */
    summary: (Scalars['String'] | null)
    /** The main review body text */
    body: (Scalars['String'] | null)
    /** The total user rating of the review */
    rating: (Scalars['Int'] | null)
    /** The amount of user ratings of the review */
    ratingAmount: (Scalars['Int'] | null)
    /** The rating of the review by currently authenticated user */
    userRating: (ReviewRating | null)
    /** The review score of the media */
    score: (Scalars['Int'] | null)
    /** If the review is not yet publicly published and is only viewable by creator */
    private: (Scalars['Boolean'] | null)
    /** The url for the review page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** The time of the thread creation */
    createdAt: Scalars['Int']
    /** The time of the thread last update */
    updatedAt: Scalars['Int']
    /** The creator of the review */
    user: (User | null)
    /** The media the review is of */
    media: (Media | null)
    __typename: 'Review'
}


/** Review rating enums */
export type ReviewRating = 'NO_VOTE' | 'UP_VOTE' | 'DOWN_VOTE'


/** Recommendation sort enums */
export type RecommendationSort = 'ID' | 'ID_DESC' | 'RATING' | 'RATING_DESC'

export interface RecommendationConnection {
    edges: ((RecommendationEdge | null)[] | null)
    nodes: ((Recommendation | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'RecommendationConnection'
}


/** Recommendation connection edge */
export interface RecommendationEdge {
    node: (Recommendation | null)
    __typename: 'RecommendationEdge'
}


/** Media recommendation */
export interface Recommendation {
    /** The id of the recommendation */
    id: Scalars['Int']
    /** Users rating of the recommendation */
    rating: (Scalars['Int'] | null)
    /** The rating of the recommendation by currently authenticated user */
    userRating: (RecommendationRating | null)
    /** The media the recommendation is from */
    media: (Media | null)
    /** The recommended media */
    mediaRecommendation: (Media | null)
    /** The user that first created the recommendation */
    user: (User | null)
    __typename: 'Recommendation'
}


/** Recommendation rating enums */
export type RecommendationRating = 'NO_RATING' | 'RATE_UP' | 'RATE_DOWN'


/** A media's statistics */
export interface MediaStats {
    scoreDistribution: ((ScoreDistribution | null)[] | null)
    statusDistribution: ((StatusDistribution | null)[] | null)
    /** @deprecated Replaced by MediaTrends */
    airingProgression: ((AiringProgression | null)[] | null)
    __typename: 'MediaStats'
}


/** A user's list score distribution. */
export interface ScoreDistribution {
    score: (Scalars['Int'] | null)
    /** The amount of list entries with this score */
    amount: (Scalars['Int'] | null)
    __typename: 'ScoreDistribution'
}


/** The distribution of the watching/reading status of media or a user's list */
export interface StatusDistribution {
    /** The day the activity took place (Unix timestamp) */
    status: (MediaListStatus | null)
    /** The amount of entries with this status */
    amount: (Scalars['Int'] | null)
    __typename: 'StatusDistribution'
}


/** Score & Watcher stats for airing anime by episode and mid-week */
export interface AiringProgression {
    /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
    episode: (Scalars['Float'] | null)
    /** The average score for the media */
    score: (Scalars['Float'] | null)
    /** The amount of users watching the anime */
    watching: (Scalars['Int'] | null)
    __typename: 'AiringProgression'
}


/** Type of relation media has to its parent. */
export type MediaRelation = 'ADAPTATION' | 'PREQUEL' | 'SEQUEL' | 'PARENT' | 'SIDE_STORY' | 'CHARACTER' | 'SUMMARY' | 'ALTERNATIVE' | 'SPIN_OFF' | 'OTHER' | 'SOURCE' | 'COMPILATION' | 'CONTAINS'

export interface UserStatisticTypes {
    anime: (UserStatistics | null)
    manga: (UserStatistics | null)
    __typename: 'UserStatisticTypes'
}

export interface UserStatistics {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    standardDeviation: Scalars['Float']
    minutesWatched: Scalars['Int']
    episodesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    volumesRead: Scalars['Int']
    formats: ((UserFormatStatistic | null)[] | null)
    statuses: ((UserStatusStatistic | null)[] | null)
    scores: ((UserScoreStatistic | null)[] | null)
    lengths: ((UserLengthStatistic | null)[] | null)
    releaseYears: ((UserReleaseYearStatistic | null)[] | null)
    startYears: ((UserStartYearStatistic | null)[] | null)
    genres: ((UserGenreStatistic | null)[] | null)
    tags: ((UserTagStatistic | null)[] | null)
    countries: ((UserCountryStatistic | null)[] | null)
    voiceActors: ((UserVoiceActorStatistic | null)[] | null)
    staff: ((UserStaffStatistic | null)[] | null)
    studios: ((UserStudioStatistic | null)[] | null)
    __typename: 'UserStatistics'
}


/** User statistics sort enum */
export type UserStatisticsSort = 'ID' | 'ID_DESC' | 'COUNT' | 'COUNT_DESC' | 'PROGRESS' | 'PROGRESS_DESC' | 'MEAN_SCORE' | 'MEAN_SCORE_DESC'

export interface UserFormatStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    format: (MediaFormat | null)
    __typename: 'UserFormatStatistic'
}

export interface UserStatusStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    status: (MediaListStatus | null)
    __typename: 'UserStatusStatistic'
}

export interface UserScoreStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    score: (Scalars['Int'] | null)
    __typename: 'UserScoreStatistic'
}

export interface UserLengthStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    length: (Scalars['String'] | null)
    __typename: 'UserLengthStatistic'
}

export interface UserReleaseYearStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    releaseYear: (Scalars['Int'] | null)
    __typename: 'UserReleaseYearStatistic'
}

export interface UserStartYearStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    startYear: (Scalars['Int'] | null)
    __typename: 'UserStartYearStatistic'
}

export interface UserGenreStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    genre: (Scalars['String'] | null)
    __typename: 'UserGenreStatistic'
}

export interface UserTagStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    tag: (MediaTag | null)
    __typename: 'UserTagStatistic'
}

export interface UserCountryStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    country: (Scalars['CountryCode'] | null)
    __typename: 'UserCountryStatistic'
}

export interface UserVoiceActorStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    voiceActor: (Staff | null)
    characterIds: (Scalars['Int'] | null)[]
    __typename: 'UserVoiceActorStatistic'
}

export interface UserStaffStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    staff: (Staff | null)
    __typename: 'UserStaffStatistic'
}

export interface UserStudioStatistic {
    count: Scalars['Int']
    meanScore: Scalars['Float']
    minutesWatched: Scalars['Int']
    chaptersRead: Scalars['Int']
    mediaIds: (Scalars['Int'] | null)[]
    studio: (Studio | null)
    __typename: 'UserStudioStatistic'
}


/** Mod role enums */
export type ModRole = 'ADMIN' | 'LEAD_DEVELOPER' | 'DEVELOPER' | 'LEAD_COMMUNITY' | 'COMMUNITY' | 'DISCORD_COMMUNITY' | 'LEAD_ANIME_DATA' | 'ANIME_DATA' | 'LEAD_MANGA_DATA' | 'MANGA_DATA' | 'LEAD_SOCIAL_MEDIA' | 'SOCIAL_MEDIA' | 'RETIRED' | 'CHARACTER_DATA' | 'STAFF_DATA'


/** A user's statistics */
export interface UserStats {
    /** The amount of anime the user has watched in minutes */
    watchedTime: (Scalars['Int'] | null)
    /** The amount of manga chapters the user has read */
    chaptersRead: (Scalars['Int'] | null)
    activityHistory: ((UserActivityHistory | null)[] | null)
    animeStatusDistribution: ((StatusDistribution | null)[] | null)
    mangaStatusDistribution: ((StatusDistribution | null)[] | null)
    animeScoreDistribution: ((ScoreDistribution | null)[] | null)
    mangaScoreDistribution: ((ScoreDistribution | null)[] | null)
    animeListScores: (ListScoreStats | null)
    mangaListScores: (ListScoreStats | null)
    favouredGenresOverview: ((GenreStats | null)[] | null)
    favouredGenres: ((GenreStats | null)[] | null)
    favouredTags: ((TagStats | null)[] | null)
    favouredActors: ((StaffStats | null)[] | null)
    favouredStaff: ((StaffStats | null)[] | null)
    favouredStudios: ((StudioStats | null)[] | null)
    favouredYears: ((YearStats | null)[] | null)
    favouredFormats: ((FormatStats | null)[] | null)
    __typename: 'UserStats'
}


/** A user's activity history stats. */
export interface UserActivityHistory {
    /** The day the activity took place (Unix timestamp) */
    date: (Scalars['Int'] | null)
    /** The amount of activity on the day */
    amount: (Scalars['Int'] | null)
    /** The level of activity represented on a 1-10 scale */
    level: (Scalars['Int'] | null)
    __typename: 'UserActivityHistory'
}


/** User's list score statistics */
export interface ListScoreStats {
    meanScore: (Scalars['Int'] | null)
    standardDeviation: (Scalars['Int'] | null)
    __typename: 'ListScoreStats'
}


/** User's genre statistics */
export interface GenreStats {
    genre: (Scalars['String'] | null)
    amount: (Scalars['Int'] | null)
    meanScore: (Scalars['Int'] | null)
    /** The amount of time in minutes the genre has been watched by the user */
    timeWatched: (Scalars['Int'] | null)
    __typename: 'GenreStats'
}


/** User's tag statistics */
export interface TagStats {
    tag: (MediaTag | null)
    amount: (Scalars['Int'] | null)
    meanScore: (Scalars['Int'] | null)
    /** The amount of time in minutes the tag has been watched by the user */
    timeWatched: (Scalars['Int'] | null)
    __typename: 'TagStats'
}


/** User's staff statistics */
export interface StaffStats {
    staff: (Staff | null)
    amount: (Scalars['Int'] | null)
    meanScore: (Scalars['Int'] | null)
    /** The amount of time in minutes the staff member has been watched by the user */
    timeWatched: (Scalars['Int'] | null)
    __typename: 'StaffStats'
}


/** User's studio statistics */
export interface StudioStats {
    studio: (Studio | null)
    amount: (Scalars['Int'] | null)
    meanScore: (Scalars['Int'] | null)
    /** The amount of time in minutes the studio's works have been watched by the user */
    timeWatched: (Scalars['Int'] | null)
    __typename: 'StudioStats'
}


/** User's year statistics */
export interface YearStats {
    year: (Scalars['Int'] | null)
    amount: (Scalars['Int'] | null)
    meanScore: (Scalars['Int'] | null)
    __typename: 'YearStats'
}


/** User's format statistics */
export interface FormatStats {
    format: (MediaFormat | null)
    amount: (Scalars['Int'] | null)
    __typename: 'FormatStats'
}


/** A user's previous name */
export interface UserPreviousName {
    /** A previous name of the user. */
    name: (Scalars['String'] | null)
    /** When the user first changed from this name. */
    createdAt: (Scalars['Int'] | null)
    /** When the user most recently changed from this name. */
    updatedAt: (Scalars['Int'] | null)
    __typename: 'UserPreviousName'
}


/** Media list sort enums */
export type MediaListSort = 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'SCORE' | 'SCORE_DESC' | 'STATUS' | 'STATUS_DESC' | 'PROGRESS' | 'PROGRESS_DESC' | 'PROGRESS_VOLUMES' | 'PROGRESS_VOLUMES_DESC' | 'REPEAT' | 'REPEAT_DESC' | 'PRIORITY' | 'PRIORITY_DESC' | 'STARTED_ON' | 'STARTED_ON_DESC' | 'FINISHED_ON' | 'FINISHED_ON_DESC' | 'ADDED_TIME' | 'ADDED_TIME_DESC' | 'UPDATED_TIME' | 'UPDATED_TIME_DESC' | 'MEDIA_TITLE_ROMAJI' | 'MEDIA_TITLE_ROMAJI_DESC' | 'MEDIA_TITLE_ENGLISH' | 'MEDIA_TITLE_ENGLISH_DESC' | 'MEDIA_TITLE_NATIVE' | 'MEDIA_TITLE_NATIVE_DESC' | 'MEDIA_POPULARITY' | 'MEDIA_POPULARITY_DESC'


/** Airing schedule sort enums */
export type AiringSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'TIME' | 'TIME_DESC' | 'EPISODE' | 'EPISODE_DESC'


/** Notification union type */
export type NotificationUnion = (AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification) & { __isUnion?: true }


/** Notification for when an episode of anime airs */
export interface AiringNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the aired anime */
    animeId: Scalars['Int']
    /** The episode number that just aired */
    episode: Scalars['Int']
    /** The notification context text */
    contexts: ((Scalars['String'] | null)[] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The associated media of the airing schedule */
    media: (Media | null)
    __typename: 'AiringNotification'
}


/** Notification for when the authenticated user is followed by another user */
export interface FollowingNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who followed the authenticated user */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The liked activity */
    user: (User | null)
    __typename: 'FollowingNotification'
}


/** Notification for when a user is send an activity message */
export interface ActivityMessageNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The if of the user who send the message */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the activity message */
    activityId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The message activity */
    message: (MessageActivity | null)
    /** The user who sent the message */
    user: (User | null)
    __typename: 'ActivityMessageNotification'
}


/** User message activity */
export interface MessageActivity {
    /** The id of the activity */
    id: Scalars['Int']
    /** The user id of the activity's recipient */
    recipientId: (Scalars['Int'] | null)
    /** The user id of the activity's sender */
    messengerId: (Scalars['Int'] | null)
    /** The type of the activity */
    type: (ActivityType | null)
    /** The number of activity replies */
    replyCount: Scalars['Int']
    /** The message text (Markdown) */
    message: (Scalars['String'] | null)
    /** If the activity is locked and can receive replies */
    isLocked: (Scalars['Boolean'] | null)
    /** If the currently authenticated user is subscribed to the activity */
    isSubscribed: (Scalars['Boolean'] | null)
    /** The amount of likes the activity has */
    likeCount: Scalars['Int']
    /** If the currently authenticated user liked the activity */
    isLiked: (Scalars['Boolean'] | null)
    /** If the message is private and only viewable to the sender and recipients */
    isPrivate: (Scalars['Boolean'] | null)
    /** The url for the activity page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** The time the activity was created at */
    createdAt: Scalars['Int']
    /** The user who the activity message was sent to */
    recipient: (User | null)
    /** The user who sent the activity message */
    messenger: (User | null)
    /** The written replies to the activity */
    replies: ((ActivityReply | null)[] | null)
    /** The users who liked the activity */
    likes: ((User | null)[] | null)
    __typename: 'MessageActivity'
}


/** Activity type enum. */
export type ActivityType = 'TEXT' | 'ANIME_LIST' | 'MANGA_LIST' | 'MESSAGE' | 'MEDIA_LIST'


/** Replay to an activity item */
export interface ActivityReply {
    /** The id of the reply */
    id: Scalars['Int']
    /** The id of the replies creator */
    userId: (Scalars['Int'] | null)
    /** The id of the parent activity */
    activityId: (Scalars['Int'] | null)
    /** The reply text */
    text: (Scalars['String'] | null)
    /** The amount of likes the reply has */
    likeCount: Scalars['Int']
    /** If the currently authenticated user liked the reply */
    isLiked: (Scalars['Boolean'] | null)
    /** The time the reply was created at */
    createdAt: Scalars['Int']
    /** The user who created reply */
    user: (User | null)
    /** The users who liked the reply */
    likes: ((User | null)[] | null)
    __typename: 'ActivityReply'
}


/** Notification for when authenticated user is @ mentioned in activity or reply */
export interface ActivityMentionNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who mentioned the authenticated user */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the activity where mentioned */
    activityId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The liked activity */
    activity: (ActivityUnion | null)
    /** The user who mentioned the authenticated user */
    user: (User | null)
    __typename: 'ActivityMentionNotification'
}


/** Activity union type */
export type ActivityUnion = (TextActivity | ListActivity | MessageActivity) & { __isUnion?: true }


/** User text activity */
export interface TextActivity {
    /** The id of the activity */
    id: Scalars['Int']
    /** The user id of the activity's creator */
    userId: (Scalars['Int'] | null)
    /** The type of activity */
    type: (ActivityType | null)
    /** The number of activity replies */
    replyCount: Scalars['Int']
    /** The status text (Markdown) */
    text: (Scalars['String'] | null)
    /** The url for the activity page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** If the activity is locked and can receive replies */
    isLocked: (Scalars['Boolean'] | null)
    /** If the currently authenticated user is subscribed to the activity */
    isSubscribed: (Scalars['Boolean'] | null)
    /** The amount of likes the activity has */
    likeCount: Scalars['Int']
    /** If the currently authenticated user liked the activity */
    isLiked: (Scalars['Boolean'] | null)
    /** If the activity is pinned to the top of the users activity feed */
    isPinned: (Scalars['Boolean'] | null)
    /** The time the activity was created at */
    createdAt: Scalars['Int']
    /** The user who created the activity */
    user: (User | null)
    /** The written replies to the activity */
    replies: ((ActivityReply | null)[] | null)
    /** The users who liked the activity */
    likes: ((User | null)[] | null)
    __typename: 'TextActivity'
}


/** User list activity (anime & manga updates) */
export interface ListActivity {
    /** The id of the activity */
    id: Scalars['Int']
    /** The user id of the activity's creator */
    userId: (Scalars['Int'] | null)
    /** The type of activity */
    type: (ActivityType | null)
    /** The number of activity replies */
    replyCount: Scalars['Int']
    /** The list item's textual status */
    status: (Scalars['String'] | null)
    /** The list progress made */
    progress: (Scalars['String'] | null)
    /** If the activity is locked and can receive replies */
    isLocked: (Scalars['Boolean'] | null)
    /** If the currently authenticated user is subscribed to the activity */
    isSubscribed: (Scalars['Boolean'] | null)
    /** The amount of likes the activity has */
    likeCount: Scalars['Int']
    /** If the currently authenticated user liked the activity */
    isLiked: (Scalars['Boolean'] | null)
    /** If the activity is pinned to the top of the users activity feed */
    isPinned: (Scalars['Boolean'] | null)
    /** The url for the activity page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** The time the activity was created at */
    createdAt: Scalars['Int']
    /** The owner of the activity */
    user: (User | null)
    /** The associated media to the activity update */
    media: (Media | null)
    /** The written replies to the activity */
    replies: ((ActivityReply | null)[] | null)
    /** The users who liked the activity */
    likes: ((User | null)[] | null)
    __typename: 'ListActivity'
}


/** Notification for when a user replies to the authenticated users activity */
export interface ActivityReplyNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who replied to the activity */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the activity which was replied too */
    activityId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The liked activity */
    activity: (ActivityUnion | null)
    /** The user who replied to the activity */
    user: (User | null)
    __typename: 'ActivityReplyNotification'
}


/** Notification for when a user replies to activity the authenticated user has replied to */
export interface ActivityReplySubscribedNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who replied to the activity */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the activity which was replied too */
    activityId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The liked activity */
    activity: (ActivityUnion | null)
    /** The user who replied to the activity */
    user: (User | null)
    __typename: 'ActivityReplySubscribedNotification'
}


/** Notification for when a activity is liked */
export interface ActivityLikeNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who liked to the activity */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the activity which was liked */
    activityId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The liked activity */
    activity: (ActivityUnion | null)
    /** The user who liked the activity */
    user: (User | null)
    __typename: 'ActivityLikeNotification'
}


/** Notification for when a activity reply is liked */
export interface ActivityReplyLikeNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who liked to the activity reply */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the activity where the reply which was liked */
    activityId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The liked activity */
    activity: (ActivityUnion | null)
    /** The user who liked the activity reply */
    user: (User | null)
    __typename: 'ActivityReplyLikeNotification'
}


/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export interface ThreadCommentMentionNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who mentioned the authenticated user */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the comment where mentioned */
    commentId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The thread that the relevant comment belongs to */
    thread: (Thread | null)
    /** The thread comment that included the @ mention */
    comment: (ThreadComment | null)
    /** The user who mentioned the authenticated user */
    user: (User | null)
    __typename: 'ThreadCommentMentionNotification'
}


/** Forum Thread */
export interface Thread {
    /** The id of the thread */
    id: Scalars['Int']
    /** The title of the thread */
    title: (Scalars['String'] | null)
    /** The text body of the thread (Markdown) */
    body: (Scalars['String'] | null)
    /** The id of the thread owner user */
    userId: Scalars['Int']
    /** The id of the user who most recently commented on the thread */
    replyUserId: (Scalars['Int'] | null)
    /** The id of the most recent comment on the thread */
    replyCommentId: (Scalars['Int'] | null)
    /** The number of comments on the thread */
    replyCount: (Scalars['Int'] | null)
    /** The number of times users have viewed the thread */
    viewCount: (Scalars['Int'] | null)
    /** If the thread is locked and can receive comments */
    isLocked: (Scalars['Boolean'] | null)
    /** If the thread is stickied and should be displayed at the top of the page */
    isSticky: (Scalars['Boolean'] | null)
    /** If the currently authenticated user is subscribed to the thread */
    isSubscribed: (Scalars['Boolean'] | null)
    /** The amount of likes the thread has */
    likeCount: Scalars['Int']
    /** If the currently authenticated user liked the thread */
    isLiked: (Scalars['Boolean'] | null)
    /** The time of the last reply */
    repliedAt: (Scalars['Int'] | null)
    /** The time of the thread creation */
    createdAt: Scalars['Int']
    /** The time of the thread last update */
    updatedAt: Scalars['Int']
    /** The owner of the thread */
    user: (User | null)
    /** The user to last reply to the thread */
    replyUser: (User | null)
    /** The users who liked the thread */
    likes: ((User | null)[] | null)
    /** The url for the thread page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** The categories of the thread */
    categories: ((ThreadCategory | null)[] | null)
    /** The media categories of the thread */
    mediaCategories: ((Media | null)[] | null)
    __typename: 'Thread'
}


/** A forum thread category */
export interface ThreadCategory {
    /** The id of the category */
    id: Scalars['Int']
    /** The name of the category */
    name: Scalars['String']
    __typename: 'ThreadCategory'
}


/** Forum Thread Comment */
export interface ThreadComment {
    /** The id of the comment */
    id: Scalars['Int']
    /** The user id of the comment's owner */
    userId: (Scalars['Int'] | null)
    /** The id of thread the comment belongs to */
    threadId: (Scalars['Int'] | null)
    /** The text content of the comment (Markdown) */
    comment: (Scalars['String'] | null)
    /** The amount of likes the comment has */
    likeCount: Scalars['Int']
    /** If the currently authenticated user liked the comment */
    isLiked: (Scalars['Boolean'] | null)
    /** The url for the comment page on the AniList website */
    siteUrl: (Scalars['String'] | null)
    /** The time of the comments creation */
    createdAt: Scalars['Int']
    /** The time of the comments last update */
    updatedAt: Scalars['Int']
    /** The thread the comment belongs to */
    thread: (Thread | null)
    /** The user who created the comment */
    user: (User | null)
    /** The users who liked the comment */
    likes: ((User | null)[] | null)
    /** The comment's child reply comments */
    childComments: (Scalars['Json'] | null)
    /** If the comment tree is locked and may not receive replies or edits */
    isLocked: (Scalars['Boolean'] | null)
    __typename: 'ThreadComment'
}


/** Notification for when a user replies to your forum thread comment */
export interface ThreadCommentReplyNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who create the comment reply */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the reply comment */
    commentId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The thread that the relevant comment belongs to */
    thread: (Thread | null)
    /** The reply thread comment */
    comment: (ThreadComment | null)
    /** The user who replied to the activity */
    user: (User | null)
    __typename: 'ThreadCommentReplyNotification'
}


/** Notification for when a user replies to a subscribed forum thread */
export interface ThreadCommentSubscribedNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who commented on the thread */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the new comment in the subscribed thread */
    commentId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The thread that the relevant comment belongs to */
    thread: (Thread | null)
    /** The reply thread comment */
    comment: (ThreadComment | null)
    /** The user who replied to the subscribed thread */
    user: (User | null)
    __typename: 'ThreadCommentSubscribedNotification'
}


/** Notification for when a thread comment is liked */
export interface ThreadCommentLikeNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who liked to the activity */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the activity which was liked */
    commentId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The thread that the relevant comment belongs to */
    thread: (Thread | null)
    /** The thread comment that was liked */
    comment: (ThreadComment | null)
    /** The user who liked the activity */
    user: (User | null)
    __typename: 'ThreadCommentLikeNotification'
}


/** Notification for when a thread is liked */
export interface ThreadLikeNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The id of the user who liked to the activity */
    userId: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the thread which was liked */
    threadId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The thread that the relevant comment belongs to */
    thread: (Thread | null)
    /** The liked thread comment */
    comment: (ThreadComment | null)
    /** The user who liked the activity */
    user: (User | null)
    __typename: 'ThreadLikeNotification'
}


/** Notification for when new media is added to the site */
export interface RelatedMediaAdditionNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the new media */
    mediaId: Scalars['Int']
    /** The notification context text */
    context: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The associated media of the airing schedule */
    media: (Media | null)
    __typename: 'RelatedMediaAdditionNotification'
}


/** Notification for when a media entry's data was changed in a significant way impacting users' list tracking */
export interface MediaDataChangeNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the media that received data changes */
    mediaId: Scalars['Int']
    /** The reason for the media data change */
    context: (Scalars['String'] | null)
    /** The reason for the media data change */
    reason: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The media that received data changes */
    media: (Media | null)
    __typename: 'MediaDataChangeNotification'
}


/** Notification for when a media entry is merged into another for a user who had it on their list */
export interface MediaMergeNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The id of the media that was merged into */
    mediaId: Scalars['Int']
    /** The title of the deleted media */
    deletedMediaTitles: ((Scalars['String'] | null)[] | null)
    /** The reason for the media data change */
    context: (Scalars['String'] | null)
    /** The reason for the media merge */
    reason: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    /** The media that was merged into */
    media: (Media | null)
    __typename: 'MediaMergeNotification'
}


/** Notification for when a media tracked in a user's list is deleted from the site */
export interface MediaDeletionNotification {
    /** The id of the Notification */
    id: Scalars['Int']
    /** The type of notification */
    type: (NotificationType | null)
    /** The title of the deleted media */
    deletedMediaTitle: (Scalars['String'] | null)
    /** The reason for the media deletion */
    context: (Scalars['String'] | null)
    /** The reason for the media deletion */
    reason: (Scalars['String'] | null)
    /** The time the notification was created at */
    createdAt: (Scalars['Int'] | null)
    __typename: 'MediaDeletionNotification'
}


/** Activity sort enums */
export type ActivitySort = 'ID' | 'ID_DESC' | 'PINNED'


/** Thread sort enums */
export type ThreadSort = 'ID' | 'ID_DESC' | 'TITLE' | 'TITLE_DESC' | 'CREATED_AT' | 'CREATED_AT_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'REPLIED_AT' | 'REPLIED_AT_DESC' | 'REPLY_COUNT' | 'REPLY_COUNT_DESC' | 'VIEW_COUNT' | 'VIEW_COUNT_DESC' | 'IS_STICKY' | 'SEARCH_MATCH'


/** Thread comments sort enums */
export type ThreadCommentSort = 'ID' | 'ID_DESC'


/** Types that can be liked */
export type LikeableType = 'THREAD' | 'THREAD_COMMENT' | 'ACTIVITY' | 'ACTIVITY_REPLY'


/** List of anime or manga */
export interface MediaListCollection {
    /** Grouped media list entries */
    lists: ((MediaListGroup | null)[] | null)
    /** The owner of the list */
    user: (User | null)
    /** If there is another chunk */
    hasNextChunk: (Scalars['Boolean'] | null)
    /**
     * @deprecated Not GraphQL spec compliant, use lists field instead.
     * A map of media list entry arrays grouped by status
     */
    statusLists: (((MediaList | null)[] | null)[] | null)
    /**
     * @deprecated Not GraphQL spec compliant, use lists field instead.
     * A map of media list entry arrays grouped by custom lists
     */
    customLists: (((MediaList | null)[] | null)[] | null)
    __typename: 'MediaListCollection'
}


/** List group of anime or manga entries */
export interface MediaListGroup {
    /** Media list entries */
    entries: ((MediaList | null)[] | null)
    name: (Scalars['String'] | null)
    isCustomList: (Scalars['Boolean'] | null)
    isSplitCompletedList: (Scalars['Boolean'] | null)
    status: (MediaListStatus | null)
    __typename: 'MediaListGroup'
}


/** Provides the parsed markdown as html */
export interface ParsedMarkdown {
    /** The parsed markdown as html */
    html: (Scalars['String'] | null)
    __typename: 'ParsedMarkdown'
}

export interface AniChartUser {
    user: (User | null)
    settings: (Scalars['Json'] | null)
    highlights: (Scalars['Json'] | null)
    __typename: 'AniChartUser'
}

export interface SiteStatistics {
    users: (SiteTrendConnection | null)
    anime: (SiteTrendConnection | null)
    manga: (SiteTrendConnection | null)
    characters: (SiteTrendConnection | null)
    staff: (SiteTrendConnection | null)
    studios: (SiteTrendConnection | null)
    reviews: (SiteTrendConnection | null)
    __typename: 'SiteStatistics'
}


/** Site trend sort enums */
export type SiteTrendSort = 'DATE' | 'DATE_DESC' | 'COUNT' | 'COUNT_DESC' | 'CHANGE' | 'CHANGE_DESC'

export interface SiteTrendConnection {
    edges: ((SiteTrendEdge | null)[] | null)
    nodes: ((SiteTrend | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'SiteTrendConnection'
}


/** Site trend connection edge */
export interface SiteTrendEdge {
    node: (SiteTrend | null)
    __typename: 'SiteTrendEdge'
}


/** Daily site statistics */
export interface SiteTrend {
    /** The day the data was recorded (timestamp) */
    date: Scalars['Int']
    count: Scalars['Int']
    /** The change from yesterday */
    change: Scalars['Int']
    __typename: 'SiteTrend'
}

export type ExternalLinkMediaType = 'ANIME' | 'MANGA' | 'STAFF'

export interface Mutation {
    UpdateUser: (User | null)
    /** Create or update a media list entry */
    SaveMediaListEntry: (MediaList | null)
    /** Update multiple media list entries to the same values */
    UpdateMediaListEntries: ((MediaList | null)[] | null)
    /** Delete a media list entry */
    DeleteMediaListEntry: (Deleted | null)
    /** Delete a custom list and remove the list entries from it */
    DeleteCustomList: (Deleted | null)
    /** Create or update text activity for the currently authenticated user */
    SaveTextActivity: (TextActivity | null)
    /** Create or update message activity for the currently authenticated user */
    SaveMessageActivity: (MessageActivity | null)
    /** Update list activity (Mod Only) */
    SaveListActivity: (ListActivity | null)
    /** Delete an activity item of the authenticated users */
    DeleteActivity: (Deleted | null)
    /** Toggle activity to be pinned to the top of the user's activity feed */
    ToggleActivityPin: (ActivityUnion | null)
    /** Toggle the subscription of an activity item */
    ToggleActivitySubscription: (ActivityUnion | null)
    /** Create or update an activity reply */
    SaveActivityReply: (ActivityReply | null)
    /** Delete an activity reply of the authenticated users */
    DeleteActivityReply: (Deleted | null)
    /**
     * Add or remove a like from a likeable type.
     *                           Returns all the users who liked the same model
     */
    ToggleLike: ((User | null)[] | null)
    /** Add or remove a like from a likeable type. */
    ToggleLikeV2: (LikeableUnion | null)
    /** Toggle the un/following of a user */
    ToggleFollow: (User | null)
    /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
    ToggleFavourite: (Favourites | null)
    /** Update the order favourites are displayed in */
    UpdateFavouriteOrder: (Favourites | null)
    /** Create or update a review */
    SaveReview: (Review | null)
    /** Delete a review */
    DeleteReview: (Deleted | null)
    /** Rate a review */
    RateReview: (Review | null)
    /** Recommendation a media */
    SaveRecommendation: (Recommendation | null)
    /** Create or update a forum thread */
    SaveThread: (Thread | null)
    /** Delete a thread */
    DeleteThread: (Deleted | null)
    /** Toggle the subscription of a forum thread */
    ToggleThreadSubscription: (Thread | null)
    /** Create or update a thread comment */
    SaveThreadComment: (ThreadComment | null)
    /** Delete a thread comment */
    DeleteThreadComment: (Deleted | null)
    UpdateAniChartSettings: (Scalars['Json'] | null)
    UpdateAniChartHighlights: (Scalars['Json'] | null)
    __typename: 'Mutation'
}


/** Deleted data type */
export interface Deleted {
    /** If an item has been successfully deleted */
    deleted: (Scalars['Boolean'] | null)
    __typename: 'Deleted'
}


/** Likeable union type */
export type LikeableUnion = (ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment) & { __isUnion?: true }


/** Page of data (Used for internal use only) */
export interface InternalPage {
    mediaSubmissions: ((MediaSubmission | null)[] | null)
    characterSubmissions: ((CharacterSubmission | null)[] | null)
    staffSubmissions: ((StaffSubmission | null)[] | null)
    revisionHistory: ((RevisionHistory | null)[] | null)
    reports: ((Report | null)[] | null)
    modActions: ((ModAction | null)[] | null)
    userBlockSearch: ((User | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    users: ((User | null)[] | null)
    media: ((Media | null)[] | null)
    characters: ((Character | null)[] | null)
    staff: ((Staff | null)[] | null)
    studios: ((Studio | null)[] | null)
    mediaList: ((MediaList | null)[] | null)
    airingSchedules: ((AiringSchedule | null)[] | null)
    mediaTrends: ((MediaTrend | null)[] | null)
    notifications: ((NotificationUnion | null)[] | null)
    followers: ((User | null)[] | null)
    following: ((User | null)[] | null)
    activities: ((ActivityUnion | null)[] | null)
    activityReplies: ((ActivityReply | null)[] | null)
    threads: ((Thread | null)[] | null)
    threadComments: ((ThreadComment | null)[] | null)
    reviews: ((Review | null)[] | null)
    recommendations: ((Recommendation | null)[] | null)
    likes: ((User | null)[] | null)
    __typename: 'InternalPage'
}


/** Submission status */
export type SubmissionStatus = 'PENDING' | 'REJECTED' | 'PARTIALLY_ACCEPTED' | 'ACCEPTED'


/** Submission sort enums */
export type SubmissionSort = 'ID' | 'ID_DESC'


/** Media submission */
export interface MediaSubmission {
    /** The id of the submission */
    id: Scalars['Int']
    /** User submitter of the submission */
    submitter: (User | null)
    /** Data Mod assigned to handle the submission */
    assignee: (User | null)
    /** Status of the submission */
    status: (SubmissionStatus | null)
    submitterStats: (Scalars['Json'] | null)
    notes: (Scalars['String'] | null)
    source: (Scalars['String'] | null)
    changes: ((Scalars['String'] | null)[] | null)
    /** Whether the submission is locked */
    locked: (Scalars['Boolean'] | null)
    media: (Media | null)
    submission: (Media | null)
    characters: ((MediaSubmissionComparison | null)[] | null)
    staff: ((MediaSubmissionComparison | null)[] | null)
    studios: ((MediaSubmissionComparison | null)[] | null)
    relations: ((MediaEdge | null)[] | null)
    externalLinks: ((MediaSubmissionComparison | null)[] | null)
    createdAt: (Scalars['Int'] | null)
    __typename: 'MediaSubmission'
}


/** Media submission with comparison to current data */
export interface MediaSubmissionComparison {
    submission: (MediaSubmissionEdge | null)
    character: (MediaCharacter | null)
    staff: (StaffEdge | null)
    studio: (StudioEdge | null)
    externalLink: (MediaExternalLink | null)
    __typename: 'MediaSubmissionComparison'
}

export interface MediaSubmissionEdge {
    /** The id of the direct submission */
    id: (Scalars['Int'] | null)
    characterRole: (CharacterRole | null)
    staffRole: (Scalars['String'] | null)
    roleNotes: (Scalars['String'] | null)
    dubGroup: (Scalars['String'] | null)
    characterName: (Scalars['String'] | null)
    isMain: (Scalars['Boolean'] | null)
    character: (Character | null)
    characterSubmission: (Character | null)
    voiceActor: (Staff | null)
    voiceActorSubmission: (Staff | null)
    staff: (Staff | null)
    staffSubmission: (Staff | null)
    studio: (Studio | null)
    externalLink: (MediaExternalLink | null)
    media: (Media | null)
    __typename: 'MediaSubmissionEdge'
}


/** Internal - Media characters separated */
export interface MediaCharacter {
    /** The id of the connection */
    id: (Scalars['Int'] | null)
    /** The characters role in the media */
    role: (CharacterRole | null)
    roleNotes: (Scalars['String'] | null)
    dubGroup: (Scalars['String'] | null)
    /** Media specific character name */
    characterName: (Scalars['String'] | null)
    /** The characters in the media voiced by the parent actor */
    character: (Character | null)
    /** The voice actor of the character */
    voiceActor: (Staff | null)
    __typename: 'MediaCharacter'
}


/** A submission for a character that features in an anime or manga */
export interface CharacterSubmission {
    /** The id of the submission */
    id: Scalars['Int']
    /** Character that the submission is referencing */
    character: (Character | null)
    /** The character submission changes */
    submission: (Character | null)
    /** Submitter for the submission */
    submitter: (User | null)
    /** Data Mod assigned to handle the submission */
    assignee: (User | null)
    /** Status of the submission */
    status: (SubmissionStatus | null)
    /** Inner details of submission status */
    notes: (Scalars['String'] | null)
    source: (Scalars['String'] | null)
    /** Whether the submission is locked */
    locked: (Scalars['Boolean'] | null)
    createdAt: (Scalars['Int'] | null)
    __typename: 'CharacterSubmission'
}


/** A submission for a staff that features in an anime or manga */
export interface StaffSubmission {
    /** The id of the submission */
    id: Scalars['Int']
    /** Staff that the submission is referencing */
    staff: (Staff | null)
    /** The staff submission changes */
    submission: (Staff | null)
    /** Submitter for the submission */
    submitter: (User | null)
    /** Data Mod assigned to handle the submission */
    assignee: (User | null)
    /** Status of the submission */
    status: (SubmissionStatus | null)
    /** Inner details of submission status */
    notes: (Scalars['String'] | null)
    source: (Scalars['String'] | null)
    /** Whether the submission is locked */
    locked: (Scalars['Boolean'] | null)
    createdAt: (Scalars['Int'] | null)
    __typename: 'StaffSubmission'
}


/** Feed of mod edit activity */
export interface RevisionHistory {
    /** The id of the media */
    id: Scalars['Int']
    /** The action taken on the objects */
    action: (RevisionHistoryAction | null)
    /** A JSON object of the fields that changed */
    changes: (Scalars['Json'] | null)
    /** The user who made the edit to the object */
    user: (User | null)
    /** The media the mod feed entry references */
    media: (Media | null)
    /** The character the mod feed entry references */
    character: (Character | null)
    /** The staff member the mod feed entry references */
    staff: (Staff | null)
    /** The studio the mod feed entry references */
    studio: (Studio | null)
    /** The external link source the mod feed entry references */
    externalLink: (MediaExternalLink | null)
    /** When the mod feed entry was created */
    createdAt: (Scalars['Int'] | null)
    __typename: 'RevisionHistory'
}


/** Revision history actions */
export type RevisionHistoryAction = 'CREATE' | 'EDIT'

export interface Report {
    id: Scalars['Int']
    reporter: (User | null)
    reported: (User | null)
    reason: (Scalars['String'] | null)
    /** When the entry data was created */
    createdAt: (Scalars['Int'] | null)
    cleared: (Scalars['Boolean'] | null)
    __typename: 'Report'
}

export interface ModAction {
    /** The id of the action */
    id: Scalars['Int']
    user: (User | null)
    mod: (User | null)
    type: (ModActionType | null)
    objectId: (Scalars['Int'] | null)
    objectType: (Scalars['String'] | null)
    data: (Scalars['String'] | null)
    createdAt: Scalars['Int']
    __typename: 'ModAction'
}

export type ModActionType = 'NOTE' | 'BAN' | 'DELETE' | 'EDIT' | 'EXPIRE' | 'REPORT' | 'RESET' | 'ANON'

export interface CharacterSubmissionConnection {
    edges: ((CharacterSubmissionEdge | null)[] | null)
    nodes: ((CharacterSubmission | null)[] | null)
    /** The pagination information */
    pageInfo: (PageInfo | null)
    __typename: 'CharacterSubmissionConnection'
}


/** CharacterSubmission connection edge */
export interface CharacterSubmissionEdge {
    node: (CharacterSubmission | null)
    /** The characters role in the media */
    role: (CharacterRole | null)
    /** The voice actors of the character */
    voiceActors: ((Staff | null)[] | null)
    /** The submitted voice actors of the character */
    submittedVoiceActors: ((StaffSubmission | null)[] | null)
    __typename: 'CharacterSubmissionEdge'
}


/** User data for moderators */
export interface UserModData {
    alts: ((User | null)[] | null)
    bans: (Scalars['Json'] | null)
    ip: (Scalars['Json'] | null)
    counts: (Scalars['Json'] | null)
    privacy: (Scalars['Int'] | null)
    email: (Scalars['String'] | null)
    __typename: 'UserModData'
}

export interface QueryGenqlSelection{
    Page?: (PageGenqlSelection & { __args?: {
    /** The page number */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 50 */
    perPage?: (Scalars['Int'] | null)} })
    /** Media query */
    Media?: (MediaGenqlSelection & { __args: {
    /** Filter by the media id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal?: (Scalars['Int'] | null), 
    /** Filter by the start date of the media */
    startDate?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the season the media was released in */
    season?: (MediaSeason | null), 
    /** The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument */
    seasonYear?: (Scalars['Int'] | null), 
    /** Filter by the media's type */
    type?: (MediaType | null), 
    /** Filter by the media's format */
    format?: (MediaFormat | null), 
    /** Filter by the media's current release status */
    status?: (MediaStatus | null), 
    /** Filter by amount of episodes the media has */
    episodes?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes?: (Scalars['Int'] | null), 
    /** Filter by if the media's intended for 18+ adult audiences */
    isAdult?: (Scalars['Boolean'] | null), 
    /** Filter by the media's genres */
    genre?: (Scalars['String'] | null), 
    /** Filter by the media's tags */
    tag?: (Scalars['String'] | null), 
    /** Only apply the tags filter argument to tags above this rank. Default: 18 */
    minimumTagRank?: (Scalars['Int'] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory?: (Scalars['String'] | null), 
    /** Filter by the media on the authenticated user's lists */
    onList?: (Scalars['Boolean'] | null), 
    /** Filter media by sites name with a online streaming or reading license */
    licensedBy?: (Scalars['String'] | null), 
    /** Filter media by sites id with a online streaming or reading license */
    licensedById?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity?: (Scalars['Int'] | null), 
    /** Filter by the source type of the media */
    source?: (MediaSource | null), 
    /** Filter by the media's country of origin */
    countryOfOrigin?: (Scalars['CountryCode'] | null), 
    /** If the media is officially licensed or a self-published doujin release */
    isLicensed?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the media id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the media id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_not?: (Scalars['Int'] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the start date of the media */
    startDate_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the start date of the media */
    startDate_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the start date of the media */
    startDate_like?: (Scalars['String'] | null), 
    /** Filter by the end date of the media */
    endDate_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate_like?: (Scalars['String'] | null), 
    /** Filter by the media's format */
    format_in?: ((MediaFormat | null)[] | null), 
    /** Filter by the media's format */
    format_not?: (MediaFormat | null), 
    /** Filter by the media's format */
    format_not_in?: ((MediaFormat | null)[] | null), 
    /** Filter by the media's current release status */
    status_in?: ((MediaStatus | null)[] | null), 
    /** Filter by the media's current release status */
    status_not?: (MediaStatus | null), 
    /** Filter by the media's current release status */
    status_not_in?: ((MediaStatus | null)[] | null), 
    /** Filter by amount of episodes the media has */
    episodes_greater?: (Scalars['Int'] | null), 
    /** Filter by amount of episodes the media has */
    episodes_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's genres */
    genre_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's genres */
    genre_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags */
    tag_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags */
    tag_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter media by sites name with a online streaming or reading license */
    licensedBy_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter media by sites id with a online streaming or reading license */
    licensedById_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's average score */
    averageScore_not?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore_lesser?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_not?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_greater?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_lesser?: (Scalars['Int'] | null), 
    /** Filter by the source type of the media */
    source_in?: ((MediaSource | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaSort | null)[] | null)} })
    /** Media Trend query */
    MediaTrend?: (MediaTrendGenqlSelection & { __args?: {
    /** Filter by the media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by date */
    date?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode?: (Scalars['Int'] | null), 
    /** Filter to stats recorded while the media was releasing */
    releasing?: (Scalars['Boolean'] | null), 
    /** Filter by the media id */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the media id */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by date */
    date_greater?: (Scalars['Int'] | null), 
    /** Filter by date */
    date_lesser?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_greater?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_lesser?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_not?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_greater?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_lesser?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_not?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_greater?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_lesser?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_not?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_greater?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_lesser?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_not?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaTrendSort | null)[] | null)} })
    /** Airing schedule query */
    AiringSchedule?: (AiringScheduleGenqlSelection & { __args?: {
    /** Filter by the id of the airing schedule item */
    id?: (Scalars['Int'] | null), 
    /** Filter by the id of associated media */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt?: (Scalars['Int'] | null), 
    /** Filter to episodes that haven't yet aired */
    notYetAired?: (Scalars['Boolean'] | null), 
    /** Filter by the id of the airing schedule item */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the id of the airing schedule item */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the airing schedule item */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of associated media */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the id of associated media */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of associated media */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_not?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_greater?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode_lesser?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt_greater?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((AiringSort | null)[] | null)} })
    /** Character query */
    Character?: (CharacterGenqlSelection & { __args?: {
    /** Filter by character id */
    id?: (Scalars['Int'] | null), 
    /** Filter by character by if its their birthday today */
    isBirthday?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by character id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by character id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by character id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((CharacterSort | null)[] | null)} })
    /** Staff query */
    Staff?: (StaffGenqlSelection & { __args?: {
    /** Filter by the staff id */
    id?: (Scalars['Int'] | null), 
    /** Filter by staff by if its their birthday today */
    isBirthday?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the staff id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the staff id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the staff id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((StaffSort | null)[] | null)} })
    /** Media list query */
    MediaList?: (MediaListGenqlSelection & { __args?: {
    /** Filter by a list entry's id */
    id?: (Scalars['Int'] | null), 
    /** Filter by a user's id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by a user's name */
    userName?: (Scalars['String'] | null), 
    /** Filter by the list entries media type */
    type?: (MediaType | null), 
    /** Filter by the watching/reading status */
    status?: (MediaListStatus | null), 
    /** Filter by the media id of the list entry */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter list entries to users who are being followed by the authenticated user */
    isFollowing?: (Scalars['Boolean'] | null), 
    /** Filter by note words and #tags */
    notes?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Limit to only entries also on the auth user's list. Requires user id or name arguments. */
    compareWithAuthList?: (Scalars['Boolean'] | null), 
    /** Filter by a user's id */
    userId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the watching/reading status */
    status_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not?: (MediaListStatus | null), 
    /** Filter by the media id of the list entry */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id of the list entry */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by note words and #tags */
    notes_like?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_like?: (Scalars['String'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_like?: (Scalars['String'] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaListSort | null)[] | null)} })
    /** Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required. */
    MediaListCollection?: (MediaListCollectionGenqlSelection & { __args?: {
    /** Filter by a user's id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by a user's name */
    userName?: (Scalars['String'] | null), 
    /** Filter by the list entries media type */
    type?: (MediaType | null), 
    /** Filter by the watching/reading status */
    status?: (MediaListStatus | null), 
    /** Filter by note words and #tags */
    notes?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Always return completed list entries in one group, overriding the user's split completed option. */
    forceSingleCompletedList?: (Scalars['Boolean'] | null), 
    /** Which chunk of list entries to load */
    chunk?: (Scalars['Int'] | null), 
    /** The amount of entries per chunk, max 500 */
    perChunk?: (Scalars['Int'] | null), 
    /** Filter by the watching/reading status */
    status_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not?: (MediaListStatus | null), 
    /** Filter by note words and #tags */
    notes_like?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_like?: (Scalars['String'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_like?: (Scalars['String'] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaListSort | null)[] | null)} })
    /** Collection of all the possible media genres */
    GenreCollection?: boolean | number
    /** Collection of all the possible media tags */
    MediaTagCollection?: (MediaTagGenqlSelection & { __args?: {
    /** Mod Only */
    status?: (Scalars['Int'] | null)} })
    /** User query */
    User?: (UserGenqlSelection & { __args?: {
    /** Filter by the user id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the name of the user */
    name?: (Scalars['String'] | null), 
    /** Filter to moderators only if true */
    isModerator?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    /** Get the currently authenticated user */
    Viewer?: UserGenqlSelection
    /** Notification query */
    Notification?: (NotificationUnionGenqlSelection & { __args?: {
    /** Filter by the type of notifications */
    type?: (NotificationType | null), 
    /** Reset the unread notification count to 0 on load */
    resetNotificationCount?: (Scalars['Boolean'] | null), 
    /** Filter by the type of notifications */
    type_in?: ((NotificationType | null)[] | null)} })
    /** Studio query */
    Studio?: (StudioGenqlSelection & { __args?: {
    /** Filter by the studio id */
    id?: (Scalars['Int'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the studio id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the studio id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the studio id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((StudioSort | null)[] | null)} })
    /** Review query */
    Review?: (ReviewGenqlSelection & { __args?: {
    /** Filter by Review id */
    id?: (Scalars['Int'] | null), 
    /** Filter by media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by user id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by media type */
    mediaType?: (MediaType | null), 
    /** The order the results will be returned in */
    sort?: ((ReviewSort | null)[] | null)} })
    /** Activity query */
    Activity?: (ActivityUnionGenqlSelection & { __args?: {
    /** Filter by the activity id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the owner user id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId?: (Scalars['Int'] | null), 
    /** Filter by the associated media id of the activity */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by the type of activity */
    type?: (ActivityType | null), 
    /** Filter activity to users who are being followed by the authenticated user */
    isFollowing?: (Scalars['Boolean'] | null), 
    /** Filter activity to only activity with replies */
    hasReplies?: (Scalars['Boolean'] | null), 
    /** Filter activity to only activity with replies or is of type text */
    hasRepliesOrTypeText?: (Scalars['Boolean'] | null), 
    /** Filter by the time the activity was created */
    createdAt?: (Scalars['Int'] | null), 
    /** Filter by the activity id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the activity id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the activity id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the owner user id */
    userId_not?: (Scalars['Int'] | null), 
    /** Filter by the owner user id */
    userId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the owner user id */
    userId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_not?: (Scalars['Int'] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the type of activity */
    type_not?: (ActivityType | null), 
    /** Filter by the type of activity */
    type_in?: ((ActivityType | null)[] | null), 
    /** Filter by the type of activity */
    type_not_in?: ((ActivityType | null)[] | null), 
    /** Filter by the time the activity was created */
    createdAt_greater?: (Scalars['Int'] | null), 
    /** Filter by the time the activity was created */
    createdAt_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((ActivitySort | null)[] | null)} })
    /** Activity reply query */
    ActivityReply?: (ActivityReplyGenqlSelection & { __args?: {
    /** Filter by the reply id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the parent id */
    activityId?: (Scalars['Int'] | null)} })
    /** Follow query */
    Following?: (UserGenqlSelection & { __args: {
    /** User id of the follower/followed */
    userId: Scalars['Int'], 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    /** Follow query */
    Follower?: (UserGenqlSelection & { __args: {
    /** User id of the follower/followed */
    userId: Scalars['Int'], 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    /** Thread query */
    Thread?: (ThreadGenqlSelection & { __args?: {
    /** Filter by the thread id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the user id of the thread's creator */
    userId?: (Scalars['Int'] | null), 
    /** Filter by the user id of the last user to comment on the thread */
    replyUserId?: (Scalars['Int'] | null), 
    /** Filter by if the currently authenticated user's subscribed threads */
    subscribed?: (Scalars['Boolean'] | null), 
    /** Filter by thread category id */
    categoryId?: (Scalars['Int'] | null), 
    /** Filter by thread media id category */
    mediaCategoryId?: (Scalars['Int'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the thread id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((ThreadSort | null)[] | null)} })
    /** Comment query */
    ThreadComment?: (ThreadCommentGenqlSelection & { __args?: {
    /** Filter by the comment id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the thread id */
    threadId?: (Scalars['Int'] | null), 
    /** Filter by the user id of the comment's creator */
    userId?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((ThreadCommentSort | null)[] | null)} })
    /** Recommendation query */
    Recommendation?: (RecommendationGenqlSelection & { __args?: {
    /** Filter by recommendation id */
    id?: (Scalars['Int'] | null), 
    /** Filter by media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by media recommendation id */
    mediaRecommendationId?: (Scalars['Int'] | null), 
    /** Filter by user who created the recommendation */
    userId?: (Scalars['Int'] | null), 
    /** Filter by total rating of the recommendation */
    rating?: (Scalars['Int'] | null), 
    /** Filter by the media on the authenticated user's lists */
    onList?: (Scalars['Boolean'] | null), 
    /** Filter by total rating of the recommendation */
    rating_greater?: (Scalars['Int'] | null), 
    /** Filter by total rating of the recommendation */
    rating_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((RecommendationSort | null)[] | null)} })
    /** Like query */
    Like?: (UserGenqlSelection & { __args?: {
    /** The id of the likeable type */
    likeableId?: (Scalars['Int'] | null), 
    /** The type of model the id applies to */
    type?: (LikeableType | null)} })
    /** Provide AniList markdown to be converted to html (Requires auth) */
    Markdown?: (ParsedMarkdownGenqlSelection & { __args: {
    /** The markdown to be parsed to html */
    markdown: Scalars['String']} })
    AniChartUser?: AniChartUserGenqlSelection
    /** Site statistics query */
    SiteStatistics?: SiteStatisticsGenqlSelection
    /** ExternalLinkSource collection query */
    ExternalLinkSourceCollection?: (MediaExternalLinkGenqlSelection & { __args?: {
    /** Filter by the link id */
    id?: (Scalars['Int'] | null), type?: (ExternalLinkType | null), mediaType?: (ExternalLinkMediaType | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page of data */
export interface PageGenqlSelection{
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    users?: (UserGenqlSelection & { __args?: {
    /** Filter by the user id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the name of the user */
    name?: (Scalars['String'] | null), 
    /** Filter to moderators only if true */
    isModerator?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    media?: (MediaGenqlSelection & { __args: {
    /** Filter by the media id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal?: (Scalars['Int'] | null), 
    /** Filter by the start date of the media */
    startDate?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the season the media was released in */
    season?: (MediaSeason | null), 
    /** The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument */
    seasonYear?: (Scalars['Int'] | null), 
    /** Filter by the media's type */
    type?: (MediaType | null), 
    /** Filter by the media's format */
    format?: (MediaFormat | null), 
    /** Filter by the media's current release status */
    status?: (MediaStatus | null), 
    /** Filter by amount of episodes the media has */
    episodes?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes?: (Scalars['Int'] | null), 
    /** Filter by if the media's intended for 18+ adult audiences */
    isAdult?: (Scalars['Boolean'] | null), 
    /** Filter by the media's genres */
    genre?: (Scalars['String'] | null), 
    /** Filter by the media's tags */
    tag?: (Scalars['String'] | null), 
    /** Only apply the tags filter argument to tags above this rank. Default: 18 */
    minimumTagRank?: (Scalars['Int'] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory?: (Scalars['String'] | null), 
    /** Filter by the media on the authenticated user's lists */
    onList?: (Scalars['Boolean'] | null), 
    /** Filter media by sites name with a online streaming or reading license */
    licensedBy?: (Scalars['String'] | null), 
    /** Filter media by sites id with a online streaming or reading license */
    licensedById?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity?: (Scalars['Int'] | null), 
    /** Filter by the source type of the media */
    source?: (MediaSource | null), 
    /** Filter by the media's country of origin */
    countryOfOrigin?: (Scalars['CountryCode'] | null), 
    /** If the media is officially licensed or a self-published doujin release */
    isLicensed?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the media id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the media id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_not?: (Scalars['Int'] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the start date of the media */
    startDate_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the start date of the media */
    startDate_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the start date of the media */
    startDate_like?: (Scalars['String'] | null), 
    /** Filter by the end date of the media */
    endDate_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate_like?: (Scalars['String'] | null), 
    /** Filter by the media's format */
    format_in?: ((MediaFormat | null)[] | null), 
    /** Filter by the media's format */
    format_not?: (MediaFormat | null), 
    /** Filter by the media's format */
    format_not_in?: ((MediaFormat | null)[] | null), 
    /** Filter by the media's current release status */
    status_in?: ((MediaStatus | null)[] | null), 
    /** Filter by the media's current release status */
    status_not?: (MediaStatus | null), 
    /** Filter by the media's current release status */
    status_not_in?: ((MediaStatus | null)[] | null), 
    /** Filter by amount of episodes the media has */
    episodes_greater?: (Scalars['Int'] | null), 
    /** Filter by amount of episodes the media has */
    episodes_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's genres */
    genre_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's genres */
    genre_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags */
    tag_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags */
    tag_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter media by sites name with a online streaming or reading license */
    licensedBy_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter media by sites id with a online streaming or reading license */
    licensedById_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's average score */
    averageScore_not?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore_lesser?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_not?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_greater?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_lesser?: (Scalars['Int'] | null), 
    /** Filter by the source type of the media */
    source_in?: ((MediaSource | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaSort | null)[] | null)} })
    characters?: (CharacterGenqlSelection & { __args?: {
    /** Filter by character id */
    id?: (Scalars['Int'] | null), 
    /** Filter by character by if its their birthday today */
    isBirthday?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by character id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by character id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by character id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((CharacterSort | null)[] | null)} })
    staff?: (StaffGenqlSelection & { __args?: {
    /** Filter by the staff id */
    id?: (Scalars['Int'] | null), 
    /** Filter by staff by if its their birthday today */
    isBirthday?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the staff id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the staff id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the staff id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((StaffSort | null)[] | null)} })
    studios?: (StudioGenqlSelection & { __args?: {
    /** Filter by the studio id */
    id?: (Scalars['Int'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the studio id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the studio id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the studio id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((StudioSort | null)[] | null)} })
    mediaList?: (MediaListGenqlSelection & { __args?: {
    /** Filter by a list entry's id */
    id?: (Scalars['Int'] | null), 
    /** Filter by a user's id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by a user's name */
    userName?: (Scalars['String'] | null), 
    /** Filter by the list entries media type */
    type?: (MediaType | null), 
    /** Filter by the watching/reading status */
    status?: (MediaListStatus | null), 
    /** Filter by the media id of the list entry */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter list entries to users who are being followed by the authenticated user */
    isFollowing?: (Scalars['Boolean'] | null), 
    /** Filter by note words and #tags */
    notes?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Limit to only entries also on the auth user's list. Requires user id or name arguments. */
    compareWithAuthList?: (Scalars['Boolean'] | null), 
    /** Filter by a user's id */
    userId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the watching/reading status */
    status_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not?: (MediaListStatus | null), 
    /** Filter by the media id of the list entry */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id of the list entry */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by note words and #tags */
    notes_like?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_like?: (Scalars['String'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_like?: (Scalars['String'] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaListSort | null)[] | null)} })
    airingSchedules?: (AiringScheduleGenqlSelection & { __args?: {
    /** Filter by the id of the airing schedule item */
    id?: (Scalars['Int'] | null), 
    /** Filter by the id of associated media */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt?: (Scalars['Int'] | null), 
    /** Filter to episodes that haven't yet aired */
    notYetAired?: (Scalars['Boolean'] | null), 
    /** Filter by the id of the airing schedule item */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the id of the airing schedule item */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the airing schedule item */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of associated media */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the id of associated media */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of associated media */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_not?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_greater?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode_lesser?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt_greater?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((AiringSort | null)[] | null)} })
    mediaTrends?: (MediaTrendGenqlSelection & { __args?: {
    /** Filter by the media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by date */
    date?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode?: (Scalars['Int'] | null), 
    /** Filter to stats recorded while the media was releasing */
    releasing?: (Scalars['Boolean'] | null), 
    /** Filter by the media id */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the media id */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by date */
    date_greater?: (Scalars['Int'] | null), 
    /** Filter by date */
    date_lesser?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_greater?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_lesser?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_not?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_greater?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_lesser?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_not?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_greater?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_lesser?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_not?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_greater?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_lesser?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_not?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaTrendSort | null)[] | null)} })
    notifications?: (NotificationUnionGenqlSelection & { __args?: {
    /** Filter by the type of notifications */
    type?: (NotificationType | null), 
    /** Reset the unread notification count to 0 on load */
    resetNotificationCount?: (Scalars['Boolean'] | null), 
    /** Filter by the type of notifications */
    type_in?: ((NotificationType | null)[] | null)} })
    followers?: (UserGenqlSelection & { __args: {
    /** User id of the follower/followed */
    userId: Scalars['Int'], 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    following?: (UserGenqlSelection & { __args: {
    /** User id of the follower/followed */
    userId: Scalars['Int'], 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    activities?: (ActivityUnionGenqlSelection & { __args?: {
    /** Filter by the activity id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the owner user id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId?: (Scalars['Int'] | null), 
    /** Filter by the associated media id of the activity */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by the type of activity */
    type?: (ActivityType | null), 
    /** Filter activity to users who are being followed by the authenticated user */
    isFollowing?: (Scalars['Boolean'] | null), 
    /** Filter activity to only activity with replies */
    hasReplies?: (Scalars['Boolean'] | null), 
    /** Filter activity to only activity with replies or is of type text */
    hasRepliesOrTypeText?: (Scalars['Boolean'] | null), 
    /** Filter by the time the activity was created */
    createdAt?: (Scalars['Int'] | null), 
    /** Filter by the activity id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the activity id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the activity id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the owner user id */
    userId_not?: (Scalars['Int'] | null), 
    /** Filter by the owner user id */
    userId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the owner user id */
    userId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_not?: (Scalars['Int'] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the type of activity */
    type_not?: (ActivityType | null), 
    /** Filter by the type of activity */
    type_in?: ((ActivityType | null)[] | null), 
    /** Filter by the type of activity */
    type_not_in?: ((ActivityType | null)[] | null), 
    /** Filter by the time the activity was created */
    createdAt_greater?: (Scalars['Int'] | null), 
    /** Filter by the time the activity was created */
    createdAt_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((ActivitySort | null)[] | null)} })
    activityReplies?: (ActivityReplyGenqlSelection & { __args?: {
    /** Filter by the reply id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the parent id */
    activityId?: (Scalars['Int'] | null)} })
    threads?: (ThreadGenqlSelection & { __args?: {
    /** Filter by the thread id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the user id of the thread's creator */
    userId?: (Scalars['Int'] | null), 
    /** Filter by the user id of the last user to comment on the thread */
    replyUserId?: (Scalars['Int'] | null), 
    /** Filter by if the currently authenticated user's subscribed threads */
    subscribed?: (Scalars['Boolean'] | null), 
    /** Filter by thread category id */
    categoryId?: (Scalars['Int'] | null), 
    /** Filter by thread media id category */
    mediaCategoryId?: (Scalars['Int'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the thread id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((ThreadSort | null)[] | null)} })
    threadComments?: (ThreadCommentGenqlSelection & { __args?: {
    /** Filter by the comment id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the thread id */
    threadId?: (Scalars['Int'] | null), 
    /** Filter by the user id of the comment's creator */
    userId?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((ThreadCommentSort | null)[] | null)} })
    reviews?: (ReviewGenqlSelection & { __args?: {
    /** Filter by Review id */
    id?: (Scalars['Int'] | null), 
    /** Filter by media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by user id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by media type */
    mediaType?: (MediaType | null), 
    /** The order the results will be returned in */
    sort?: ((ReviewSort | null)[] | null)} })
    recommendations?: (RecommendationGenqlSelection & { __args?: {
    /** Filter by recommendation id */
    id?: (Scalars['Int'] | null), 
    /** Filter by media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by media recommendation id */
    mediaRecommendationId?: (Scalars['Int'] | null), 
    /** Filter by user who created the recommendation */
    userId?: (Scalars['Int'] | null), 
    /** Filter by total rating of the recommendation */
    rating?: (Scalars['Int'] | null), 
    /** Filter by the media on the authenticated user's lists */
    onList?: (Scalars['Boolean'] | null), 
    /** Filter by total rating of the recommendation */
    rating_greater?: (Scalars['Int'] | null), 
    /** Filter by total rating of the recommendation */
    rating_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((RecommendationSort | null)[] | null)} })
    likes?: (UserGenqlSelection & { __args?: {
    /** The id of the likeable type */
    likeableId?: (Scalars['Int'] | null), 
    /** The type of model the id applies to */
    type?: (LikeableType | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageInfoGenqlSelection{
    /** The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic */
    total?: boolean | number
    /** The count on a page */
    perPage?: boolean | number
    /** The current page */
    currentPage?: boolean | number
    /** The last page */
    lastPage?: boolean | number
    /** If there is another page */
    hasNextPage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user */
export interface UserGenqlSelection{
    /** The id of the user */
    id?: boolean | number
    /** The name of the user */
    name?: boolean | number
    /** The bio written by user (Markdown) */
    about?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The user's avatar images */
    avatar?: UserAvatarGenqlSelection
    /** The user's banner images */
    bannerImage?: boolean | number
    /** If the authenticated user if following this user */
    isFollowing?: boolean | number
    /** If this user if following the authenticated user */
    isFollower?: boolean | number
    /** If the user is blocked by the authenticated user */
    isBlocked?: boolean | number
    bans?: boolean | number
    /** The user's general options */
    options?: UserOptionsGenqlSelection
    /** The user's media list options */
    mediaListOptions?: MediaListOptionsGenqlSelection
    /** The users favourites */
    favourites?: (FavouritesGenqlSelection & { __args?: {
    /** Deprecated. Use page arguments on each favourite field instead. */
    page?: (Scalars['Int'] | null)} })
    /** The users anime & manga list statistics */
    statistics?: UserStatisticTypesGenqlSelection
    /** The number of unread notifications the user has */
    unreadNotificationCount?: boolean | number
    /** The url for the user page on the AniList website */
    siteUrl?: boolean | number
    /** The donation tier of the user */
    donatorTier?: boolean | number
    /** Custom donation badge text */
    donatorBadge?: boolean | number
    /** The user's moderator roles if they are a site moderator */
    moderatorRoles?: boolean | number
    /** When the user's account was created. (Does not exist for accounts created before 2020) */
    createdAt?: boolean | number
    /** When the user's data was last updated */
    updatedAt?: boolean | number
    /**
     * @deprecated Deprecated. Replaced with statistics field.
     * The user's statistics
     */
    stats?: UserStatsGenqlSelection
    /**
     * @deprecated Deprecated. Replaced with moderatorRoles field.
     * If the user is a moderator or data moderator
     */
    moderatorStatus?: boolean | number
    /** The user's previously used names. */
    previousNames?: UserPreviousNameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's avatars */
export interface UserAvatarGenqlSelection{
    /** The avatar of user at its largest size */
    large?: boolean | number
    /** The avatar of user at medium size */
    medium?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's general options */
export interface UserOptionsGenqlSelection{
    /** The language the user wants to see media titles in */
    titleLanguage?: boolean | number
    /** Whether the user has enabled viewing of 18+ content */
    displayAdultContent?: boolean | number
    /** Whether the user receives notifications when a show they are watching aires */
    airingNotifications?: boolean | number
    /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
    profileColor?: boolean | number
    /** Notification options */
    notificationOptions?: NotificationOptionGenqlSelection
    /** The user's timezone offset (Auth user only) */
    timezone?: boolean | number
    /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
    activityMergeTime?: boolean | number
    /** The language the user wants to see staff and character names in */
    staffNameLanguage?: boolean | number
    /** Whether the user only allow messages from users they follow */
    restrictMessagesToFollowing?: boolean | number
    /** The list activity types the user has disabled from being created from list updates */
    disabledListActivity?: ListActivityOptionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification option */
export interface NotificationOptionGenqlSelection{
    /** The type of notification */
    type?: boolean | number
    /** Whether this type of notification is enabled */
    enabled?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ListActivityOptionGenqlSelection{
    disabled?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's list options */
export interface MediaListOptionsGenqlSelection{
    /** The score format the user is using for media lists */
    scoreFormat?: boolean | number
    /** The default order list rows should be displayed in */
    rowOrder?: boolean | number
    /** @deprecated No longer used */
    useLegacyLists?: boolean | number
    /** The user's anime list options */
    animeList?: MediaListTypeOptionsGenqlSelection
    /** The user's manga list options */
    mangaList?: MediaListTypeOptionsGenqlSelection
    /**
     * @deprecated No longer used
     * The list theme options for both lists
     */
    sharedTheme?: boolean | number
    /**
     * @deprecated No longer used
     * If the shared theme should be used instead of the individual list themes
     */
    sharedThemeEnabled?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's list options for anime or manga lists */
export interface MediaListTypeOptionsGenqlSelection{
    /** The order each list should be displayed in */
    sectionOrder?: boolean | number
    /** If the completed sections of the list should be separated by format */
    splitCompletedSectionByFormat?: boolean | number
    /**
     * @deprecated This field has not yet been fully implemented and may change without warning
     * The list theme options
     */
    theme?: boolean | number
    /** The names of the user's custom lists */
    customLists?: boolean | number
    /** The names of the user's advanced scoring sections */
    advancedScoring?: boolean | number
    /** If advanced scoring is enabled */
    advancedScoringEnabled?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's favourite anime, manga, characters, staff & studios */
export interface FavouritesGenqlSelection{
    /** Favourite anime */
    anime?: (MediaConnectionGenqlSelection & { __args?: {
    /** The page number */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** Favourite manga */
    manga?: (MediaConnectionGenqlSelection & { __args?: {
    /** The page number */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** Favourite characters */
    characters?: (CharacterConnectionGenqlSelection & { __args?: {
    /** The page number */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** Favourite staff */
    staff?: (StaffConnectionGenqlSelection & { __args?: {
    /** The page number */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** Favourite studios */
    studios?: (StudioConnectionGenqlSelection & { __args?: {
    /** The page number */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaConnectionGenqlSelection{
    edges?: MediaEdgeGenqlSelection
    nodes?: MediaGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Media connection edge */
export interface MediaEdgeGenqlSelection{
    node?: MediaGenqlSelection
    /** The id of the connection */
    id?: boolean | number
    /** The type of relation to the parent model */
    relationType?: { __args: {
    /** Provide 2 to use new version 2 of relation enum */
    version?: (Scalars['Int'] | null)} } | boolean | number
    /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
    isMainStudio?: boolean | number
    /** The characters in the media voiced by the parent actor */
    characters?: CharacterGenqlSelection
    /** The characters role in the media */
    characterRole?: boolean | number
    /** Media specific character name */
    characterName?: boolean | number
    /** Notes regarding the VA's role for the character */
    roleNotes?: boolean | number
    /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
    dubGroup?: boolean | number
    /** The role of the staff member in the production of the media */
    staffRole?: boolean | number
    /** The voice actors of the character */
    voiceActors?: (StaffGenqlSelection & { __args?: {language?: (StaffLanguage | null), sort?: ((StaffSort | null)[] | null)} })
    /** The voice actors of the character with role date */
    voiceActorRoles?: (StaffRoleTypeGenqlSelection & { __args?: {language?: (StaffLanguage | null), sort?: ((StaffSort | null)[] | null)} })
    /** The order the media should be displayed from the users favourites */
    favouriteOrder?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Anime or Manga */
export interface MediaGenqlSelection{
    /** The id of the media */
    id?: boolean | number
    /** The mal id of the media */
    idMal?: boolean | number
    /** The official titles of the media in various languages */
    title?: MediaTitleGenqlSelection
    /** The type of the media; anime or manga */
    type?: boolean | number
    /** The format the media was released in */
    format?: boolean | number
    /** The current releasing status of the media */
    status?: { __args: {
    /** Provide 2 to use new version 2 of sources enum */
    version?: (Scalars['Int'] | null)} } | boolean | number
    /** Short description of the media's story and characters */
    description?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The first official release date of the media */
    startDate?: FuzzyDateGenqlSelection
    /** The last official release date of the media */
    endDate?: FuzzyDateGenqlSelection
    /** The season the media was initially released in */
    season?: boolean | number
    /** The season year the media was initially released in */
    seasonYear?: boolean | number
    /** The year & season the media was initially released in */
    seasonInt?: boolean | number
    /** The amount of episodes the anime has when complete */
    episodes?: boolean | number
    /** The general length of each anime episode in minutes */
    duration?: boolean | number
    /** The amount of chapters the manga has when complete */
    chapters?: boolean | number
    /** The amount of volumes the manga has when complete */
    volumes?: boolean | number
    /** Where the media was created. (ISO 3166-1 alpha-2) */
    countryOfOrigin?: boolean | number
    /** If the media is officially licensed or a self-published doujin release */
    isLicensed?: boolean | number
    /** Source type the media was adapted from. */
    source?: { __args: {
    /** Provide 2 or 3 to use new version 2 or 3 of sources enum */
    version?: (Scalars['Int'] | null)} } | boolean | number
    /** Official Twitter hashtags for the media */
    hashtag?: boolean | number
    /** Media trailer or advertisement */
    trailer?: MediaTrailerGenqlSelection
    /** When the media's data was last updated */
    updatedAt?: boolean | number
    /** The cover images of the media */
    coverImage?: MediaCoverImageGenqlSelection
    /** The banner image of the media */
    bannerImage?: boolean | number
    /** The genres of the media */
    genres?: boolean | number
    /** Alternative titles of the media */
    synonyms?: boolean | number
    /** A weighted average score of all the user's scores of the media */
    averageScore?: boolean | number
    /** Mean score of all the user's scores of the media */
    meanScore?: boolean | number
    /** The number of users with the media on their list */
    popularity?: boolean | number
    /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
    isLocked?: boolean | number
    /** The amount of related activity in the past hour */
    trending?: boolean | number
    /** The amount of user's who have favourited the media */
    favourites?: boolean | number
    /** List of tags that describes elements and themes of the media */
    tags?: MediaTagGenqlSelection
    /** Other media in the same or connecting franchise */
    relations?: MediaConnectionGenqlSelection
    /** The characters in the media */
    characters?: (CharacterConnectionGenqlSelection & { __args?: {sort?: ((CharacterSort | null)[] | null), role?: (CharacterRole | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** The staff who produced the media */
    staff?: (StaffConnectionGenqlSelection & { __args?: {sort?: ((StaffSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** The companies who produced the media */
    studios?: (StudioConnectionGenqlSelection & { __args?: {sort?: ((StudioSort | null)[] | null), isMain?: (Scalars['Boolean'] | null)} })
    /** If the media is marked as favourite by the current authenticated user */
    isFavourite?: boolean | number
    /** If the media is blocked from being added to favourites */
    isFavouriteBlocked?: boolean | number
    /** If the media is intended only for 18+ adult audiences */
    isAdult?: boolean | number
    /** The media's next episode airing schedule */
    nextAiringEpisode?: AiringScheduleGenqlSelection
    /** The media's entire airing schedule */
    airingSchedule?: (AiringScheduleConnectionGenqlSelection & { __args?: {
    /** Filter to episodes that have not yet aired */
    notYetAired?: (Scalars['Boolean'] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** The media's daily trend stats */
    trends?: (MediaTrendConnectionGenqlSelection & { __args?: {sort?: ((MediaTrendSort | null)[] | null), 
    /** Filter to stats recorded while the media was releasing */
    releasing?: (Scalars['Boolean'] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** External links to another site related to the media */
    externalLinks?: MediaExternalLinkGenqlSelection
    /** Data and links to legal streaming episodes on external sites */
    streamingEpisodes?: MediaStreamingEpisodeGenqlSelection
    /** The ranking of the media in a particular time span and format compared to other media */
    rankings?: MediaRankGenqlSelection
    /** The authenticated user's media list entry for the media */
    mediaListEntry?: MediaListGenqlSelection
    /** User reviews of the media */
    reviews?: (ReviewConnectionGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((ReviewSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** User recommendations for similar media */
    recommendations?: (RecommendationConnectionGenqlSelection & { __args?: {sort?: ((RecommendationSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    stats?: MediaStatsGenqlSelection
    /** The url for the media page on the AniList website */
    siteUrl?: boolean | number
    /** If the media should have forum thread automatically created for it on airing episode release */
    autoCreateForumThread?: boolean | number
    /** If the media is blocked from being recommended to/from */
    isRecommendationBlocked?: boolean | number
    /** If the media is blocked from being reviewed */
    isReviewBlocked?: boolean | number
    /** Notes for site moderators */
    modNotes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The official titles of the media in various languages */
export interface MediaTitleGenqlSelection{
    /** The romanization of the native language title */
    romaji?: { __args: {stylised?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The official english title */
    english?: { __args: {stylised?: (Scalars['Boolean'] | null)} } | boolean | number
    /** Official title in it's native language */
    native?: { __args: {stylised?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
    userPreferred?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Date object that allows for incomplete date values (fuzzy) */
export interface FuzzyDateGenqlSelection{
    /** Numeric Year (2017) */
    year?: boolean | number
    /** Numeric Month (3) */
    month?: boolean | number
    /** Numeric Day (24) */
    day?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Media trailer or advertisement */
export interface MediaTrailerGenqlSelection{
    /** The trailer video id */
    id?: boolean | number
    /** The site the video is hosted by (Currently either youtube or dailymotion) */
    site?: boolean | number
    /** The url for the thumbnail image of the video */
    thumbnail?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaCoverImageGenqlSelection{
    /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
    extraLarge?: boolean | number
    /** The cover image url of the media at a large size */
    large?: boolean | number
    /** The cover image url of the media at medium size */
    medium?: boolean | number
    /** Average #hex color of cover image */
    color?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A tag that describes a theme or element of the media */
export interface MediaTagGenqlSelection{
    /** The id of the tag */
    id?: boolean | number
    /** The name of the tag */
    name?: boolean | number
    /** A general description of the tag */
    description?: boolean | number
    /** The categories of tags this tag belongs to */
    category?: boolean | number
    /** The relevance ranking of the tag out of the 100 for this media */
    rank?: boolean | number
    /** If the tag could be a spoiler for any media */
    isGeneralSpoiler?: boolean | number
    /** If the tag is a spoiler for this media */
    isMediaSpoiler?: boolean | number
    /** If the tag is only for adult 18+ media */
    isAdult?: boolean | number
    /** The user who submitted the tag */
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CharacterConnectionGenqlSelection{
    edges?: CharacterEdgeGenqlSelection
    nodes?: CharacterGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Character connection edge */
export interface CharacterEdgeGenqlSelection{
    node?: CharacterGenqlSelection
    /** The id of the connection */
    id?: boolean | number
    /** The characters role in the media */
    role?: boolean | number
    /** Media specific character name */
    name?: boolean | number
    /** The voice actors of the character */
    voiceActors?: (StaffGenqlSelection & { __args?: {language?: (StaffLanguage | null), sort?: ((StaffSort | null)[] | null)} })
    /** The voice actors of the character with role date */
    voiceActorRoles?: (StaffRoleTypeGenqlSelection & { __args?: {language?: (StaffLanguage | null), sort?: ((StaffSort | null)[] | null)} })
    /** The media the character is in */
    media?: MediaGenqlSelection
    /** The order the character should be displayed from the users favourites */
    favouriteOrder?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A character that features in an anime or manga */
export interface CharacterGenqlSelection{
    /** The id of the character */
    id?: boolean | number
    /** The names of the character */
    name?: CharacterNameGenqlSelection
    /** Character images */
    image?: CharacterImageGenqlSelection
    /** A general description of the character */
    description?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The character's gender. Usually Male, Female, or Non-binary but can be any string. */
    gender?: boolean | number
    /** The character's birth date */
    dateOfBirth?: FuzzyDateGenqlSelection
    /** The character's age. Note this is a string, not an int, it may contain further text and additional ages. */
    age?: boolean | number
    /** The characters blood type */
    bloodType?: boolean | number
    /** If the character is marked as favourite by the currently authenticated user */
    isFavourite?: boolean | number
    /** If the character is blocked from being added to favourites */
    isFavouriteBlocked?: boolean | number
    /** The url for the character page on the AniList website */
    siteUrl?: boolean | number
    /** Media that includes the character */
    media?: (MediaConnectionGenqlSelection & { __args?: {sort?: ((MediaSort | null)[] | null), type?: (MediaType | null), onList?: (Scalars['Boolean'] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** @deprecated No data available */
    updatedAt?: boolean | number
    /** The amount of user's who have favourited the character */
    favourites?: boolean | number
    /** Notes for site moderators */
    modNotes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The names of the character */
export interface CharacterNameGenqlSelection{
    /** The character's given name */
    first?: boolean | number
    /** The character's middle name */
    middle?: boolean | number
    /** The character's surname */
    last?: boolean | number
    /** The character's first and last name */
    full?: boolean | number
    /** The character's full name in their native language */
    native?: boolean | number
    /** Other names the character might be referred to as */
    alternative?: boolean | number
    /** Other names the character might be referred to as but are spoilers */
    alternativeSpoiler?: boolean | number
    /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
    userPreferred?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CharacterImageGenqlSelection{
    /** The character's image of media at its largest size */
    large?: boolean | number
    /** The character's image of media at medium size */
    medium?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Voice actors or production staff */
export interface StaffGenqlSelection{
    /** The id of the staff member */
    id?: boolean | number
    /** The names of the staff member */
    name?: StaffNameGenqlSelection
    /**
     * @deprecated Replaced with languageV2
     * The primary language the staff member dub's in
     */
    language?: boolean | number
    /** The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu */
    languageV2?: boolean | number
    /** The staff images */
    image?: StaffImageGenqlSelection
    /** A general description of the staff member */
    description?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The person's primary occupations */
    primaryOccupations?: boolean | number
    /** The staff's gender. Usually Male, Female, or Non-binary but can be any string. */
    gender?: boolean | number
    dateOfBirth?: FuzzyDateGenqlSelection
    dateOfDeath?: FuzzyDateGenqlSelection
    /** The person's age in years */
    age?: boolean | number
    /** [startYear, endYear] (If the 2nd value is not present staff is still active) */
    yearsActive?: boolean | number
    /** The persons birthplace or hometown */
    homeTown?: boolean | number
    /** The persons blood type */
    bloodType?: boolean | number
    /** If the staff member is marked as favourite by the currently authenticated user */
    isFavourite?: boolean | number
    /** If the staff member is blocked from being added to favourites */
    isFavouriteBlocked?: boolean | number
    /** The url for the staff page on the AniList website */
    siteUrl?: boolean | number
    /** Media where the staff member has a production role */
    staffMedia?: (MediaConnectionGenqlSelection & { __args?: {sort?: ((MediaSort | null)[] | null), type?: (MediaType | null), onList?: (Scalars['Boolean'] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** Characters voiced by the actor */
    characters?: (CharacterConnectionGenqlSelection & { __args?: {sort?: ((CharacterSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** Media the actor voiced characters in. (Same data as characters with media as node instead of characters) */
    characterMedia?: (MediaConnectionGenqlSelection & { __args?: {sort?: ((MediaSort | null)[] | null), onList?: (Scalars['Boolean'] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** @deprecated No data available */
    updatedAt?: boolean | number
    /** Staff member that the submission is referencing */
    staff?: StaffGenqlSelection
    /** Submitter for the submission */
    submitter?: UserGenqlSelection
    /** Status of the submission */
    submissionStatus?: boolean | number
    /** Inner details of submission status */
    submissionNotes?: boolean | number
    /** The amount of user's who have favourited the staff member */
    favourites?: boolean | number
    /** Notes for site moderators */
    modNotes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The names of the staff member */
export interface StaffNameGenqlSelection{
    /** The person's given name */
    first?: boolean | number
    /** The person's middle name */
    middle?: boolean | number
    /** The person's surname */
    last?: boolean | number
    /** The person's first and last name */
    full?: boolean | number
    /** The person's full name in their native language */
    native?: boolean | number
    /** Other names the staff member might be referred to as (pen names) */
    alternative?: boolean | number
    /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
    userPreferred?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StaffImageGenqlSelection{
    /** The person's image of media at its largest size */
    large?: boolean | number
    /** The person's image of media at medium size */
    medium?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Voice actor role for a character */
export interface StaffRoleTypeGenqlSelection{
    /** The voice actors of the character */
    voiceActor?: StaffGenqlSelection
    /** Notes regarding the VA's role for the character */
    roleNotes?: boolean | number
    /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
    dubGroup?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StaffConnectionGenqlSelection{
    edges?: StaffEdgeGenqlSelection
    nodes?: StaffGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Staff connection edge */
export interface StaffEdgeGenqlSelection{
    node?: StaffGenqlSelection
    /** The id of the connection */
    id?: boolean | number
    /** The role of the staff member in the production of the media */
    role?: boolean | number
    /** The order the staff should be displayed from the users favourites */
    favouriteOrder?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StudioConnectionGenqlSelection{
    edges?: StudioEdgeGenqlSelection
    nodes?: StudioGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Studio connection edge */
export interface StudioEdgeGenqlSelection{
    node?: StudioGenqlSelection
    /** The id of the connection */
    id?: boolean | number
    /** If the studio is the main animation studio of the anime */
    isMain?: boolean | number
    /** The order the character should be displayed from the users favourites */
    favouriteOrder?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Animation or production company */
export interface StudioGenqlSelection{
    /** The id of the studio */
    id?: boolean | number
    /** The name of the studio */
    name?: boolean | number
    /** If the studio is an animation studio or a different kind of company */
    isAnimationStudio?: boolean | number
    /** The media the studio has worked on */
    media?: (MediaConnectionGenqlSelection & { __args?: {
    /** The order the results will be returned in */
    sort?: ((MediaSort | null)[] | null), 
    /** If the studio was the primary animation studio of the media */
    isMain?: (Scalars['Boolean'] | null), onList?: (Scalars['Boolean'] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    /** The url for the studio page on the AniList website */
    siteUrl?: boolean | number
    /** If the studio is marked as favourite by the currently authenticated user */
    isFavourite?: boolean | number
    /** The amount of user's who have favourited the studio */
    favourites?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate. */
export interface AiringScheduleGenqlSelection{
    /** The id of the airing schedule item */
    id?: boolean | number
    /** The time the episode airs at */
    airingAt?: boolean | number
    /** Seconds until episode starts airing */
    timeUntilAiring?: boolean | number
    /** The airing episode number */
    episode?: boolean | number
    /** The associate media id of the airing episode */
    mediaId?: boolean | number
    /** The associate media of the airing episode */
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AiringScheduleConnectionGenqlSelection{
    edges?: AiringScheduleEdgeGenqlSelection
    nodes?: AiringScheduleGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** AiringSchedule connection edge */
export interface AiringScheduleEdgeGenqlSelection{
    node?: AiringScheduleGenqlSelection
    /** The id of the connection */
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaTrendConnectionGenqlSelection{
    edges?: MediaTrendEdgeGenqlSelection
    nodes?: MediaTrendGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Media trend connection edge */
export interface MediaTrendEdgeGenqlSelection{
    node?: MediaTrendGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Daily media statistics */
export interface MediaTrendGenqlSelection{
    /** The id of the tag */
    mediaId?: boolean | number
    /** The day the data was recorded (timestamp) */
    date?: boolean | number
    /** The amount of media activity on the day */
    trending?: boolean | number
    /** A weighted average score of all the user's scores of the media */
    averageScore?: boolean | number
    /** The number of users with the media on their list */
    popularity?: boolean | number
    /** The number of users with watching/reading the media */
    inProgress?: boolean | number
    /** If the media was being released at this time */
    releasing?: boolean | number
    /** The episode number of the anime released on this day */
    episode?: boolean | number
    /** The related media */
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An external link to another site related to the media or staff member */
export interface MediaExternalLinkGenqlSelection{
    /** The id of the external link */
    id?: boolean | number
    /** The url of the external link or base url of link source */
    url?: boolean | number
    /** The links website site name */
    site?: boolean | number
    /** The links website site id */
    siteId?: boolean | number
    type?: boolean | number
    /** Language the site content is in. See Staff language field for values. */
    language?: boolean | number
    color?: boolean | number
    /** The icon image url of the site. Not available for all links. Transparent PNG 64x64 */
    icon?: boolean | number
    notes?: boolean | number
    isDisabled?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Data and links to legal streaming episodes on external sites */
export interface MediaStreamingEpisodeGenqlSelection{
    /** Title of the episode */
    title?: boolean | number
    /** Url of episode image thumbnail */
    thumbnail?: boolean | number
    /** The url of the episode */
    url?: boolean | number
    /** The site location of the streaming episodes */
    site?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The ranking of a media in a particular time span and format compared to other media */
export interface MediaRankGenqlSelection{
    /** The id of the rank */
    id?: boolean | number
    /** The numerical rank of the media */
    rank?: boolean | number
    /** The type of ranking */
    type?: boolean | number
    /** The format the media is ranked within */
    format?: boolean | number
    /** The year the media is ranked within */
    year?: boolean | number
    /** The season the media is ranked within */
    season?: boolean | number
    /** If the ranking is based on all time instead of a season/year */
    allTime?: boolean | number
    /** String that gives context to the ranking type and time span */
    context?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** List of anime or manga */
export interface MediaListGenqlSelection{
    /** The id of the list entry */
    id?: boolean | number
    /** The id of the user owner of the list entry */
    userId?: boolean | number
    /** The id of the media */
    mediaId?: boolean | number
    /** The watching/reading status */
    status?: boolean | number
    /** The score of the entry */
    score?: { __args: {
    /** Force the score to be returned in the provided format type. */
    format?: (ScoreFormat | null)} } | boolean | number
    /** The amount of episodes/chapters consumed by the user */
    progress?: boolean | number
    /** The amount of volumes read by the user */
    progressVolumes?: boolean | number
    /** The amount of times the user has rewatched/read the media */
    repeat?: boolean | number
    /** Priority of planning */
    priority?: boolean | number
    /** If the entry should only be visible to authenticated user */
    private?: boolean | number
    /** Text notes */
    notes?: boolean | number
    /** If the entry shown be hidden from non-custom lists */
    hiddenFromStatusLists?: boolean | number
    /** Map of booleans for which custom lists the entry are in */
    customLists?: { __args: {
    /** Change return structure to an array of objects */
    asArray?: (Scalars['Boolean'] | null)} } | boolean | number
    /** Map of advanced scores with name keys */
    advancedScores?: boolean | number
    /** When the entry was started by the user */
    startedAt?: FuzzyDateGenqlSelection
    /** When the entry was completed by the user */
    completedAt?: FuzzyDateGenqlSelection
    /** When the entry data was last updated */
    updatedAt?: boolean | number
    /** When the entry data was created */
    createdAt?: boolean | number
    media?: MediaGenqlSelection
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReviewConnectionGenqlSelection{
    edges?: ReviewEdgeGenqlSelection
    nodes?: ReviewGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Review connection edge */
export interface ReviewEdgeGenqlSelection{
    node?: ReviewGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Review that features in an anime or manga */
export interface ReviewGenqlSelection{
    /** The id of the review */
    id?: boolean | number
    /** The id of the review's creator */
    userId?: boolean | number
    /** The id of the review's media */
    mediaId?: boolean | number
    /** For which type of media the review is for */
    mediaType?: boolean | number
    /** A short summary of the review */
    summary?: boolean | number
    /** The main review body text */
    body?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The total user rating of the review */
    rating?: boolean | number
    /** The amount of user ratings of the review */
    ratingAmount?: boolean | number
    /** The rating of the review by currently authenticated user */
    userRating?: boolean | number
    /** The review score of the media */
    score?: boolean | number
    /** If the review is not yet publicly published and is only viewable by creator */
    private?: boolean | number
    /** The url for the review page on the AniList website */
    siteUrl?: boolean | number
    /** The time of the thread creation */
    createdAt?: boolean | number
    /** The time of the thread last update */
    updatedAt?: boolean | number
    /** The creator of the review */
    user?: UserGenqlSelection
    /** The media the review is of */
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecommendationConnectionGenqlSelection{
    edges?: RecommendationEdgeGenqlSelection
    nodes?: RecommendationGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Recommendation connection edge */
export interface RecommendationEdgeGenqlSelection{
    node?: RecommendationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Media recommendation */
export interface RecommendationGenqlSelection{
    /** The id of the recommendation */
    id?: boolean | number
    /** Users rating of the recommendation */
    rating?: boolean | number
    /** The rating of the recommendation by currently authenticated user */
    userRating?: boolean | number
    /** The media the recommendation is from */
    media?: MediaGenqlSelection
    /** The recommended media */
    mediaRecommendation?: MediaGenqlSelection
    /** The user that first created the recommendation */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A media's statistics */
export interface MediaStatsGenqlSelection{
    scoreDistribution?: ScoreDistributionGenqlSelection
    statusDistribution?: StatusDistributionGenqlSelection
    /** @deprecated Replaced by MediaTrends */
    airingProgression?: AiringProgressionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's list score distribution. */
export interface ScoreDistributionGenqlSelection{
    score?: boolean | number
    /** The amount of list entries with this score */
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The distribution of the watching/reading status of media or a user's list */
export interface StatusDistributionGenqlSelection{
    /** The day the activity took place (Unix timestamp) */
    status?: boolean | number
    /** The amount of entries with this status */
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Score & Watcher stats for airing anime by episode and mid-week */
export interface AiringProgressionGenqlSelection{
    /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
    episode?: boolean | number
    /** The average score for the media */
    score?: boolean | number
    /** The amount of users watching the anime */
    watching?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserStatisticTypesGenqlSelection{
    anime?: UserStatisticsGenqlSelection
    manga?: UserStatisticsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserStatisticsGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    standardDeviation?: boolean | number
    minutesWatched?: boolean | number
    episodesWatched?: boolean | number
    chaptersRead?: boolean | number
    volumesRead?: boolean | number
    formats?: (UserFormatStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    statuses?: (UserStatusStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    scores?: (UserScoreStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    lengths?: (UserLengthStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    releaseYears?: (UserReleaseYearStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    startYears?: (UserStartYearStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    genres?: (UserGenreStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    tags?: (UserTagStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    countries?: (UserCountryStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    voiceActors?: (UserVoiceActorStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    staff?: (UserStaffStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    studios?: (UserStudioStatisticGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), sort?: ((UserStatisticsSort | null)[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserFormatStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    format?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserStatusStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserScoreStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    score?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserLengthStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    length?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserReleaseYearStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    releaseYear?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserStartYearStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    startYear?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenreStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    genre?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserTagStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    tag?: MediaTagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserCountryStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    country?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserVoiceActorStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    voiceActor?: StaffGenqlSelection
    characterIds?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserStaffStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    staff?: StaffGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserStudioStatisticGenqlSelection{
    count?: boolean | number
    meanScore?: boolean | number
    minutesWatched?: boolean | number
    chaptersRead?: boolean | number
    mediaIds?: boolean | number
    studio?: StudioGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's statistics */
export interface UserStatsGenqlSelection{
    /** The amount of anime the user has watched in minutes */
    watchedTime?: boolean | number
    /** The amount of manga chapters the user has read */
    chaptersRead?: boolean | number
    activityHistory?: UserActivityHistoryGenqlSelection
    animeStatusDistribution?: StatusDistributionGenqlSelection
    mangaStatusDistribution?: StatusDistributionGenqlSelection
    animeScoreDistribution?: ScoreDistributionGenqlSelection
    mangaScoreDistribution?: ScoreDistributionGenqlSelection
    animeListScores?: ListScoreStatsGenqlSelection
    mangaListScores?: ListScoreStatsGenqlSelection
    favouredGenresOverview?: GenreStatsGenqlSelection
    favouredGenres?: GenreStatsGenqlSelection
    favouredTags?: TagStatsGenqlSelection
    favouredActors?: StaffStatsGenqlSelection
    favouredStaff?: StaffStatsGenqlSelection
    favouredStudios?: StudioStatsGenqlSelection
    favouredYears?: YearStatsGenqlSelection
    favouredFormats?: FormatStatsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's activity history stats. */
export interface UserActivityHistoryGenqlSelection{
    /** The day the activity took place (Unix timestamp) */
    date?: boolean | number
    /** The amount of activity on the day */
    amount?: boolean | number
    /** The level of activity represented on a 1-10 scale */
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's list score statistics */
export interface ListScoreStatsGenqlSelection{
    meanScore?: boolean | number
    standardDeviation?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's genre statistics */
export interface GenreStatsGenqlSelection{
    genre?: boolean | number
    amount?: boolean | number
    meanScore?: boolean | number
    /** The amount of time in minutes the genre has been watched by the user */
    timeWatched?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's tag statistics */
export interface TagStatsGenqlSelection{
    tag?: MediaTagGenqlSelection
    amount?: boolean | number
    meanScore?: boolean | number
    /** The amount of time in minutes the tag has been watched by the user */
    timeWatched?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's staff statistics */
export interface StaffStatsGenqlSelection{
    staff?: StaffGenqlSelection
    amount?: boolean | number
    meanScore?: boolean | number
    /** The amount of time in minutes the staff member has been watched by the user */
    timeWatched?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's studio statistics */
export interface StudioStatsGenqlSelection{
    studio?: StudioGenqlSelection
    amount?: boolean | number
    meanScore?: boolean | number
    /** The amount of time in minutes the studio's works have been watched by the user */
    timeWatched?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's year statistics */
export interface YearStatsGenqlSelection{
    year?: boolean | number
    amount?: boolean | number
    meanScore?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User's format statistics */
export interface FormatStatsGenqlSelection{
    format?: boolean | number
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user's previous name */
export interface UserPreviousNameGenqlSelection{
    /** A previous name of the user. */
    name?: boolean | number
    /** When the user first changed from this name. */
    createdAt?: boolean | number
    /** When the user most recently changed from this name. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification union type */
export interface NotificationUnionGenqlSelection{
    on_AiringNotification?:AiringNotificationGenqlSelection,
    on_FollowingNotification?:FollowingNotificationGenqlSelection,
    on_ActivityMessageNotification?:ActivityMessageNotificationGenqlSelection,
    on_ActivityMentionNotification?:ActivityMentionNotificationGenqlSelection,
    on_ActivityReplyNotification?:ActivityReplyNotificationGenqlSelection,
    on_ActivityReplySubscribedNotification?:ActivityReplySubscribedNotificationGenqlSelection,
    on_ActivityLikeNotification?:ActivityLikeNotificationGenqlSelection,
    on_ActivityReplyLikeNotification?:ActivityReplyLikeNotificationGenqlSelection,
    on_ThreadCommentMentionNotification?:ThreadCommentMentionNotificationGenqlSelection,
    on_ThreadCommentReplyNotification?:ThreadCommentReplyNotificationGenqlSelection,
    on_ThreadCommentSubscribedNotification?:ThreadCommentSubscribedNotificationGenqlSelection,
    on_ThreadCommentLikeNotification?:ThreadCommentLikeNotificationGenqlSelection,
    on_ThreadLikeNotification?:ThreadLikeNotificationGenqlSelection,
    on_RelatedMediaAdditionNotification?:RelatedMediaAdditionNotificationGenqlSelection,
    on_MediaDataChangeNotification?:MediaDataChangeNotificationGenqlSelection,
    on_MediaMergeNotification?:MediaMergeNotificationGenqlSelection,
    on_MediaDeletionNotification?:MediaDeletionNotificationGenqlSelection,
    __typename?: boolean | number
}


/** Notification for when an episode of anime airs */
export interface AiringNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the aired anime */
    animeId?: boolean | number
    /** The episode number that just aired */
    episode?: boolean | number
    /** The notification context text */
    contexts?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The associated media of the airing schedule */
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when the authenticated user is followed by another user */
export interface FollowingNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who followed the authenticated user */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The liked activity */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a user is send an activity message */
export interface ActivityMessageNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The if of the user who send the message */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the activity message */
    activityId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The message activity */
    message?: MessageActivityGenqlSelection
    /** The user who sent the message */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User message activity */
export interface MessageActivityGenqlSelection{
    /** The id of the activity */
    id?: boolean | number
    /** The user id of the activity's recipient */
    recipientId?: boolean | number
    /** The user id of the activity's sender */
    messengerId?: boolean | number
    /** The type of the activity */
    type?: boolean | number
    /** The number of activity replies */
    replyCount?: boolean | number
    /** The message text (Markdown) */
    message?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** If the activity is locked and can receive replies */
    isLocked?: boolean | number
    /** If the currently authenticated user is subscribed to the activity */
    isSubscribed?: boolean | number
    /** The amount of likes the activity has */
    likeCount?: boolean | number
    /** If the currently authenticated user liked the activity */
    isLiked?: boolean | number
    /** If the message is private and only viewable to the sender and recipients */
    isPrivate?: boolean | number
    /** The url for the activity page on the AniList website */
    siteUrl?: boolean | number
    /** The time the activity was created at */
    createdAt?: boolean | number
    /** The user who the activity message was sent to */
    recipient?: UserGenqlSelection
    /** The user who sent the activity message */
    messenger?: UserGenqlSelection
    /** The written replies to the activity */
    replies?: ActivityReplyGenqlSelection
    /** The users who liked the activity */
    likes?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Replay to an activity item */
export interface ActivityReplyGenqlSelection{
    /** The id of the reply */
    id?: boolean | number
    /** The id of the replies creator */
    userId?: boolean | number
    /** The id of the parent activity */
    activityId?: boolean | number
    /** The reply text */
    text?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The amount of likes the reply has */
    likeCount?: boolean | number
    /** If the currently authenticated user liked the reply */
    isLiked?: boolean | number
    /** The time the reply was created at */
    createdAt?: boolean | number
    /** The user who created reply */
    user?: UserGenqlSelection
    /** The users who liked the reply */
    likes?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when authenticated user is @ mentioned in activity or reply */
export interface ActivityMentionNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who mentioned the authenticated user */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the activity where mentioned */
    activityId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The liked activity */
    activity?: ActivityUnionGenqlSelection
    /** The user who mentioned the authenticated user */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Activity union type */
export interface ActivityUnionGenqlSelection{
    on_TextActivity?:TextActivityGenqlSelection,
    on_ListActivity?:ListActivityGenqlSelection,
    on_MessageActivity?:MessageActivityGenqlSelection,
    __typename?: boolean | number
}


/** User text activity */
export interface TextActivityGenqlSelection{
    /** The id of the activity */
    id?: boolean | number
    /** The user id of the activity's creator */
    userId?: boolean | number
    /** The type of activity */
    type?: boolean | number
    /** The number of activity replies */
    replyCount?: boolean | number
    /** The status text (Markdown) */
    text?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The url for the activity page on the AniList website */
    siteUrl?: boolean | number
    /** If the activity is locked and can receive replies */
    isLocked?: boolean | number
    /** If the currently authenticated user is subscribed to the activity */
    isSubscribed?: boolean | number
    /** The amount of likes the activity has */
    likeCount?: boolean | number
    /** If the currently authenticated user liked the activity */
    isLiked?: boolean | number
    /** If the activity is pinned to the top of the users activity feed */
    isPinned?: boolean | number
    /** The time the activity was created at */
    createdAt?: boolean | number
    /** The user who created the activity */
    user?: UserGenqlSelection
    /** The written replies to the activity */
    replies?: ActivityReplyGenqlSelection
    /** The users who liked the activity */
    likes?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User list activity (anime & manga updates) */
export interface ListActivityGenqlSelection{
    /** The id of the activity */
    id?: boolean | number
    /** The user id of the activity's creator */
    userId?: boolean | number
    /** The type of activity */
    type?: boolean | number
    /** The number of activity replies */
    replyCount?: boolean | number
    /** The list item's textual status */
    status?: boolean | number
    /** The list progress made */
    progress?: boolean | number
    /** If the activity is locked and can receive replies */
    isLocked?: boolean | number
    /** If the currently authenticated user is subscribed to the activity */
    isSubscribed?: boolean | number
    /** The amount of likes the activity has */
    likeCount?: boolean | number
    /** If the currently authenticated user liked the activity */
    isLiked?: boolean | number
    /** If the activity is pinned to the top of the users activity feed */
    isPinned?: boolean | number
    /** The url for the activity page on the AniList website */
    siteUrl?: boolean | number
    /** The time the activity was created at */
    createdAt?: boolean | number
    /** The owner of the activity */
    user?: UserGenqlSelection
    /** The associated media to the activity update */
    media?: MediaGenqlSelection
    /** The written replies to the activity */
    replies?: ActivityReplyGenqlSelection
    /** The users who liked the activity */
    likes?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a user replies to the authenticated users activity */
export interface ActivityReplyNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who replied to the activity */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the activity which was replied too */
    activityId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The liked activity */
    activity?: ActivityUnionGenqlSelection
    /** The user who replied to the activity */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a user replies to activity the authenticated user has replied to */
export interface ActivityReplySubscribedNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who replied to the activity */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the activity which was replied too */
    activityId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The liked activity */
    activity?: ActivityUnionGenqlSelection
    /** The user who replied to the activity */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a activity is liked */
export interface ActivityLikeNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who liked to the activity */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the activity which was liked */
    activityId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The liked activity */
    activity?: ActivityUnionGenqlSelection
    /** The user who liked the activity */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a activity reply is liked */
export interface ActivityReplyLikeNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who liked to the activity reply */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the activity where the reply which was liked */
    activityId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The liked activity */
    activity?: ActivityUnionGenqlSelection
    /** The user who liked the activity reply */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export interface ThreadCommentMentionNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who mentioned the authenticated user */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the comment where mentioned */
    commentId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The thread that the relevant comment belongs to */
    thread?: ThreadGenqlSelection
    /** The thread comment that included the @ mention */
    comment?: ThreadCommentGenqlSelection
    /** The user who mentioned the authenticated user */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Forum Thread */
export interface ThreadGenqlSelection{
    /** The id of the thread */
    id?: boolean | number
    /** The title of the thread */
    title?: boolean | number
    /** The text body of the thread (Markdown) */
    body?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The id of the thread owner user */
    userId?: boolean | number
    /** The id of the user who most recently commented on the thread */
    replyUserId?: boolean | number
    /** The id of the most recent comment on the thread */
    replyCommentId?: boolean | number
    /** The number of comments on the thread */
    replyCount?: boolean | number
    /** The number of times users have viewed the thread */
    viewCount?: boolean | number
    /** If the thread is locked and can receive comments */
    isLocked?: boolean | number
    /** If the thread is stickied and should be displayed at the top of the page */
    isSticky?: boolean | number
    /** If the currently authenticated user is subscribed to the thread */
    isSubscribed?: boolean | number
    /** The amount of likes the thread has */
    likeCount?: boolean | number
    /** If the currently authenticated user liked the thread */
    isLiked?: boolean | number
    /** The time of the last reply */
    repliedAt?: boolean | number
    /** The time of the thread creation */
    createdAt?: boolean | number
    /** The time of the thread last update */
    updatedAt?: boolean | number
    /** The owner of the thread */
    user?: UserGenqlSelection
    /** The user to last reply to the thread */
    replyUser?: UserGenqlSelection
    /** The users who liked the thread */
    likes?: UserGenqlSelection
    /** The url for the thread page on the AniList website */
    siteUrl?: boolean | number
    /** The categories of the thread */
    categories?: ThreadCategoryGenqlSelection
    /** The media categories of the thread */
    mediaCategories?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A forum thread category */
export interface ThreadCategoryGenqlSelection{
    /** The id of the category */
    id?: boolean | number
    /** The name of the category */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Forum Thread Comment */
export interface ThreadCommentGenqlSelection{
    /** The id of the comment */
    id?: boolean | number
    /** The user id of the comment's owner */
    userId?: boolean | number
    /** The id of thread the comment belongs to */
    threadId?: boolean | number
    /** The text content of the comment (Markdown) */
    comment?: { __args: {
    /** Return the string in pre-parsed html instead of markdown */
    asHtml?: (Scalars['Boolean'] | null)} } | boolean | number
    /** The amount of likes the comment has */
    likeCount?: boolean | number
    /** If the currently authenticated user liked the comment */
    isLiked?: boolean | number
    /** The url for the comment page on the AniList website */
    siteUrl?: boolean | number
    /** The time of the comments creation */
    createdAt?: boolean | number
    /** The time of the comments last update */
    updatedAt?: boolean | number
    /** The thread the comment belongs to */
    thread?: ThreadGenqlSelection
    /** The user who created the comment */
    user?: UserGenqlSelection
    /** The users who liked the comment */
    likes?: UserGenqlSelection
    /** The comment's child reply comments */
    childComments?: boolean | number
    /** If the comment tree is locked and may not receive replies or edits */
    isLocked?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a user replies to your forum thread comment */
export interface ThreadCommentReplyNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who create the comment reply */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the reply comment */
    commentId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The thread that the relevant comment belongs to */
    thread?: ThreadGenqlSelection
    /** The reply thread comment */
    comment?: ThreadCommentGenqlSelection
    /** The user who replied to the activity */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a user replies to a subscribed forum thread */
export interface ThreadCommentSubscribedNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who commented on the thread */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the new comment in the subscribed thread */
    commentId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The thread that the relevant comment belongs to */
    thread?: ThreadGenqlSelection
    /** The reply thread comment */
    comment?: ThreadCommentGenqlSelection
    /** The user who replied to the subscribed thread */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a thread comment is liked */
export interface ThreadCommentLikeNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who liked to the activity */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the activity which was liked */
    commentId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The thread that the relevant comment belongs to */
    thread?: ThreadGenqlSelection
    /** The thread comment that was liked */
    comment?: ThreadCommentGenqlSelection
    /** The user who liked the activity */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a thread is liked */
export interface ThreadLikeNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The id of the user who liked to the activity */
    userId?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the thread which was liked */
    threadId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The thread that the relevant comment belongs to */
    thread?: ThreadGenqlSelection
    /** The liked thread comment */
    comment?: ThreadCommentGenqlSelection
    /** The user who liked the activity */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when new media is added to the site */
export interface RelatedMediaAdditionNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the new media */
    mediaId?: boolean | number
    /** The notification context text */
    context?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The associated media of the airing schedule */
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a media entry's data was changed in a significant way impacting users' list tracking */
export interface MediaDataChangeNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the media that received data changes */
    mediaId?: boolean | number
    /** The reason for the media data change */
    context?: boolean | number
    /** The reason for the media data change */
    reason?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The media that received data changes */
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a media entry is merged into another for a user who had it on their list */
export interface MediaMergeNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The id of the media that was merged into */
    mediaId?: boolean | number
    /** The title of the deleted media */
    deletedMediaTitles?: boolean | number
    /** The reason for the media data change */
    context?: boolean | number
    /** The reason for the media merge */
    reason?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    /** The media that was merged into */
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification for when a media tracked in a user's list is deleted from the site */
export interface MediaDeletionNotificationGenqlSelection{
    /** The id of the Notification */
    id?: boolean | number
    /** The type of notification */
    type?: boolean | number
    /** The title of the deleted media */
    deletedMediaTitle?: boolean | number
    /** The reason for the media deletion */
    context?: boolean | number
    /** The reason for the media deletion */
    reason?: boolean | number
    /** The time the notification was created at */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** List of anime or manga */
export interface MediaListCollectionGenqlSelection{
    /** Grouped media list entries */
    lists?: MediaListGroupGenqlSelection
    /** The owner of the list */
    user?: UserGenqlSelection
    /** If there is another chunk */
    hasNextChunk?: boolean | number
    /**
     * @deprecated Not GraphQL spec compliant, use lists field instead.
     * A map of media list entry arrays grouped by status
     */
    statusLists?: (MediaListGenqlSelection & { __args?: {asArray?: (Scalars['Boolean'] | null)} })
    /**
     * @deprecated Not GraphQL spec compliant, use lists field instead.
     * A map of media list entry arrays grouped by custom lists
     */
    customLists?: (MediaListGenqlSelection & { __args?: {asArray?: (Scalars['Boolean'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** List group of anime or manga entries */
export interface MediaListGroupGenqlSelection{
    /** Media list entries */
    entries?: MediaListGenqlSelection
    name?: boolean | number
    isCustomList?: boolean | number
    isSplitCompletedList?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Provides the parsed markdown as html */
export interface ParsedMarkdownGenqlSelection{
    /** The parsed markdown as html */
    html?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AniChartUserGenqlSelection{
    user?: UserGenqlSelection
    settings?: boolean | number
    highlights?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SiteStatisticsGenqlSelection{
    users?: (SiteTrendConnectionGenqlSelection & { __args?: {sort?: ((SiteTrendSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    anime?: (SiteTrendConnectionGenqlSelection & { __args?: {sort?: ((SiteTrendSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    manga?: (SiteTrendConnectionGenqlSelection & { __args?: {sort?: ((SiteTrendSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    characters?: (SiteTrendConnectionGenqlSelection & { __args?: {sort?: ((SiteTrendSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    staff?: (SiteTrendConnectionGenqlSelection & { __args?: {sort?: ((SiteTrendSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    studios?: (SiteTrendConnectionGenqlSelection & { __args?: {sort?: ((SiteTrendSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    reviews?: (SiteTrendConnectionGenqlSelection & { __args?: {sort?: ((SiteTrendSort | null)[] | null), 
    /** The page */
    page?: (Scalars['Int'] | null), 
    /** The amount of entries per page, max 25 */
    perPage?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SiteTrendConnectionGenqlSelection{
    edges?: SiteTrendEdgeGenqlSelection
    nodes?: SiteTrendGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Site trend connection edge */
export interface SiteTrendEdgeGenqlSelection{
    node?: SiteTrendGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Daily site statistics */
export interface SiteTrendGenqlSelection{
    /** The day the data was recorded (timestamp) */
    date?: boolean | number
    count?: boolean | number
    /** The change from yesterday */
    change?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    UpdateUser?: (UserGenqlSelection & { __args: {
    /** User's about/bio text */
    about?: (Scalars['String'] | null), 
    /** User's title language */
    titleLanguage?: (UserTitleLanguage | null), 
    /** If the user should see media marked as adult-only */
    displayAdultContent?: (Scalars['Boolean'] | null), 
    /** If the user should get notifications when a show they are watching aires */
    airingNotifications?: (Scalars['Boolean'] | null), 
    /** The user's list scoring system */
    scoreFormat?: (ScoreFormat | null), 
    /** The user's default list order */
    rowOrder?: (Scalars['String'] | null), 
    /** Profile highlight color */
    profileColor?: (Scalars['String'] | null), 
    /** Profile highlight color */
    donatorBadge?: (Scalars['String'] | null), 
    /** Notification options */
    notificationOptions?: ((NotificationOptionInput | null)[] | null), 
    /** Timezone offset format: -?HH:MM */
    timezone?: (Scalars['String'] | null), 
    /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
    activityMergeTime?: (Scalars['Int'] | null), 
    /** The user's anime list options */
    animeListOptions?: (MediaListOptionsInput | null), 
    /** The user's anime list options */
    mangaListOptions?: (MediaListOptionsInput | null), 
    /** The language the user wants to see staff and character names in */
    staffNameLanguage?: (UserStaffNameLanguage | null), 
    /** Only allow messages from other users the user follows */
    restrictMessagesToFollowing?: (Scalars['Boolean'] | null), disabledListActivity?: ((ListActivityOptionInput | null)[] | null)} })
    /** Create or update a media list entry */
    SaveMediaListEntry?: (MediaListGenqlSelection & { __args?: {
    /** The list entry id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** The id of the media the entry is of */
    mediaId?: (Scalars['Int'] | null), 
    /** The watching/reading status */
    status?: (MediaListStatus | null), 
    /** The score of the media in the user's chosen scoring method */
    score?: (Scalars['Float'] | null), 
    /** The score of the media in 100 point */
    scoreRaw?: (Scalars['Int'] | null), 
    /** The amount of episodes/chapters consumed by the user */
    progress?: (Scalars['Int'] | null), 
    /** The amount of volumes read by the user */
    progressVolumes?: (Scalars['Int'] | null), 
    /** The amount of times the user has rewatched/read the media */
    repeat?: (Scalars['Int'] | null), 
    /** Priority of planning */
    priority?: (Scalars['Int'] | null), 
    /** If the entry should only be visible to authenticated user */
    private?: (Scalars['Boolean'] | null), 
    /** Text notes */
    notes?: (Scalars['String'] | null), 
    /** If the entry shown be hidden from non-custom lists */
    hiddenFromStatusLists?: (Scalars['Boolean'] | null), 
    /** Array of custom list names which should be enabled for this entry */
    customLists?: ((Scalars['String'] | null)[] | null), 
    /** Array of advanced scores */
    advancedScores?: ((Scalars['Float'] | null)[] | null), 
    /** When the entry was started by the user */
    startedAt?: (FuzzyDateInput | null), 
    /** When the entry was completed by the user */
    completedAt?: (FuzzyDateInput | null)} })
    /** Update multiple media list entries to the same values */
    UpdateMediaListEntries?: (MediaListGenqlSelection & { __args?: {
    /** The watching/reading status */
    status?: (MediaListStatus | null), 
    /** The score of the media in the user's chosen scoring method */
    score?: (Scalars['Float'] | null), 
    /** The score of the media in 100 point */
    scoreRaw?: (Scalars['Int'] | null), 
    /** The amount of episodes/chapters consumed by the user */
    progress?: (Scalars['Int'] | null), 
    /** The amount of volumes read by the user */
    progressVolumes?: (Scalars['Int'] | null), 
    /** The amount of times the user has rewatched/read the media */
    repeat?: (Scalars['Int'] | null), 
    /** Priority of planning */
    priority?: (Scalars['Int'] | null), 
    /** If the entry should only be visible to authenticated user */
    private?: (Scalars['Boolean'] | null), 
    /** Text notes */
    notes?: (Scalars['String'] | null), 
    /** If the entry shown be hidden from non-custom lists */
    hiddenFromStatusLists?: (Scalars['Boolean'] | null), 
    /** Array of advanced scores */
    advancedScores?: ((Scalars['Float'] | null)[] | null), 
    /** When the entry was started by the user */
    startedAt?: (FuzzyDateInput | null), 
    /** When the entry was completed by the user */
    completedAt?: (FuzzyDateInput | null), 
    /** The list entries ids to update */
    ids?: ((Scalars['Int'] | null)[] | null)} })
    /** Delete a media list entry */
    DeleteMediaListEntry?: (DeletedGenqlSelection & { __args?: {
    /** The id of the media list entry to delete */
    id?: (Scalars['Int'] | null)} })
    /** Delete a custom list and remove the list entries from it */
    DeleteCustomList?: (DeletedGenqlSelection & { __args?: {
    /** The name of the custom list to delete */
    customList?: (Scalars['String'] | null), 
    /** The media list type of the custom list */
    type?: (MediaType | null)} })
    /** Create or update text activity for the currently authenticated user */
    SaveTextActivity?: (TextActivityGenqlSelection & { __args?: {
    /** The activity's id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** The activity text */
    text?: (Scalars['String'] | null), 
    /** If the activity should be locked. (Mod Only) */
    locked?: (Scalars['Boolean'] | null)} })
    /** Create or update message activity for the currently authenticated user */
    SaveMessageActivity?: (MessageActivityGenqlSelection & { __args?: {
    /** The activity id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** The activity message text */
    message?: (Scalars['String'] | null), 
    /** The id of the user the message is being sent to */
    recipientId?: (Scalars['Int'] | null), 
    /** If the activity should be private */
    private?: (Scalars['Boolean'] | null), 
    /** If the activity should be locked. (Mod Only) */
    locked?: (Scalars['Boolean'] | null), 
    /** If the message should be sent from the Moderator account (Mod Only) */
    asMod?: (Scalars['Boolean'] | null)} })
    /** Update list activity (Mod Only) */
    SaveListActivity?: (ListActivityGenqlSelection & { __args?: {
    /** The activity's id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** If the activity should be locked. (Mod Only) */
    locked?: (Scalars['Boolean'] | null)} })
    /** Delete an activity item of the authenticated users */
    DeleteActivity?: (DeletedGenqlSelection & { __args?: {
    /** The id of the activity to delete */
    id?: (Scalars['Int'] | null)} })
    /** Toggle activity to be pinned to the top of the user's activity feed */
    ToggleActivityPin?: (ActivityUnionGenqlSelection & { __args?: {
    /** Toggle activity id to be pinned */
    id?: (Scalars['Int'] | null), 
    /** If the activity should be pinned or unpinned */
    pinned?: (Scalars['Boolean'] | null)} })
    /** Toggle the subscription of an activity item */
    ToggleActivitySubscription?: (ActivityUnionGenqlSelection & { __args?: {
    /** The id of the activity to un/subscribe */
    activityId?: (Scalars['Int'] | null), 
    /** Whether to subscribe or unsubscribe from the activity */
    subscribe?: (Scalars['Boolean'] | null)} })
    /** Create or update an activity reply */
    SaveActivityReply?: (ActivityReplyGenqlSelection & { __args?: {
    /** The activity reply id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** The id of the parent activity being replied to */
    activityId?: (Scalars['Int'] | null), 
    /** The reply text */
    text?: (Scalars['String'] | null), 
    /** If the reply should be sent from the Moderator account (Mod Only) */
    asMod?: (Scalars['Boolean'] | null)} })
    /** Delete an activity reply of the authenticated users */
    DeleteActivityReply?: (DeletedGenqlSelection & { __args?: {
    /** The id of the reply to delete */
    id?: (Scalars['Int'] | null)} })
    /**
     * Add or remove a like from a likeable type.
     *                           Returns all the users who liked the same model
     */
    ToggleLike?: (UserGenqlSelection & { __args?: {
    /** The id of the likeable type */
    id?: (Scalars['Int'] | null), 
    /** The type of model to be un/liked */
    type?: (LikeableType | null)} })
    /** Add or remove a like from a likeable type. */
    ToggleLikeV2?: (LikeableUnionGenqlSelection & { __args?: {
    /** The id of the likeable type */
    id?: (Scalars['Int'] | null), 
    /** The type of model to be un/liked */
    type?: (LikeableType | null)} })
    /** Toggle the un/following of a user */
    ToggleFollow?: (UserGenqlSelection & { __args?: {
    /** The id of the user to un/follow */
    userId?: (Scalars['Int'] | null)} })
    /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
    ToggleFavourite?: (FavouritesGenqlSelection & { __args?: {
    /** The id of the anime to un/favourite */
    animeId?: (Scalars['Int'] | null), 
    /** The id of the manga to un/favourite */
    mangaId?: (Scalars['Int'] | null), 
    /** The id of the character to un/favourite */
    characterId?: (Scalars['Int'] | null), 
    /** The id of the staff to un/favourite */
    staffId?: (Scalars['Int'] | null), 
    /** The id of the studio to un/favourite */
    studioId?: (Scalars['Int'] | null)} })
    /** Update the order favourites are displayed in */
    UpdateFavouriteOrder?: (FavouritesGenqlSelection & { __args?: {
    /** The id of the anime to un/favourite */
    animeIds?: ((Scalars['Int'] | null)[] | null), 
    /** The id of the manga to un/favourite */
    mangaIds?: ((Scalars['Int'] | null)[] | null), 
    /** The id of the character to un/favourite */
    characterIds?: ((Scalars['Int'] | null)[] | null), 
    /** The id of the staff to un/favourite */
    staffIds?: ((Scalars['Int'] | null)[] | null), 
    /** The id of the studio to un/favourite */
    studioIds?: ((Scalars['Int'] | null)[] | null), 
    /** List of integers which the anime should be ordered by (Asc) */
    animeOrder?: ((Scalars['Int'] | null)[] | null), 
    /** List of integers which the manga should be ordered by (Asc) */
    mangaOrder?: ((Scalars['Int'] | null)[] | null), 
    /** List of integers which the character should be ordered by (Asc) */
    characterOrder?: ((Scalars['Int'] | null)[] | null), 
    /** List of integers which the staff should be ordered by (Asc) */
    staffOrder?: ((Scalars['Int'] | null)[] | null), 
    /** List of integers which the studio should be ordered by (Asc) */
    studioOrder?: ((Scalars['Int'] | null)[] | null)} })
    /** Create or update a review */
    SaveReview?: (ReviewGenqlSelection & { __args: {
    /** The review id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** The id of the media the review is of */
    mediaId?: (Scalars['Int'] | null), 
    /** The main review text. Min:2200 characters */
    body?: (Scalars['String'] | null), 
    /** A short summary/preview of the review. Min:20, Max:120 characters */
    summary?: (Scalars['String'] | null), 
    /** A short summary/preview of the review. Min:20, Max:120 characters */
    score?: (Scalars['Int'] | null), 
    /** If the review should only be visible to its creator */
    private?: (Scalars['Boolean'] | null)} })
    /** Delete a review */
    DeleteReview?: (DeletedGenqlSelection & { __args?: {
    /** The id of the review to delete */
    id?: (Scalars['Int'] | null)} })
    /** Rate a review */
    RateReview?: (ReviewGenqlSelection & { __args?: {
    /** The id of the review to rate */
    reviewId?: (Scalars['Int'] | null), 
    /** The rating to apply to the review */
    rating?: (ReviewRating | null)} })
    /** Recommendation a media */
    SaveRecommendation?: (RecommendationGenqlSelection & { __args?: {
    /** The id of the base media */
    mediaId?: (Scalars['Int'] | null), 
    /** The id of the media to recommend */
    mediaRecommendationId?: (Scalars['Int'] | null), 
    /** The rating to give the recommendation */
    rating?: (RecommendationRating | null)} })
    /** Create or update a forum thread */
    SaveThread?: (ThreadGenqlSelection & { __args?: {
    /** The thread id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** The title of the thread */
    title?: (Scalars['String'] | null), 
    /** The main text body of the thread */
    body?: (Scalars['String'] | null), 
    /** Forum categories the thread should be within */
    categories?: ((Scalars['Int'] | null)[] | null), 
    /** Media related to the contents of the thread */
    mediaCategories?: ((Scalars['Int'] | null)[] | null), 
    /** If the thread should be stickied. (Mod Only) */
    sticky?: (Scalars['Boolean'] | null), 
    /** If the thread should be locked. (Mod Only) */
    locked?: (Scalars['Boolean'] | null)} })
    /** Delete a thread */
    DeleteThread?: (DeletedGenqlSelection & { __args?: {
    /** The id of the thread to delete */
    id?: (Scalars['Int'] | null)} })
    /** Toggle the subscription of a forum thread */
    ToggleThreadSubscription?: (ThreadGenqlSelection & { __args?: {
    /** The id of the forum thread to un/subscribe */
    threadId?: (Scalars['Int'] | null), 
    /** Whether to subscribe or unsubscribe from the forum thread */
    subscribe?: (Scalars['Boolean'] | null)} })
    /** Create or update a thread comment */
    SaveThreadComment?: (ThreadCommentGenqlSelection & { __args?: {
    /** The comment id, required for updating */
    id?: (Scalars['Int'] | null), 
    /** The id of thread the comment belongs to */
    threadId?: (Scalars['Int'] | null), 
    /** The id of thread comment to reply to */
    parentCommentId?: (Scalars['Int'] | null), 
    /** The comment markdown text */
    comment?: (Scalars['String'] | null), 
    /** If the comment tree should be locked. (Mod Only) */
    locked?: (Scalars['Boolean'] | null)} })
    /** Delete a thread comment */
    DeleteThreadComment?: (DeletedGenqlSelection & { __args?: {
    /** The id of the thread comment to delete */
    id?: (Scalars['Int'] | null)} })
    UpdateAniChartSettings?: { __args: {titleLanguage?: (Scalars['String'] | null), outgoingLinkProvider?: (Scalars['String'] | null), theme?: (Scalars['String'] | null), sort?: (Scalars['String'] | null)} } | boolean | number
    UpdateAniChartHighlights?: { __args: {highlights?: ((AniChartHighlightInput | null)[] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Notification option input */
export interface NotificationOptionInput {
/** The type of notification */
type?: (NotificationType | null),
/** Whether this type of notification is enabled */
enabled?: (Scalars['Boolean'] | null)}


/** A user's list options for anime or manga lists */
export interface MediaListOptionsInput {
/** The order each list should be displayed in */
sectionOrder?: ((Scalars['String'] | null)[] | null),
/** If the completed sections of the list should be separated by format */
splitCompletedSectionByFormat?: (Scalars['Boolean'] | null),
/** The names of the user's custom lists */
customLists?: ((Scalars['String'] | null)[] | null),
/** The names of the user's advanced scoring sections */
advancedScoring?: ((Scalars['String'] | null)[] | null),
/** If advanced scoring is enabled */
advancedScoringEnabled?: (Scalars['Boolean'] | null),
/** list theme */
theme?: (Scalars['String'] | null)}

export interface ListActivityOptionInput {disabled?: (Scalars['Boolean'] | null),type?: (MediaListStatus | null)}


/** Date object that allows for incomplete date values (fuzzy) */
export interface FuzzyDateInput {
/** Numeric Year (2017) */
year?: (Scalars['Int'] | null),
/** Numeric Month (3) */
month?: (Scalars['Int'] | null),
/** Numeric Day (24) */
day?: (Scalars['Int'] | null)}


/** Deleted data type */
export interface DeletedGenqlSelection{
    /** If an item has been successfully deleted */
    deleted?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Likeable union type */
export interface LikeableUnionGenqlSelection{
    on_ListActivity?:ListActivityGenqlSelection,
    on_TextActivity?:TextActivityGenqlSelection,
    on_MessageActivity?:MessageActivityGenqlSelection,
    on_ActivityReply?:ActivityReplyGenqlSelection,
    on_Thread?:ThreadGenqlSelection,
    on_ThreadComment?:ThreadCommentGenqlSelection,
    __typename?: boolean | number
}

export interface AniChartHighlightInput {mediaId?: (Scalars['Int'] | null),highlight?: (Scalars['String'] | null)}


/** Page of data (Used for internal use only) */
export interface InternalPageGenqlSelection{
    mediaSubmissions?: (MediaSubmissionGenqlSelection & { __args?: {mediaId?: (Scalars['Int'] | null), submissionId?: (Scalars['Int'] | null), userId?: (Scalars['Int'] | null), assigneeId?: (Scalars['Int'] | null), status?: (SubmissionStatus | null), 
    /** Filter by the media's type */
    type?: (MediaType | null), 
    /** The order the results will be returned in */
    sort?: ((SubmissionSort | null)[] | null)} })
    characterSubmissions?: (CharacterSubmissionGenqlSelection & { __args?: {characterId?: (Scalars['Int'] | null), 
    /** Filter by the submitter of the submission */
    userId?: (Scalars['Int'] | null), assigneeId?: (Scalars['Int'] | null), 
    /** Filter by the status of the submission */
    status?: (SubmissionStatus | null), 
    /** The order the results will be returned in */
    sort?: ((SubmissionSort | null)[] | null)} })
    staffSubmissions?: (StaffSubmissionGenqlSelection & { __args?: {staffId?: (Scalars['Int'] | null), 
    /** Filter by the submitter of the submission */
    userId?: (Scalars['Int'] | null), assigneeId?: (Scalars['Int'] | null), 
    /** Filter by the status of the submission */
    status?: (SubmissionStatus | null), 
    /** The order the results will be returned in */
    sort?: ((SubmissionSort | null)[] | null)} })
    revisionHistory?: (RevisionHistoryGenqlSelection & { __args?: {
    /** Filter by the user id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by the media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by the character id */
    characterId?: (Scalars['Int'] | null), 
    /** Filter by the staff id */
    staffId?: (Scalars['Int'] | null), 
    /** Filter by the studio id */
    studioId?: (Scalars['Int'] | null)} })
    reports?: (ReportGenqlSelection & { __args?: {reporterId?: (Scalars['Int'] | null), reportedId?: (Scalars['Int'] | null)} })
    modActions?: (ModActionGenqlSelection & { __args?: {userId?: (Scalars['Int'] | null), modId?: (Scalars['Int'] | null)} })
    userBlockSearch?: (UserGenqlSelection & { __args?: {
    /** Filter by search query */
    search?: (Scalars['String'] | null)} })
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    users?: (UserGenqlSelection & { __args?: {
    /** Filter by the user id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the name of the user */
    name?: (Scalars['String'] | null), 
    /** Filter to moderators only if true */
    isModerator?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    media?: (MediaGenqlSelection & { __args: {
    /** Filter by the media id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal?: (Scalars['Int'] | null), 
    /** Filter by the start date of the media */
    startDate?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the season the media was released in */
    season?: (MediaSeason | null), 
    /** The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument */
    seasonYear?: (Scalars['Int'] | null), 
    /** Filter by the media's type */
    type?: (MediaType | null), 
    /** Filter by the media's format */
    format?: (MediaFormat | null), 
    /** Filter by the media's current release status */
    status?: (MediaStatus | null), 
    /** Filter by amount of episodes the media has */
    episodes?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes?: (Scalars['Int'] | null), 
    /** Filter by if the media's intended for 18+ adult audiences */
    isAdult?: (Scalars['Boolean'] | null), 
    /** Filter by the media's genres */
    genre?: (Scalars['String'] | null), 
    /** Filter by the media's tags */
    tag?: (Scalars['String'] | null), 
    /** Only apply the tags filter argument to tags above this rank. Default: 18 */
    minimumTagRank?: (Scalars['Int'] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory?: (Scalars['String'] | null), 
    /** Filter by the media on the authenticated user's lists */
    onList?: (Scalars['Boolean'] | null), 
    /** Filter media by sites name with a online streaming or reading license */
    licensedBy?: (Scalars['String'] | null), 
    /** Filter media by sites id with a online streaming or reading license */
    licensedById?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity?: (Scalars['Int'] | null), 
    /** Filter by the source type of the media */
    source?: (MediaSource | null), 
    /** Filter by the media's country of origin */
    countryOfOrigin?: (Scalars['CountryCode'] | null), 
    /** If the media is officially licensed or a self-published doujin release */
    isLicensed?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the media id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the media id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_not?: (Scalars['Int'] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's MyAnimeList id */
    idMal_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the start date of the media */
    startDate_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the start date of the media */
    startDate_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the start date of the media */
    startDate_like?: (Scalars['String'] | null), 
    /** Filter by the end date of the media */
    endDate_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the end date of the media */
    endDate_like?: (Scalars['String'] | null), 
    /** Filter by the media's format */
    format_in?: ((MediaFormat | null)[] | null), 
    /** Filter by the media's format */
    format_not?: (MediaFormat | null), 
    /** Filter by the media's format */
    format_not_in?: ((MediaFormat | null)[] | null), 
    /** Filter by the media's current release status */
    status_in?: ((MediaStatus | null)[] | null), 
    /** Filter by the media's current release status */
    status_not?: (MediaStatus | null), 
    /** Filter by the media's current release status */
    status_not_in?: ((MediaStatus | null)[] | null), 
    /** Filter by amount of episodes the media has */
    episodes_greater?: (Scalars['Int'] | null), 
    /** Filter by amount of episodes the media has */
    episodes_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's episode length */
    duration_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's chapter count */
    chapters_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's volume count */
    volumes_lesser?: (Scalars['Int'] | null), 
    /** Filter by the media's genres */
    genre_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's genres */
    genre_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags */
    tag_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags */
    tag_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter by the media's tags with in a tag category */
    tagCategory_not_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter media by sites name with a online streaming or reading license */
    licensedBy_in?: ((Scalars['String'] | null)[] | null), 
    /** Filter media by sites id with a online streaming or reading license */
    licensedById_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media's average score */
    averageScore_not?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore_greater?: (Scalars['Int'] | null), 
    /** Filter by the media's average score */
    averageScore_lesser?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_not?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_greater?: (Scalars['Int'] | null), 
    /** Filter by the number of users with this media on their list */
    popularity_lesser?: (Scalars['Int'] | null), 
    /** Filter by the source type of the media */
    source_in?: ((MediaSource | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaSort | null)[] | null)} })
    characters?: (CharacterGenqlSelection & { __args?: {
    /** Filter by character id */
    id?: (Scalars['Int'] | null), 
    /** Filter by character by if its their birthday today */
    isBirthday?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by character id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by character id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by character id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((CharacterSort | null)[] | null)} })
    staff?: (StaffGenqlSelection & { __args?: {
    /** Filter by the staff id */
    id?: (Scalars['Int'] | null), 
    /** Filter by staff by if its their birthday today */
    isBirthday?: (Scalars['Boolean'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the staff id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the staff id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the staff id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((StaffSort | null)[] | null)} })
    studios?: (StudioGenqlSelection & { __args?: {
    /** Filter by the studio id */
    id?: (Scalars['Int'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the studio id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the studio id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the studio id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((StudioSort | null)[] | null)} })
    mediaList?: (MediaListGenqlSelection & { __args?: {
    /** Filter by a list entry's id */
    id?: (Scalars['Int'] | null), 
    /** Filter by a user's id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by a user's name */
    userName?: (Scalars['String'] | null), 
    /** Filter by the list entries media type */
    type?: (MediaType | null), 
    /** Filter by the watching/reading status */
    status?: (MediaListStatus | null), 
    /** Filter by the media id of the list entry */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter list entries to users who are being followed by the authenticated user */
    isFollowing?: (Scalars['Boolean'] | null), 
    /** Filter by note words and #tags */
    notes?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt?: (Scalars['FuzzyDateInt'] | null), 
    /** Limit to only entries also on the auth user's list. Requires user id or name arguments. */
    compareWithAuthList?: (Scalars['Boolean'] | null), 
    /** Filter by a user's id */
    userId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the watching/reading status */
    status_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not_in?: ((MediaListStatus | null)[] | null), 
    /** Filter by the watching/reading status */
    status_not?: (MediaListStatus | null), 
    /** Filter by the media id of the list entry */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id of the list entry */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by note words and #tags */
    notes_like?: (Scalars['String'] | null), 
    /** Filter by the date the user started the media */
    startedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user started the media */
    startedAt_like?: (Scalars['String'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_greater?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_lesser?: (Scalars['FuzzyDateInt'] | null), 
    /** Filter by the date the user completed the media */
    completedAt_like?: (Scalars['String'] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaListSort | null)[] | null)} })
    airingSchedules?: (AiringScheduleGenqlSelection & { __args?: {
    /** Filter by the id of the airing schedule item */
    id?: (Scalars['Int'] | null), 
    /** Filter by the id of associated media */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt?: (Scalars['Int'] | null), 
    /** Filter to episodes that haven't yet aired */
    notYetAired?: (Scalars['Boolean'] | null), 
    /** Filter by the id of the airing schedule item */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the id of the airing schedule item */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the airing schedule item */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of associated media */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the id of associated media */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of associated media */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_not?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the airing episode number */
    episode_greater?: (Scalars['Int'] | null), 
    /** Filter by the airing episode number */
    episode_lesser?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt_greater?: (Scalars['Int'] | null), 
    /** Filter by the time of airing */
    airingAt_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((AiringSort | null)[] | null)} })
    mediaTrends?: (MediaTrendGenqlSelection & { __args?: {
    /** Filter by the media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by date */
    date?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode?: (Scalars['Int'] | null), 
    /** Filter to stats recorded while the media was releasing */
    releasing?: (Scalars['Boolean'] | null), 
    /** Filter by the media id */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the media id */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the media id */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by date */
    date_greater?: (Scalars['Int'] | null), 
    /** Filter by date */
    date_lesser?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_greater?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_lesser?: (Scalars['Int'] | null), 
    /** Filter by trending amount */
    trending_not?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_greater?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_lesser?: (Scalars['Int'] | null), 
    /** Filter by score */
    averageScore_not?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_greater?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_lesser?: (Scalars['Int'] | null), 
    /** Filter by popularity */
    popularity_not?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_greater?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_lesser?: (Scalars['Int'] | null), 
    /** Filter by episode number */
    episode_not?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((MediaTrendSort | null)[] | null)} })
    notifications?: (NotificationUnionGenqlSelection & { __args?: {
    /** Filter by the type of notifications */
    type?: (NotificationType | null), 
    /** Reset the unread notification count to 0 on load */
    resetNotificationCount?: (Scalars['Boolean'] | null), 
    /** Filter by the type of notifications */
    type_in?: ((NotificationType | null)[] | null)} })
    followers?: (UserGenqlSelection & { __args: {
    /** User id of the follower/followed */
    userId: Scalars['Int'], 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    following?: (UserGenqlSelection & { __args: {
    /** User id of the follower/followed */
    userId: Scalars['Int'], 
    /** The order the results will be returned in */
    sort?: ((UserSort | null)[] | null)} })
    activities?: (ActivityUnionGenqlSelection & { __args?: {
    /** Filter by the activity id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the owner user id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId?: (Scalars['Int'] | null), 
    /** Filter by the associated media id of the activity */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by the type of activity */
    type?: (ActivityType | null), 
    /** Filter activity to users who are being followed by the authenticated user */
    isFollowing?: (Scalars['Boolean'] | null), 
    /** Filter activity to only activity with replies */
    hasReplies?: (Scalars['Boolean'] | null), 
    /** Filter activity to only activity with replies or is of type text */
    hasRepliesOrTypeText?: (Scalars['Boolean'] | null), 
    /** Filter by the time the activity was created */
    createdAt?: (Scalars['Int'] | null), 
    /** Filter by the activity id */
    id_not?: (Scalars['Int'] | null), 
    /** Filter by the activity id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the activity id */
    id_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the owner user id */
    userId_not?: (Scalars['Int'] | null), 
    /** Filter by the owner user id */
    userId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the owner user id */
    userId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_not?: (Scalars['Int'] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the id of the user who sent a message */
    messengerId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_not?: (Scalars['Int'] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the associated media id of the activity */
    mediaId_not_in?: ((Scalars['Int'] | null)[] | null), 
    /** Filter by the type of activity */
    type_not?: (ActivityType | null), 
    /** Filter by the type of activity */
    type_in?: ((ActivityType | null)[] | null), 
    /** Filter by the type of activity */
    type_not_in?: ((ActivityType | null)[] | null), 
    /** Filter by the time the activity was created */
    createdAt_greater?: (Scalars['Int'] | null), 
    /** Filter by the time the activity was created */
    createdAt_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((ActivitySort | null)[] | null)} })
    activityReplies?: (ActivityReplyGenqlSelection & { __args?: {
    /** Filter by the reply id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the parent id */
    activityId?: (Scalars['Int'] | null)} })
    threads?: (ThreadGenqlSelection & { __args?: {
    /** Filter by the thread id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the user id of the thread's creator */
    userId?: (Scalars['Int'] | null), 
    /** Filter by the user id of the last user to comment on the thread */
    replyUserId?: (Scalars['Int'] | null), 
    /** Filter by if the currently authenticated user's subscribed threads */
    subscribed?: (Scalars['Boolean'] | null), 
    /** Filter by thread category id */
    categoryId?: (Scalars['Int'] | null), 
    /** Filter by thread media id category */
    mediaCategoryId?: (Scalars['Int'] | null), 
    /** Filter by search query */
    search?: (Scalars['String'] | null), 
    /** Filter by the thread id */
    id_in?: ((Scalars['Int'] | null)[] | null), 
    /** The order the results will be returned in */
    sort?: ((ThreadSort | null)[] | null)} })
    threadComments?: (ThreadCommentGenqlSelection & { __args?: {
    /** Filter by the comment id */
    id?: (Scalars['Int'] | null), 
    /** Filter by the thread id */
    threadId?: (Scalars['Int'] | null), 
    /** Filter by the user id of the comment's creator */
    userId?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((ThreadCommentSort | null)[] | null)} })
    reviews?: (ReviewGenqlSelection & { __args?: {
    /** Filter by Review id */
    id?: (Scalars['Int'] | null), 
    /** Filter by media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by user id */
    userId?: (Scalars['Int'] | null), 
    /** Filter by media type */
    mediaType?: (MediaType | null), 
    /** The order the results will be returned in */
    sort?: ((ReviewSort | null)[] | null)} })
    recommendations?: (RecommendationGenqlSelection & { __args?: {
    /** Filter by recommendation id */
    id?: (Scalars['Int'] | null), 
    /** Filter by media id */
    mediaId?: (Scalars['Int'] | null), 
    /** Filter by media recommendation id */
    mediaRecommendationId?: (Scalars['Int'] | null), 
    /** Filter by user who created the recommendation */
    userId?: (Scalars['Int'] | null), 
    /** Filter by total rating of the recommendation */
    rating?: (Scalars['Int'] | null), 
    /** Filter by the media on the authenticated user's lists */
    onList?: (Scalars['Boolean'] | null), 
    /** Filter by total rating of the recommendation */
    rating_greater?: (Scalars['Int'] | null), 
    /** Filter by total rating of the recommendation */
    rating_lesser?: (Scalars['Int'] | null), 
    /** The order the results will be returned in */
    sort?: ((RecommendationSort | null)[] | null)} })
    likes?: (UserGenqlSelection & { __args?: {
    /** The id of the likeable type */
    likeableId?: (Scalars['Int'] | null), 
    /** The type of model the id applies to */
    type?: (LikeableType | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Media submission */
export interface MediaSubmissionGenqlSelection{
    /** The id of the submission */
    id?: boolean | number
    /** User submitter of the submission */
    submitter?: UserGenqlSelection
    /** Data Mod assigned to handle the submission */
    assignee?: UserGenqlSelection
    /** Status of the submission */
    status?: boolean | number
    submitterStats?: boolean | number
    notes?: boolean | number
    source?: boolean | number
    changes?: boolean | number
    /** Whether the submission is locked */
    locked?: boolean | number
    media?: MediaGenqlSelection
    submission?: MediaGenqlSelection
    characters?: MediaSubmissionComparisonGenqlSelection
    staff?: MediaSubmissionComparisonGenqlSelection
    studios?: MediaSubmissionComparisonGenqlSelection
    relations?: MediaEdgeGenqlSelection
    externalLinks?: MediaSubmissionComparisonGenqlSelection
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Media submission with comparison to current data */
export interface MediaSubmissionComparisonGenqlSelection{
    submission?: MediaSubmissionEdgeGenqlSelection
    character?: MediaCharacterGenqlSelection
    staff?: StaffEdgeGenqlSelection
    studio?: StudioEdgeGenqlSelection
    externalLink?: MediaExternalLinkGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaSubmissionEdgeGenqlSelection{
    /** The id of the direct submission */
    id?: boolean | number
    characterRole?: boolean | number
    staffRole?: boolean | number
    roleNotes?: boolean | number
    dubGroup?: boolean | number
    characterName?: boolean | number
    isMain?: boolean | number
    character?: CharacterGenqlSelection
    characterSubmission?: CharacterGenqlSelection
    voiceActor?: StaffGenqlSelection
    voiceActorSubmission?: StaffGenqlSelection
    staff?: StaffGenqlSelection
    staffSubmission?: StaffGenqlSelection
    studio?: StudioGenqlSelection
    externalLink?: MediaExternalLinkGenqlSelection
    media?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Internal - Media characters separated */
export interface MediaCharacterGenqlSelection{
    /** The id of the connection */
    id?: boolean | number
    /** The characters role in the media */
    role?: boolean | number
    roleNotes?: boolean | number
    dubGroup?: boolean | number
    /** Media specific character name */
    characterName?: boolean | number
    /** The characters in the media voiced by the parent actor */
    character?: CharacterGenqlSelection
    /** The voice actor of the character */
    voiceActor?: StaffGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A submission for a character that features in an anime or manga */
export interface CharacterSubmissionGenqlSelection{
    /** The id of the submission */
    id?: boolean | number
    /** Character that the submission is referencing */
    character?: CharacterGenqlSelection
    /** The character submission changes */
    submission?: CharacterGenqlSelection
    /** Submitter for the submission */
    submitter?: UserGenqlSelection
    /** Data Mod assigned to handle the submission */
    assignee?: UserGenqlSelection
    /** Status of the submission */
    status?: boolean | number
    /** Inner details of submission status */
    notes?: boolean | number
    source?: boolean | number
    /** Whether the submission is locked */
    locked?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A submission for a staff that features in an anime or manga */
export interface StaffSubmissionGenqlSelection{
    /** The id of the submission */
    id?: boolean | number
    /** Staff that the submission is referencing */
    staff?: StaffGenqlSelection
    /** The staff submission changes */
    submission?: StaffGenqlSelection
    /** Submitter for the submission */
    submitter?: UserGenqlSelection
    /** Data Mod assigned to handle the submission */
    assignee?: UserGenqlSelection
    /** Status of the submission */
    status?: boolean | number
    /** Inner details of submission status */
    notes?: boolean | number
    source?: boolean | number
    /** Whether the submission is locked */
    locked?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Feed of mod edit activity */
export interface RevisionHistoryGenqlSelection{
    /** The id of the media */
    id?: boolean | number
    /** The action taken on the objects */
    action?: boolean | number
    /** A JSON object of the fields that changed */
    changes?: boolean | number
    /** The user who made the edit to the object */
    user?: UserGenqlSelection
    /** The media the mod feed entry references */
    media?: MediaGenqlSelection
    /** The character the mod feed entry references */
    character?: CharacterGenqlSelection
    /** The staff member the mod feed entry references */
    staff?: StaffGenqlSelection
    /** The studio the mod feed entry references */
    studio?: StudioGenqlSelection
    /** The external link source the mod feed entry references */
    externalLink?: MediaExternalLinkGenqlSelection
    /** When the mod feed entry was created */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReportGenqlSelection{
    id?: boolean | number
    reporter?: UserGenqlSelection
    reported?: UserGenqlSelection
    reason?: boolean | number
    /** When the entry data was created */
    createdAt?: boolean | number
    cleared?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ModActionGenqlSelection{
    /** The id of the action */
    id?: boolean | number
    user?: UserGenqlSelection
    mod?: UserGenqlSelection
    type?: boolean | number
    objectId?: boolean | number
    objectType?: boolean | number
    data?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The official titles of the media in various languages */
export interface MediaTitleInput {
/** The romanization of the native language title */
romaji?: (Scalars['String'] | null),
/** The official english title */
english?: (Scalars['String'] | null),
/** Official title in it's native language */
native?: (Scalars['String'] | null)}

export interface AiringScheduleInput {airingAt?: (Scalars['Int'] | null),episode?: (Scalars['Int'] | null),timeUntilAiring?: (Scalars['Int'] | null)}


/** An external link to another site related to the media */
export interface MediaExternalLinkInput {
/** The id of the external link */
id: Scalars['Int'],
/** The url of the external link */
url: Scalars['String'],
/** The site location of the external link */
site: Scalars['String']}


/** The names of the character */
export interface CharacterNameInput {
/** The character's given name */
first?: (Scalars['String'] | null),
/** The character's middle name */
middle?: (Scalars['String'] | null),
/** The character's surname */
last?: (Scalars['String'] | null),
/** The character's full name in their native language */
native?: (Scalars['String'] | null),
/** Other names the character might be referred by */
alternative?: ((Scalars['String'] | null)[] | null),
/** Other names the character might be referred to as but are spoilers */
alternativeSpoiler?: ((Scalars['String'] | null)[] | null)}

export interface CharacterSubmissionConnectionGenqlSelection{
    edges?: CharacterSubmissionEdgeGenqlSelection
    nodes?: CharacterSubmissionGenqlSelection
    /** The pagination information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** CharacterSubmission connection edge */
export interface CharacterSubmissionEdgeGenqlSelection{
    node?: CharacterSubmissionGenqlSelection
    /** The characters role in the media */
    role?: boolean | number
    /** The voice actors of the character */
    voiceActors?: StaffGenqlSelection
    /** The submitted voice actors of the character */
    submittedVoiceActors?: StaffSubmissionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The names of the staff member */
export interface StaffNameInput {
/** The person's given name */
first?: (Scalars['String'] | null),
/** The person's middle name */
middle?: (Scalars['String'] | null),
/** The person's surname */
last?: (Scalars['String'] | null),
/** The person's full name in their native language */
native?: (Scalars['String'] | null),
/** Other names the character might be referred by */
alternative?: ((Scalars['String'] | null)[] | null)}


/** User data for moderators */
export interface UserModDataGenqlSelection{
    alts?: UserGenqlSelection
    bans?: boolean | number
    ip?: boolean | number
    counts?: boolean | number
    privacy?: boolean | number
    email?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Page_possibleTypes: string[] = ['Page']
    export const isPage = (obj?: { __typename?: any } | null): obj is Page => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPage"')
      return Page_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserAvatar_possibleTypes: string[] = ['UserAvatar']
    export const isUserAvatar = (obj?: { __typename?: any } | null): obj is UserAvatar => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserAvatar"')
      return UserAvatar_possibleTypes.includes(obj.__typename)
    }
    


    const UserOptions_possibleTypes: string[] = ['UserOptions']
    export const isUserOptions = (obj?: { __typename?: any } | null): obj is UserOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserOptions"')
      return UserOptions_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationOption_possibleTypes: string[] = ['NotificationOption']
    export const isNotificationOption = (obj?: { __typename?: any } | null): obj is NotificationOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationOption"')
      return NotificationOption_possibleTypes.includes(obj.__typename)
    }
    


    const ListActivityOption_possibleTypes: string[] = ['ListActivityOption']
    export const isListActivityOption = (obj?: { __typename?: any } | null): obj is ListActivityOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListActivityOption"')
      return ListActivityOption_possibleTypes.includes(obj.__typename)
    }
    


    const MediaListOptions_possibleTypes: string[] = ['MediaListOptions']
    export const isMediaListOptions = (obj?: { __typename?: any } | null): obj is MediaListOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaListOptions"')
      return MediaListOptions_possibleTypes.includes(obj.__typename)
    }
    


    const MediaListTypeOptions_possibleTypes: string[] = ['MediaListTypeOptions']
    export const isMediaListTypeOptions = (obj?: { __typename?: any } | null): obj is MediaListTypeOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaListTypeOptions"')
      return MediaListTypeOptions_possibleTypes.includes(obj.__typename)
    }
    


    const Favourites_possibleTypes: string[] = ['Favourites']
    export const isFavourites = (obj?: { __typename?: any } | null): obj is Favourites => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFavourites"')
      return Favourites_possibleTypes.includes(obj.__typename)
    }
    


    const MediaConnection_possibleTypes: string[] = ['MediaConnection']
    export const isMediaConnection = (obj?: { __typename?: any } | null): obj is MediaConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaConnection"')
      return MediaConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MediaEdge_possibleTypes: string[] = ['MediaEdge']
    export const isMediaEdge = (obj?: { __typename?: any } | null): obj is MediaEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaEdge"')
      return MediaEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Media_possibleTypes: string[] = ['Media']
    export const isMedia = (obj?: { __typename?: any } | null): obj is Media => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMedia"')
      return Media_possibleTypes.includes(obj.__typename)
    }
    


    const MediaTitle_possibleTypes: string[] = ['MediaTitle']
    export const isMediaTitle = (obj?: { __typename?: any } | null): obj is MediaTitle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaTitle"')
      return MediaTitle_possibleTypes.includes(obj.__typename)
    }
    


    const FuzzyDate_possibleTypes: string[] = ['FuzzyDate']
    export const isFuzzyDate = (obj?: { __typename?: any } | null): obj is FuzzyDate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFuzzyDate"')
      return FuzzyDate_possibleTypes.includes(obj.__typename)
    }
    


    const MediaTrailer_possibleTypes: string[] = ['MediaTrailer']
    export const isMediaTrailer = (obj?: { __typename?: any } | null): obj is MediaTrailer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaTrailer"')
      return MediaTrailer_possibleTypes.includes(obj.__typename)
    }
    


    const MediaCoverImage_possibleTypes: string[] = ['MediaCoverImage']
    export const isMediaCoverImage = (obj?: { __typename?: any } | null): obj is MediaCoverImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaCoverImage"')
      return MediaCoverImage_possibleTypes.includes(obj.__typename)
    }
    


    const MediaTag_possibleTypes: string[] = ['MediaTag']
    export const isMediaTag = (obj?: { __typename?: any } | null): obj is MediaTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaTag"')
      return MediaTag_possibleTypes.includes(obj.__typename)
    }
    


    const CharacterConnection_possibleTypes: string[] = ['CharacterConnection']
    export const isCharacterConnection = (obj?: { __typename?: any } | null): obj is CharacterConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacterConnection"')
      return CharacterConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CharacterEdge_possibleTypes: string[] = ['CharacterEdge']
    export const isCharacterEdge = (obj?: { __typename?: any } | null): obj is CharacterEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacterEdge"')
      return CharacterEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Character_possibleTypes: string[] = ['Character']
    export const isCharacter = (obj?: { __typename?: any } | null): obj is Character => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacter"')
      return Character_possibleTypes.includes(obj.__typename)
    }
    


    const CharacterName_possibleTypes: string[] = ['CharacterName']
    export const isCharacterName = (obj?: { __typename?: any } | null): obj is CharacterName => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacterName"')
      return CharacterName_possibleTypes.includes(obj.__typename)
    }
    


    const CharacterImage_possibleTypes: string[] = ['CharacterImage']
    export const isCharacterImage = (obj?: { __typename?: any } | null): obj is CharacterImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacterImage"')
      return CharacterImage_possibleTypes.includes(obj.__typename)
    }
    


    const Staff_possibleTypes: string[] = ['Staff']
    export const isStaff = (obj?: { __typename?: any } | null): obj is Staff => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaff"')
      return Staff_possibleTypes.includes(obj.__typename)
    }
    


    const StaffName_possibleTypes: string[] = ['StaffName']
    export const isStaffName = (obj?: { __typename?: any } | null): obj is StaffName => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaffName"')
      return StaffName_possibleTypes.includes(obj.__typename)
    }
    


    const StaffImage_possibleTypes: string[] = ['StaffImage']
    export const isStaffImage = (obj?: { __typename?: any } | null): obj is StaffImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaffImage"')
      return StaffImage_possibleTypes.includes(obj.__typename)
    }
    


    const StaffRoleType_possibleTypes: string[] = ['StaffRoleType']
    export const isStaffRoleType = (obj?: { __typename?: any } | null): obj is StaffRoleType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaffRoleType"')
      return StaffRoleType_possibleTypes.includes(obj.__typename)
    }
    


    const StaffConnection_possibleTypes: string[] = ['StaffConnection']
    export const isStaffConnection = (obj?: { __typename?: any } | null): obj is StaffConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaffConnection"')
      return StaffConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StaffEdge_possibleTypes: string[] = ['StaffEdge']
    export const isStaffEdge = (obj?: { __typename?: any } | null): obj is StaffEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaffEdge"')
      return StaffEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StudioConnection_possibleTypes: string[] = ['StudioConnection']
    export const isStudioConnection = (obj?: { __typename?: any } | null): obj is StudioConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStudioConnection"')
      return StudioConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StudioEdge_possibleTypes: string[] = ['StudioEdge']
    export const isStudioEdge = (obj?: { __typename?: any } | null): obj is StudioEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStudioEdge"')
      return StudioEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Studio_possibleTypes: string[] = ['Studio']
    export const isStudio = (obj?: { __typename?: any } | null): obj is Studio => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStudio"')
      return Studio_possibleTypes.includes(obj.__typename)
    }
    


    const AiringSchedule_possibleTypes: string[] = ['AiringSchedule']
    export const isAiringSchedule = (obj?: { __typename?: any } | null): obj is AiringSchedule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAiringSchedule"')
      return AiringSchedule_possibleTypes.includes(obj.__typename)
    }
    


    const AiringScheduleConnection_possibleTypes: string[] = ['AiringScheduleConnection']
    export const isAiringScheduleConnection = (obj?: { __typename?: any } | null): obj is AiringScheduleConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAiringScheduleConnection"')
      return AiringScheduleConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AiringScheduleEdge_possibleTypes: string[] = ['AiringScheduleEdge']
    export const isAiringScheduleEdge = (obj?: { __typename?: any } | null): obj is AiringScheduleEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAiringScheduleEdge"')
      return AiringScheduleEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MediaTrendConnection_possibleTypes: string[] = ['MediaTrendConnection']
    export const isMediaTrendConnection = (obj?: { __typename?: any } | null): obj is MediaTrendConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaTrendConnection"')
      return MediaTrendConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MediaTrendEdge_possibleTypes: string[] = ['MediaTrendEdge']
    export const isMediaTrendEdge = (obj?: { __typename?: any } | null): obj is MediaTrendEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaTrendEdge"')
      return MediaTrendEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MediaTrend_possibleTypes: string[] = ['MediaTrend']
    export const isMediaTrend = (obj?: { __typename?: any } | null): obj is MediaTrend => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaTrend"')
      return MediaTrend_possibleTypes.includes(obj.__typename)
    }
    


    const MediaExternalLink_possibleTypes: string[] = ['MediaExternalLink']
    export const isMediaExternalLink = (obj?: { __typename?: any } | null): obj is MediaExternalLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaExternalLink"')
      return MediaExternalLink_possibleTypes.includes(obj.__typename)
    }
    


    const MediaStreamingEpisode_possibleTypes: string[] = ['MediaStreamingEpisode']
    export const isMediaStreamingEpisode = (obj?: { __typename?: any } | null): obj is MediaStreamingEpisode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaStreamingEpisode"')
      return MediaStreamingEpisode_possibleTypes.includes(obj.__typename)
    }
    


    const MediaRank_possibleTypes: string[] = ['MediaRank']
    export const isMediaRank = (obj?: { __typename?: any } | null): obj is MediaRank => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaRank"')
      return MediaRank_possibleTypes.includes(obj.__typename)
    }
    


    const MediaList_possibleTypes: string[] = ['MediaList']
    export const isMediaList = (obj?: { __typename?: any } | null): obj is MediaList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaList"')
      return MediaList_possibleTypes.includes(obj.__typename)
    }
    


    const ReviewConnection_possibleTypes: string[] = ['ReviewConnection']
    export const isReviewConnection = (obj?: { __typename?: any } | null): obj is ReviewConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReviewConnection"')
      return ReviewConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ReviewEdge_possibleTypes: string[] = ['ReviewEdge']
    export const isReviewEdge = (obj?: { __typename?: any } | null): obj is ReviewEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReviewEdge"')
      return ReviewEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Review_possibleTypes: string[] = ['Review']
    export const isReview = (obj?: { __typename?: any } | null): obj is Review => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReview"')
      return Review_possibleTypes.includes(obj.__typename)
    }
    


    const RecommendationConnection_possibleTypes: string[] = ['RecommendationConnection']
    export const isRecommendationConnection = (obj?: { __typename?: any } | null): obj is RecommendationConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecommendationConnection"')
      return RecommendationConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RecommendationEdge_possibleTypes: string[] = ['RecommendationEdge']
    export const isRecommendationEdge = (obj?: { __typename?: any } | null): obj is RecommendationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecommendationEdge"')
      return RecommendationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Recommendation_possibleTypes: string[] = ['Recommendation']
    export const isRecommendation = (obj?: { __typename?: any } | null): obj is Recommendation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecommendation"')
      return Recommendation_possibleTypes.includes(obj.__typename)
    }
    


    const MediaStats_possibleTypes: string[] = ['MediaStats']
    export const isMediaStats = (obj?: { __typename?: any } | null): obj is MediaStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaStats"')
      return MediaStats_possibleTypes.includes(obj.__typename)
    }
    


    const ScoreDistribution_possibleTypes: string[] = ['ScoreDistribution']
    export const isScoreDistribution = (obj?: { __typename?: any } | null): obj is ScoreDistribution => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScoreDistribution"')
      return ScoreDistribution_possibleTypes.includes(obj.__typename)
    }
    


    const StatusDistribution_possibleTypes: string[] = ['StatusDistribution']
    export const isStatusDistribution = (obj?: { __typename?: any } | null): obj is StatusDistribution => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatusDistribution"')
      return StatusDistribution_possibleTypes.includes(obj.__typename)
    }
    


    const AiringProgression_possibleTypes: string[] = ['AiringProgression']
    export const isAiringProgression = (obj?: { __typename?: any } | null): obj is AiringProgression => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAiringProgression"')
      return AiringProgression_possibleTypes.includes(obj.__typename)
    }
    


    const UserStatisticTypes_possibleTypes: string[] = ['UserStatisticTypes']
    export const isUserStatisticTypes = (obj?: { __typename?: any } | null): obj is UserStatisticTypes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStatisticTypes"')
      return UserStatisticTypes_possibleTypes.includes(obj.__typename)
    }
    


    const UserStatistics_possibleTypes: string[] = ['UserStatistics']
    export const isUserStatistics = (obj?: { __typename?: any } | null): obj is UserStatistics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStatistics"')
      return UserStatistics_possibleTypes.includes(obj.__typename)
    }
    


    const UserFormatStatistic_possibleTypes: string[] = ['UserFormatStatistic']
    export const isUserFormatStatistic = (obj?: { __typename?: any } | null): obj is UserFormatStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserFormatStatistic"')
      return UserFormatStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserStatusStatistic_possibleTypes: string[] = ['UserStatusStatistic']
    export const isUserStatusStatistic = (obj?: { __typename?: any } | null): obj is UserStatusStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStatusStatistic"')
      return UserStatusStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserScoreStatistic_possibleTypes: string[] = ['UserScoreStatistic']
    export const isUserScoreStatistic = (obj?: { __typename?: any } | null): obj is UserScoreStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserScoreStatistic"')
      return UserScoreStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserLengthStatistic_possibleTypes: string[] = ['UserLengthStatistic']
    export const isUserLengthStatistic = (obj?: { __typename?: any } | null): obj is UserLengthStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLengthStatistic"')
      return UserLengthStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserReleaseYearStatistic_possibleTypes: string[] = ['UserReleaseYearStatistic']
    export const isUserReleaseYearStatistic = (obj?: { __typename?: any } | null): obj is UserReleaseYearStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserReleaseYearStatistic"')
      return UserReleaseYearStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserStartYearStatistic_possibleTypes: string[] = ['UserStartYearStatistic']
    export const isUserStartYearStatistic = (obj?: { __typename?: any } | null): obj is UserStartYearStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStartYearStatistic"')
      return UserStartYearStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserGenreStatistic_possibleTypes: string[] = ['UserGenreStatistic']
    export const isUserGenreStatistic = (obj?: { __typename?: any } | null): obj is UserGenreStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGenreStatistic"')
      return UserGenreStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserTagStatistic_possibleTypes: string[] = ['UserTagStatistic']
    export const isUserTagStatistic = (obj?: { __typename?: any } | null): obj is UserTagStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserTagStatistic"')
      return UserTagStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserCountryStatistic_possibleTypes: string[] = ['UserCountryStatistic']
    export const isUserCountryStatistic = (obj?: { __typename?: any } | null): obj is UserCountryStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserCountryStatistic"')
      return UserCountryStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserVoiceActorStatistic_possibleTypes: string[] = ['UserVoiceActorStatistic']
    export const isUserVoiceActorStatistic = (obj?: { __typename?: any } | null): obj is UserVoiceActorStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserVoiceActorStatistic"')
      return UserVoiceActorStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserStaffStatistic_possibleTypes: string[] = ['UserStaffStatistic']
    export const isUserStaffStatistic = (obj?: { __typename?: any } | null): obj is UserStaffStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStaffStatistic"')
      return UserStaffStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserStudioStatistic_possibleTypes: string[] = ['UserStudioStatistic']
    export const isUserStudioStatistic = (obj?: { __typename?: any } | null): obj is UserStudioStatistic => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStudioStatistic"')
      return UserStudioStatistic_possibleTypes.includes(obj.__typename)
    }
    


    const UserStats_possibleTypes: string[] = ['UserStats']
    export const isUserStats = (obj?: { __typename?: any } | null): obj is UserStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStats"')
      return UserStats_possibleTypes.includes(obj.__typename)
    }
    


    const UserActivityHistory_possibleTypes: string[] = ['UserActivityHistory']
    export const isUserActivityHistory = (obj?: { __typename?: any } | null): obj is UserActivityHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserActivityHistory"')
      return UserActivityHistory_possibleTypes.includes(obj.__typename)
    }
    


    const ListScoreStats_possibleTypes: string[] = ['ListScoreStats']
    export const isListScoreStats = (obj?: { __typename?: any } | null): obj is ListScoreStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListScoreStats"')
      return ListScoreStats_possibleTypes.includes(obj.__typename)
    }
    


    const GenreStats_possibleTypes: string[] = ['GenreStats']
    export const isGenreStats = (obj?: { __typename?: any } | null): obj is GenreStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGenreStats"')
      return GenreStats_possibleTypes.includes(obj.__typename)
    }
    


    const TagStats_possibleTypes: string[] = ['TagStats']
    export const isTagStats = (obj?: { __typename?: any } | null): obj is TagStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagStats"')
      return TagStats_possibleTypes.includes(obj.__typename)
    }
    


    const StaffStats_possibleTypes: string[] = ['StaffStats']
    export const isStaffStats = (obj?: { __typename?: any } | null): obj is StaffStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaffStats"')
      return StaffStats_possibleTypes.includes(obj.__typename)
    }
    


    const StudioStats_possibleTypes: string[] = ['StudioStats']
    export const isStudioStats = (obj?: { __typename?: any } | null): obj is StudioStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStudioStats"')
      return StudioStats_possibleTypes.includes(obj.__typename)
    }
    


    const YearStats_possibleTypes: string[] = ['YearStats']
    export const isYearStats = (obj?: { __typename?: any } | null): obj is YearStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isYearStats"')
      return YearStats_possibleTypes.includes(obj.__typename)
    }
    


    const FormatStats_possibleTypes: string[] = ['FormatStats']
    export const isFormatStats = (obj?: { __typename?: any } | null): obj is FormatStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFormatStats"')
      return FormatStats_possibleTypes.includes(obj.__typename)
    }
    


    const UserPreviousName_possibleTypes: string[] = ['UserPreviousName']
    export const isUserPreviousName = (obj?: { __typename?: any } | null): obj is UserPreviousName => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPreviousName"')
      return UserPreviousName_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationUnion_possibleTypes: string[] = ['AiringNotification','FollowingNotification','ActivityMessageNotification','ActivityMentionNotification','ActivityReplyNotification','ActivityReplySubscribedNotification','ActivityLikeNotification','ActivityReplyLikeNotification','ThreadCommentMentionNotification','ThreadCommentReplyNotification','ThreadCommentSubscribedNotification','ThreadCommentLikeNotification','ThreadLikeNotification','RelatedMediaAdditionNotification','MediaDataChangeNotification','MediaMergeNotification','MediaDeletionNotification']
    export const isNotificationUnion = (obj?: { __typename?: any } | null): obj is NotificationUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationUnion"')
      return NotificationUnion_possibleTypes.includes(obj.__typename)
    }
    


    const AiringNotification_possibleTypes: string[] = ['AiringNotification']
    export const isAiringNotification = (obj?: { __typename?: any } | null): obj is AiringNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAiringNotification"')
      return AiringNotification_possibleTypes.includes(obj.__typename)
    }
    


    const FollowingNotification_possibleTypes: string[] = ['FollowingNotification']
    export const isFollowingNotification = (obj?: { __typename?: any } | null): obj is FollowingNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFollowingNotification"')
      return FollowingNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityMessageNotification_possibleTypes: string[] = ['ActivityMessageNotification']
    export const isActivityMessageNotification = (obj?: { __typename?: any } | null): obj is ActivityMessageNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityMessageNotification"')
      return ActivityMessageNotification_possibleTypes.includes(obj.__typename)
    }
    


    const MessageActivity_possibleTypes: string[] = ['MessageActivity']
    export const isMessageActivity = (obj?: { __typename?: any } | null): obj is MessageActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageActivity"')
      return MessageActivity_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityReply_possibleTypes: string[] = ['ActivityReply']
    export const isActivityReply = (obj?: { __typename?: any } | null): obj is ActivityReply => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityReply"')
      return ActivityReply_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityMentionNotification_possibleTypes: string[] = ['ActivityMentionNotification']
    export const isActivityMentionNotification = (obj?: { __typename?: any } | null): obj is ActivityMentionNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityMentionNotification"')
      return ActivityMentionNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityUnion_possibleTypes: string[] = ['TextActivity','ListActivity','MessageActivity']
    export const isActivityUnion = (obj?: { __typename?: any } | null): obj is ActivityUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityUnion"')
      return ActivityUnion_possibleTypes.includes(obj.__typename)
    }
    


    const TextActivity_possibleTypes: string[] = ['TextActivity']
    export const isTextActivity = (obj?: { __typename?: any } | null): obj is TextActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTextActivity"')
      return TextActivity_possibleTypes.includes(obj.__typename)
    }
    


    const ListActivity_possibleTypes: string[] = ['ListActivity']
    export const isListActivity = (obj?: { __typename?: any } | null): obj is ListActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListActivity"')
      return ListActivity_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityReplyNotification_possibleTypes: string[] = ['ActivityReplyNotification']
    export const isActivityReplyNotification = (obj?: { __typename?: any } | null): obj is ActivityReplyNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityReplyNotification"')
      return ActivityReplyNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityReplySubscribedNotification_possibleTypes: string[] = ['ActivityReplySubscribedNotification']
    export const isActivityReplySubscribedNotification = (obj?: { __typename?: any } | null): obj is ActivityReplySubscribedNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityReplySubscribedNotification"')
      return ActivityReplySubscribedNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityLikeNotification_possibleTypes: string[] = ['ActivityLikeNotification']
    export const isActivityLikeNotification = (obj?: { __typename?: any } | null): obj is ActivityLikeNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityLikeNotification"')
      return ActivityLikeNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityReplyLikeNotification_possibleTypes: string[] = ['ActivityReplyLikeNotification']
    export const isActivityReplyLikeNotification = (obj?: { __typename?: any } | null): obj is ActivityReplyLikeNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityReplyLikeNotification"')
      return ActivityReplyLikeNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadCommentMentionNotification_possibleTypes: string[] = ['ThreadCommentMentionNotification']
    export const isThreadCommentMentionNotification = (obj?: { __typename?: any } | null): obj is ThreadCommentMentionNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadCommentMentionNotification"')
      return ThreadCommentMentionNotification_possibleTypes.includes(obj.__typename)
    }
    


    const Thread_possibleTypes: string[] = ['Thread']
    export const isThread = (obj?: { __typename?: any } | null): obj is Thread => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThread"')
      return Thread_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadCategory_possibleTypes: string[] = ['ThreadCategory']
    export const isThreadCategory = (obj?: { __typename?: any } | null): obj is ThreadCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadCategory"')
      return ThreadCategory_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadComment_possibleTypes: string[] = ['ThreadComment']
    export const isThreadComment = (obj?: { __typename?: any } | null): obj is ThreadComment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadComment"')
      return ThreadComment_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadCommentReplyNotification_possibleTypes: string[] = ['ThreadCommentReplyNotification']
    export const isThreadCommentReplyNotification = (obj?: { __typename?: any } | null): obj is ThreadCommentReplyNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadCommentReplyNotification"')
      return ThreadCommentReplyNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadCommentSubscribedNotification_possibleTypes: string[] = ['ThreadCommentSubscribedNotification']
    export const isThreadCommentSubscribedNotification = (obj?: { __typename?: any } | null): obj is ThreadCommentSubscribedNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadCommentSubscribedNotification"')
      return ThreadCommentSubscribedNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadCommentLikeNotification_possibleTypes: string[] = ['ThreadCommentLikeNotification']
    export const isThreadCommentLikeNotification = (obj?: { __typename?: any } | null): obj is ThreadCommentLikeNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadCommentLikeNotification"')
      return ThreadCommentLikeNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadLikeNotification_possibleTypes: string[] = ['ThreadLikeNotification']
    export const isThreadLikeNotification = (obj?: { __typename?: any } | null): obj is ThreadLikeNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadLikeNotification"')
      return ThreadLikeNotification_possibleTypes.includes(obj.__typename)
    }
    


    const RelatedMediaAdditionNotification_possibleTypes: string[] = ['RelatedMediaAdditionNotification']
    export const isRelatedMediaAdditionNotification = (obj?: { __typename?: any } | null): obj is RelatedMediaAdditionNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRelatedMediaAdditionNotification"')
      return RelatedMediaAdditionNotification_possibleTypes.includes(obj.__typename)
    }
    


    const MediaDataChangeNotification_possibleTypes: string[] = ['MediaDataChangeNotification']
    export const isMediaDataChangeNotification = (obj?: { __typename?: any } | null): obj is MediaDataChangeNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaDataChangeNotification"')
      return MediaDataChangeNotification_possibleTypes.includes(obj.__typename)
    }
    


    const MediaMergeNotification_possibleTypes: string[] = ['MediaMergeNotification']
    export const isMediaMergeNotification = (obj?: { __typename?: any } | null): obj is MediaMergeNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaMergeNotification"')
      return MediaMergeNotification_possibleTypes.includes(obj.__typename)
    }
    


    const MediaDeletionNotification_possibleTypes: string[] = ['MediaDeletionNotification']
    export const isMediaDeletionNotification = (obj?: { __typename?: any } | null): obj is MediaDeletionNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaDeletionNotification"')
      return MediaDeletionNotification_possibleTypes.includes(obj.__typename)
    }
    


    const MediaListCollection_possibleTypes: string[] = ['MediaListCollection']
    export const isMediaListCollection = (obj?: { __typename?: any } | null): obj is MediaListCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaListCollection"')
      return MediaListCollection_possibleTypes.includes(obj.__typename)
    }
    


    const MediaListGroup_possibleTypes: string[] = ['MediaListGroup']
    export const isMediaListGroup = (obj?: { __typename?: any } | null): obj is MediaListGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaListGroup"')
      return MediaListGroup_possibleTypes.includes(obj.__typename)
    }
    


    const ParsedMarkdown_possibleTypes: string[] = ['ParsedMarkdown']
    export const isParsedMarkdown = (obj?: { __typename?: any } | null): obj is ParsedMarkdown => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParsedMarkdown"')
      return ParsedMarkdown_possibleTypes.includes(obj.__typename)
    }
    


    const AniChartUser_possibleTypes: string[] = ['AniChartUser']
    export const isAniChartUser = (obj?: { __typename?: any } | null): obj is AniChartUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAniChartUser"')
      return AniChartUser_possibleTypes.includes(obj.__typename)
    }
    


    const SiteStatistics_possibleTypes: string[] = ['SiteStatistics']
    export const isSiteStatistics = (obj?: { __typename?: any } | null): obj is SiteStatistics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSiteStatistics"')
      return SiteStatistics_possibleTypes.includes(obj.__typename)
    }
    


    const SiteTrendConnection_possibleTypes: string[] = ['SiteTrendConnection']
    export const isSiteTrendConnection = (obj?: { __typename?: any } | null): obj is SiteTrendConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSiteTrendConnection"')
      return SiteTrendConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SiteTrendEdge_possibleTypes: string[] = ['SiteTrendEdge']
    export const isSiteTrendEdge = (obj?: { __typename?: any } | null): obj is SiteTrendEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSiteTrendEdge"')
      return SiteTrendEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SiteTrend_possibleTypes: string[] = ['SiteTrend']
    export const isSiteTrend = (obj?: { __typename?: any } | null): obj is SiteTrend => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSiteTrend"')
      return SiteTrend_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Deleted_possibleTypes: string[] = ['Deleted']
    export const isDeleted = (obj?: { __typename?: any } | null): obj is Deleted => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleted"')
      return Deleted_possibleTypes.includes(obj.__typename)
    }
    


    const LikeableUnion_possibleTypes: string[] = ['ListActivity','TextActivity','MessageActivity','ActivityReply','Thread','ThreadComment']
    export const isLikeableUnion = (obj?: { __typename?: any } | null): obj is LikeableUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLikeableUnion"')
      return LikeableUnion_possibleTypes.includes(obj.__typename)
    }
    


    const InternalPage_possibleTypes: string[] = ['InternalPage']
    export const isInternalPage = (obj?: { __typename?: any } | null): obj is InternalPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInternalPage"')
      return InternalPage_possibleTypes.includes(obj.__typename)
    }
    


    const MediaSubmission_possibleTypes: string[] = ['MediaSubmission']
    export const isMediaSubmission = (obj?: { __typename?: any } | null): obj is MediaSubmission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaSubmission"')
      return MediaSubmission_possibleTypes.includes(obj.__typename)
    }
    


    const MediaSubmissionComparison_possibleTypes: string[] = ['MediaSubmissionComparison']
    export const isMediaSubmissionComparison = (obj?: { __typename?: any } | null): obj is MediaSubmissionComparison => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaSubmissionComparison"')
      return MediaSubmissionComparison_possibleTypes.includes(obj.__typename)
    }
    


    const MediaSubmissionEdge_possibleTypes: string[] = ['MediaSubmissionEdge']
    export const isMediaSubmissionEdge = (obj?: { __typename?: any } | null): obj is MediaSubmissionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaSubmissionEdge"')
      return MediaSubmissionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MediaCharacter_possibleTypes: string[] = ['MediaCharacter']
    export const isMediaCharacter = (obj?: { __typename?: any } | null): obj is MediaCharacter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaCharacter"')
      return MediaCharacter_possibleTypes.includes(obj.__typename)
    }
    


    const CharacterSubmission_possibleTypes: string[] = ['CharacterSubmission']
    export const isCharacterSubmission = (obj?: { __typename?: any } | null): obj is CharacterSubmission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacterSubmission"')
      return CharacterSubmission_possibleTypes.includes(obj.__typename)
    }
    


    const StaffSubmission_possibleTypes: string[] = ['StaffSubmission']
    export const isStaffSubmission = (obj?: { __typename?: any } | null): obj is StaffSubmission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaffSubmission"')
      return StaffSubmission_possibleTypes.includes(obj.__typename)
    }
    


    const RevisionHistory_possibleTypes: string[] = ['RevisionHistory']
    export const isRevisionHistory = (obj?: { __typename?: any } | null): obj is RevisionHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRevisionHistory"')
      return RevisionHistory_possibleTypes.includes(obj.__typename)
    }
    


    const Report_possibleTypes: string[] = ['Report']
    export const isReport = (obj?: { __typename?: any } | null): obj is Report => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReport"')
      return Report_possibleTypes.includes(obj.__typename)
    }
    


    const ModAction_possibleTypes: string[] = ['ModAction']
    export const isModAction = (obj?: { __typename?: any } | null): obj is ModAction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isModAction"')
      return ModAction_possibleTypes.includes(obj.__typename)
    }
    


    const CharacterSubmissionConnection_possibleTypes: string[] = ['CharacterSubmissionConnection']
    export const isCharacterSubmissionConnection = (obj?: { __typename?: any } | null): obj is CharacterSubmissionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacterSubmissionConnection"')
      return CharacterSubmissionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CharacterSubmissionEdge_possibleTypes: string[] = ['CharacterSubmissionEdge']
    export const isCharacterSubmissionEdge = (obj?: { __typename?: any } | null): obj is CharacterSubmissionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharacterSubmissionEdge"')
      return CharacterSubmissionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserModData_possibleTypes: string[] = ['UserModData']
    export const isUserModData = (obj?: { __typename?: any } | null): obj is UserModData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserModData"')
      return UserModData_possibleTypes.includes(obj.__typename)
    }
    

export const enumUserSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   USERNAME: 'USERNAME' as const,
   USERNAME_DESC: 'USERNAME_DESC' as const,
   WATCHED_TIME: 'WATCHED_TIME' as const,
   WATCHED_TIME_DESC: 'WATCHED_TIME_DESC' as const,
   CHAPTERS_READ: 'CHAPTERS_READ' as const,
   CHAPTERS_READ_DESC: 'CHAPTERS_READ_DESC' as const,
   SEARCH_MATCH: 'SEARCH_MATCH' as const
}

export const enumUserTitleLanguage = {
   ROMAJI: 'ROMAJI' as const,
   ENGLISH: 'ENGLISH' as const,
   NATIVE: 'NATIVE' as const,
   ROMAJI_STYLISED: 'ROMAJI_STYLISED' as const,
   ENGLISH_STYLISED: 'ENGLISH_STYLISED' as const,
   NATIVE_STYLISED: 'NATIVE_STYLISED' as const
}

export const enumNotificationType = {
   ACTIVITY_MESSAGE: 'ACTIVITY_MESSAGE' as const,
   ACTIVITY_REPLY: 'ACTIVITY_REPLY' as const,
   FOLLOWING: 'FOLLOWING' as const,
   ACTIVITY_MENTION: 'ACTIVITY_MENTION' as const,
   THREAD_COMMENT_MENTION: 'THREAD_COMMENT_MENTION' as const,
   THREAD_SUBSCRIBED: 'THREAD_SUBSCRIBED' as const,
   THREAD_COMMENT_REPLY: 'THREAD_COMMENT_REPLY' as const,
   AIRING: 'AIRING' as const,
   ACTIVITY_LIKE: 'ACTIVITY_LIKE' as const,
   ACTIVITY_REPLY_LIKE: 'ACTIVITY_REPLY_LIKE' as const,
   THREAD_LIKE: 'THREAD_LIKE' as const,
   THREAD_COMMENT_LIKE: 'THREAD_COMMENT_LIKE' as const,
   ACTIVITY_REPLY_SUBSCRIBED: 'ACTIVITY_REPLY_SUBSCRIBED' as const,
   RELATED_MEDIA_ADDITION: 'RELATED_MEDIA_ADDITION' as const,
   MEDIA_DATA_CHANGE: 'MEDIA_DATA_CHANGE' as const,
   MEDIA_MERGE: 'MEDIA_MERGE' as const,
   MEDIA_DELETION: 'MEDIA_DELETION' as const
}

export const enumUserStaffNameLanguage = {
   ROMAJI_WESTERN: 'ROMAJI_WESTERN' as const,
   ROMAJI: 'ROMAJI' as const,
   NATIVE: 'NATIVE' as const
}

export const enumMediaListStatus = {
   CURRENT: 'CURRENT' as const,
   PLANNING: 'PLANNING' as const,
   COMPLETED: 'COMPLETED' as const,
   DROPPED: 'DROPPED' as const,
   PAUSED: 'PAUSED' as const,
   REPEATING: 'REPEATING' as const
}

export const enumScoreFormat = {
   POINT_100: 'POINT_100' as const,
   POINT_10_DECIMAL: 'POINT_10_DECIMAL' as const,
   POINT_10: 'POINT_10' as const,
   POINT_5: 'POINT_5' as const,
   POINT_3: 'POINT_3' as const
}

export const enumMediaType = {
   ANIME: 'ANIME' as const,
   MANGA: 'MANGA' as const
}

export const enumMediaFormat = {
   TV: 'TV' as const,
   TV_SHORT: 'TV_SHORT' as const,
   MOVIE: 'MOVIE' as const,
   SPECIAL: 'SPECIAL' as const,
   OVA: 'OVA' as const,
   ONA: 'ONA' as const,
   MUSIC: 'MUSIC' as const,
   MANGA: 'MANGA' as const,
   NOVEL: 'NOVEL' as const,
   ONE_SHOT: 'ONE_SHOT' as const
}

export const enumMediaStatus = {
   FINISHED: 'FINISHED' as const,
   RELEASING: 'RELEASING' as const,
   NOT_YET_RELEASED: 'NOT_YET_RELEASED' as const,
   CANCELLED: 'CANCELLED' as const,
   HIATUS: 'HIATUS' as const
}

export const enumMediaSeason = {
   WINTER: 'WINTER' as const,
   SPRING: 'SPRING' as const,
   SUMMER: 'SUMMER' as const,
   FALL: 'FALL' as const
}

export const enumMediaSource = {
   ORIGINAL: 'ORIGINAL' as const,
   MANGA: 'MANGA' as const,
   LIGHT_NOVEL: 'LIGHT_NOVEL' as const,
   VISUAL_NOVEL: 'VISUAL_NOVEL' as const,
   VIDEO_GAME: 'VIDEO_GAME' as const,
   OTHER: 'OTHER' as const,
   NOVEL: 'NOVEL' as const,
   DOUJINSHI: 'DOUJINSHI' as const,
   ANIME: 'ANIME' as const,
   WEB_NOVEL: 'WEB_NOVEL' as const,
   LIVE_ACTION: 'LIVE_ACTION' as const,
   GAME: 'GAME' as const,
   COMIC: 'COMIC' as const,
   MULTIMEDIA_PROJECT: 'MULTIMEDIA_PROJECT' as const,
   PICTURE_BOOK: 'PICTURE_BOOK' as const
}

export const enumCharacterSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   ROLE: 'ROLE' as const,
   ROLE_DESC: 'ROLE_DESC' as const,
   SEARCH_MATCH: 'SEARCH_MATCH' as const,
   FAVOURITES: 'FAVOURITES' as const,
   FAVOURITES_DESC: 'FAVOURITES_DESC' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumCharacterRole = {
   MAIN: 'MAIN' as const,
   SUPPORTING: 'SUPPORTING' as const,
   BACKGROUND: 'BACKGROUND' as const
}

export const enumMediaSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   TITLE_ROMAJI: 'TITLE_ROMAJI' as const,
   TITLE_ROMAJI_DESC: 'TITLE_ROMAJI_DESC' as const,
   TITLE_ENGLISH: 'TITLE_ENGLISH' as const,
   TITLE_ENGLISH_DESC: 'TITLE_ENGLISH_DESC' as const,
   TITLE_NATIVE: 'TITLE_NATIVE' as const,
   TITLE_NATIVE_DESC: 'TITLE_NATIVE_DESC' as const,
   TYPE: 'TYPE' as const,
   TYPE_DESC: 'TYPE_DESC' as const,
   FORMAT: 'FORMAT' as const,
   FORMAT_DESC: 'FORMAT_DESC' as const,
   START_DATE: 'START_DATE' as const,
   START_DATE_DESC: 'START_DATE_DESC' as const,
   END_DATE: 'END_DATE' as const,
   END_DATE_DESC: 'END_DATE_DESC' as const,
   SCORE: 'SCORE' as const,
   SCORE_DESC: 'SCORE_DESC' as const,
   POPULARITY: 'POPULARITY' as const,
   POPULARITY_DESC: 'POPULARITY_DESC' as const,
   TRENDING: 'TRENDING' as const,
   TRENDING_DESC: 'TRENDING_DESC' as const,
   EPISODES: 'EPISODES' as const,
   EPISODES_DESC: 'EPISODES_DESC' as const,
   DURATION: 'DURATION' as const,
   DURATION_DESC: 'DURATION_DESC' as const,
   STATUS: 'STATUS' as const,
   STATUS_DESC: 'STATUS_DESC' as const,
   CHAPTERS: 'CHAPTERS' as const,
   CHAPTERS_DESC: 'CHAPTERS_DESC' as const,
   VOLUMES: 'VOLUMES' as const,
   VOLUMES_DESC: 'VOLUMES_DESC' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   SEARCH_MATCH: 'SEARCH_MATCH' as const,
   FAVOURITES: 'FAVOURITES' as const,
   FAVOURITES_DESC: 'FAVOURITES_DESC' as const
}

export const enumStaffLanguage = {
   JAPANESE: 'JAPANESE' as const,
   ENGLISH: 'ENGLISH' as const,
   KOREAN: 'KOREAN' as const,
   ITALIAN: 'ITALIAN' as const,
   SPANISH: 'SPANISH' as const,
   PORTUGUESE: 'PORTUGUESE' as const,
   FRENCH: 'FRENCH' as const,
   GERMAN: 'GERMAN' as const,
   HEBREW: 'HEBREW' as const,
   HUNGARIAN: 'HUNGARIAN' as const
}

export const enumStaffSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   ROLE: 'ROLE' as const,
   ROLE_DESC: 'ROLE_DESC' as const,
   LANGUAGE: 'LANGUAGE' as const,
   LANGUAGE_DESC: 'LANGUAGE_DESC' as const,
   SEARCH_MATCH: 'SEARCH_MATCH' as const,
   FAVOURITES: 'FAVOURITES' as const,
   FAVOURITES_DESC: 'FAVOURITES_DESC' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumStudioSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   NAME: 'NAME' as const,
   NAME_DESC: 'NAME_DESC' as const,
   SEARCH_MATCH: 'SEARCH_MATCH' as const,
   FAVOURITES: 'FAVOURITES' as const,
   FAVOURITES_DESC: 'FAVOURITES_DESC' as const
}

export const enumMediaTrendSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   MEDIA_ID: 'MEDIA_ID' as const,
   MEDIA_ID_DESC: 'MEDIA_ID_DESC' as const,
   DATE: 'DATE' as const,
   DATE_DESC: 'DATE_DESC' as const,
   SCORE: 'SCORE' as const,
   SCORE_DESC: 'SCORE_DESC' as const,
   POPULARITY: 'POPULARITY' as const,
   POPULARITY_DESC: 'POPULARITY_DESC' as const,
   TRENDING: 'TRENDING' as const,
   TRENDING_DESC: 'TRENDING_DESC' as const,
   EPISODE: 'EPISODE' as const,
   EPISODE_DESC: 'EPISODE_DESC' as const
}

export const enumExternalLinkType = {
   INFO: 'INFO' as const,
   STREAMING: 'STREAMING' as const,
   SOCIAL: 'SOCIAL' as const
}

export const enumMediaRankType = {
   RATED: 'RATED' as const,
   POPULAR: 'POPULAR' as const
}

export const enumReviewSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   SCORE: 'SCORE' as const,
   SCORE_DESC: 'SCORE_DESC' as const,
   RATING: 'RATING' as const,
   RATING_DESC: 'RATING_DESC' as const,
   CREATED_AT: 'CREATED_AT' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const
}

export const enumReviewRating = {
   NO_VOTE: 'NO_VOTE' as const,
   UP_VOTE: 'UP_VOTE' as const,
   DOWN_VOTE: 'DOWN_VOTE' as const
}

export const enumRecommendationSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   RATING: 'RATING' as const,
   RATING_DESC: 'RATING_DESC' as const
}

export const enumRecommendationRating = {
   NO_RATING: 'NO_RATING' as const,
   RATE_UP: 'RATE_UP' as const,
   RATE_DOWN: 'RATE_DOWN' as const
}

export const enumMediaRelation = {
   ADAPTATION: 'ADAPTATION' as const,
   PREQUEL: 'PREQUEL' as const,
   SEQUEL: 'SEQUEL' as const,
   PARENT: 'PARENT' as const,
   SIDE_STORY: 'SIDE_STORY' as const,
   CHARACTER: 'CHARACTER' as const,
   SUMMARY: 'SUMMARY' as const,
   ALTERNATIVE: 'ALTERNATIVE' as const,
   SPIN_OFF: 'SPIN_OFF' as const,
   OTHER: 'OTHER' as const,
   SOURCE: 'SOURCE' as const,
   COMPILATION: 'COMPILATION' as const,
   CONTAINS: 'CONTAINS' as const
}

export const enumUserStatisticsSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   COUNT: 'COUNT' as const,
   COUNT_DESC: 'COUNT_DESC' as const,
   PROGRESS: 'PROGRESS' as const,
   PROGRESS_DESC: 'PROGRESS_DESC' as const,
   MEAN_SCORE: 'MEAN_SCORE' as const,
   MEAN_SCORE_DESC: 'MEAN_SCORE_DESC' as const
}

export const enumModRole = {
   ADMIN: 'ADMIN' as const,
   LEAD_DEVELOPER: 'LEAD_DEVELOPER' as const,
   DEVELOPER: 'DEVELOPER' as const,
   LEAD_COMMUNITY: 'LEAD_COMMUNITY' as const,
   COMMUNITY: 'COMMUNITY' as const,
   DISCORD_COMMUNITY: 'DISCORD_COMMUNITY' as const,
   LEAD_ANIME_DATA: 'LEAD_ANIME_DATA' as const,
   ANIME_DATA: 'ANIME_DATA' as const,
   LEAD_MANGA_DATA: 'LEAD_MANGA_DATA' as const,
   MANGA_DATA: 'MANGA_DATA' as const,
   LEAD_SOCIAL_MEDIA: 'LEAD_SOCIAL_MEDIA' as const,
   SOCIAL_MEDIA: 'SOCIAL_MEDIA' as const,
   RETIRED: 'RETIRED' as const,
   CHARACTER_DATA: 'CHARACTER_DATA' as const,
   STAFF_DATA: 'STAFF_DATA' as const
}

export const enumMediaListSort = {
   MEDIA_ID: 'MEDIA_ID' as const,
   MEDIA_ID_DESC: 'MEDIA_ID_DESC' as const,
   SCORE: 'SCORE' as const,
   SCORE_DESC: 'SCORE_DESC' as const,
   STATUS: 'STATUS' as const,
   STATUS_DESC: 'STATUS_DESC' as const,
   PROGRESS: 'PROGRESS' as const,
   PROGRESS_DESC: 'PROGRESS_DESC' as const,
   PROGRESS_VOLUMES: 'PROGRESS_VOLUMES' as const,
   PROGRESS_VOLUMES_DESC: 'PROGRESS_VOLUMES_DESC' as const,
   REPEAT: 'REPEAT' as const,
   REPEAT_DESC: 'REPEAT_DESC' as const,
   PRIORITY: 'PRIORITY' as const,
   PRIORITY_DESC: 'PRIORITY_DESC' as const,
   STARTED_ON: 'STARTED_ON' as const,
   STARTED_ON_DESC: 'STARTED_ON_DESC' as const,
   FINISHED_ON: 'FINISHED_ON' as const,
   FINISHED_ON_DESC: 'FINISHED_ON_DESC' as const,
   ADDED_TIME: 'ADDED_TIME' as const,
   ADDED_TIME_DESC: 'ADDED_TIME_DESC' as const,
   UPDATED_TIME: 'UPDATED_TIME' as const,
   UPDATED_TIME_DESC: 'UPDATED_TIME_DESC' as const,
   MEDIA_TITLE_ROMAJI: 'MEDIA_TITLE_ROMAJI' as const,
   MEDIA_TITLE_ROMAJI_DESC: 'MEDIA_TITLE_ROMAJI_DESC' as const,
   MEDIA_TITLE_ENGLISH: 'MEDIA_TITLE_ENGLISH' as const,
   MEDIA_TITLE_ENGLISH_DESC: 'MEDIA_TITLE_ENGLISH_DESC' as const,
   MEDIA_TITLE_NATIVE: 'MEDIA_TITLE_NATIVE' as const,
   MEDIA_TITLE_NATIVE_DESC: 'MEDIA_TITLE_NATIVE_DESC' as const,
   MEDIA_POPULARITY: 'MEDIA_POPULARITY' as const,
   MEDIA_POPULARITY_DESC: 'MEDIA_POPULARITY_DESC' as const
}

export const enumAiringSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   MEDIA_ID: 'MEDIA_ID' as const,
   MEDIA_ID_DESC: 'MEDIA_ID_DESC' as const,
   TIME: 'TIME' as const,
   TIME_DESC: 'TIME_DESC' as const,
   EPISODE: 'EPISODE' as const,
   EPISODE_DESC: 'EPISODE_DESC' as const
}

export const enumActivityType = {
   TEXT: 'TEXT' as const,
   ANIME_LIST: 'ANIME_LIST' as const,
   MANGA_LIST: 'MANGA_LIST' as const,
   MESSAGE: 'MESSAGE' as const,
   MEDIA_LIST: 'MEDIA_LIST' as const
}

export const enumActivitySort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   PINNED: 'PINNED' as const
}

export const enumThreadSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const,
   TITLE: 'TITLE' as const,
   TITLE_DESC: 'TITLE_DESC' as const,
   CREATED_AT: 'CREATED_AT' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   REPLIED_AT: 'REPLIED_AT' as const,
   REPLIED_AT_DESC: 'REPLIED_AT_DESC' as const,
   REPLY_COUNT: 'REPLY_COUNT' as const,
   REPLY_COUNT_DESC: 'REPLY_COUNT_DESC' as const,
   VIEW_COUNT: 'VIEW_COUNT' as const,
   VIEW_COUNT_DESC: 'VIEW_COUNT_DESC' as const,
   IS_STICKY: 'IS_STICKY' as const,
   SEARCH_MATCH: 'SEARCH_MATCH' as const
}

export const enumThreadCommentSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const
}

export const enumLikeableType = {
   THREAD: 'THREAD' as const,
   THREAD_COMMENT: 'THREAD_COMMENT' as const,
   ACTIVITY: 'ACTIVITY' as const,
   ACTIVITY_REPLY: 'ACTIVITY_REPLY' as const
}

export const enumSiteTrendSort = {
   DATE: 'DATE' as const,
   DATE_DESC: 'DATE_DESC' as const,
   COUNT: 'COUNT' as const,
   COUNT_DESC: 'COUNT_DESC' as const,
   CHANGE: 'CHANGE' as const,
   CHANGE_DESC: 'CHANGE_DESC' as const
}

export const enumExternalLinkMediaType = {
   ANIME: 'ANIME' as const,
   MANGA: 'MANGA' as const,
   STAFF: 'STAFF' as const
}

export const enumSubmissionStatus = {
   PENDING: 'PENDING' as const,
   REJECTED: 'REJECTED' as const,
   PARTIALLY_ACCEPTED: 'PARTIALLY_ACCEPTED' as const,
   ACCEPTED: 'ACCEPTED' as const
}

export const enumSubmissionSort = {
   ID: 'ID' as const,
   ID_DESC: 'ID_DESC' as const
}

export const enumRevisionHistoryAction = {
   CREATE: 'CREATE' as const,
   EDIT: 'EDIT' as const
}

export const enumModActionType = {
   NOTE: 'NOTE' as const,
   BAN: 'BAN' as const,
   DELETE: 'DELETE' as const,
   EDIT: 'EDIT' as const,
   EXPIRE: 'EXPIRE' as const,
   REPORT: 'REPORT' as const,
   RESET: 'RESET' as const,
   ANON: 'ANON' as const
}
