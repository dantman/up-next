import clsx from 'clsx';
import { useLiveQuery } from 'dexie-react-hooks';
import { Duration } from 'luxon';
import { mediaDB } from '../../../local-db/mediadb';
import { RawUserConsumptionData } from '../../../local-db/userconsumptiondb';
import { BackgroundCoveringImage } from '../ui/BackgroundCoveringImage';
import { MediaCoverImage } from '../ui/MediaCoverImage';

export interface AnimeMediaCardProps {
	mediaId: number;
	mediaConsumption: RawUserConsumptionData;
}

/**
 * Interactive card interface displaying an AniList media entry and consumption info
 */
export function AnimeMediaCard(props: AnimeMediaCardProps) {
	const { mediaId, mediaConsumption } = props;
	const media = useLiveQuery(() => mediaDB.media.get(mediaId), [mediaId]);

	// @todo Store user preference for what title language to display

	return (
		<div
			className={clsx('relative flex flex-row rounded-md bg-indigo-50 shadow')}
		>
			{media?.bannerImage ? (
				<BackgroundCoveringImage
					src={media.bannerImage}
					className="rounded-md opacity-10"
				/>
			) : undefined}
			<div className={clsx('relative flex flex-row')}>
				<MediaCoverImage
					className="w-[100px] rounded-l-md"
					coverImage={media?.coverImage}
				/>
				<div className="flex-1 p-2">
					<p>
						{media?.title.english || media?.title.romaji || media?.title.native}
					</p>
					<p>
						{media?.format ?? '?'}
						{' · '}
						{mediaConsumption?.progress}/{media?.episodes ?? '?'}
					</p>
					{media?.nextAiringEpisode ? (
						<p>
							Episode {media.nextAiringEpisode.episode} in{' '}
							{Duration.fromObject({
								seconds: media.nextAiringEpisode.timeUntilAiring,
							})
								.shiftTo('days')
								.toHuman()}
						</p>
					) : media?.status === 'FINISHED' ? (
						<p>Finished airing</p>
					) : undefined}
				</div>
			</div>
		</div>
	);
}
