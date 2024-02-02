export interface InitialState {
  videos: YouTubeVideo[];
  channels: YouTubeChannel[];
  searchTerm: string;
  searchResults: [];
  nextPageToken: string | null;
}

export interface YouTubeVideo {}

export interface YouTubeChannel {
  id: {
    channelId: string;
    kind?: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    channelTitle: string;
    publishTime: Date;
  };
}
