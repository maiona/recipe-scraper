import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { YOUTUBE_API_URL } from "../../util/constants";
import { parsedYouTubeChannelData } from "../../util";
import { YouTubeChannel } from "../../Types";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const searchYoutube = createAsyncThunk(
  "recipeFinder/searchYoutube",
  async (isNext: boolean, { getState }) => {
    const {
      recipeFinder: { nextPageToken: nextPageTokenFromState, channels, searchTerm },
    } = getState() as RootState;

    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?key=${API_KEY}&maxResults=20&q="${searchTerm}"&part=snippet&type=channel`
    );

    const parsedChannelData: YouTubeChannel[] = await parsedYouTubeChannelData(
      items
    );
    return {
      parsedChannelData: [...channels, ...parsedChannelData],
      nextPageToken: nextPageToken,
    };
  }
);
