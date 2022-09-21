import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import { ChannelCard, Loader, VideoCard } from '.';
import { IRootVideo } from '../models';

interface IVideosProps {
  videos: IRootVideo[];
  direction?: 'row' | 'column';
}

const Videos: FC<IVideosProps> = ({
  videos,
  direction = 'row'
}: IVideosProps) => {
  if (!videos.length) return <Loader />;
  return (
    <Stack direction={direction} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((video: IRootVideo, index: number) => {
        return (
          <Box key={video.id.videoId ?? video.id.channelId}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
