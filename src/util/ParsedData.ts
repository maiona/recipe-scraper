import { YouTubeChannel } from "../Types";

export const parsedYouTubeChannelData = async (
  items: any[]
) => {
  try {
    const channels: YouTubeChannel[] = [];

    items.forEach((item: YouTubeChannel) => {
      channels.push(item);
    });

    return channels;
  } catch (error) {
    console.error(error);
    return [];
  }
};
