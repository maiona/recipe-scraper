import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { searchYoutube } from "./reducers/searchYoutube";

const initialState: InitialState = {
  videos: [],
  channels: [],
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
};

const recipeSlice = createSlice({
  name: "recipeFinder",
  initialState,
  reducers: {
    clearChannels: (state) => {
        state.channels = [];
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchYoutube.fulfilled, (state, action) => {
      state.channels = action.payload.parsedChannelData;
      state.nextPageToken = action.payload.nextPageToken;
    });
  },
});

export const store = configureStore({
  reducer: {
    recipeFinder: recipeSlice.reducer,
  },
});

export const { clearChannels, changeSearchTerm, clearSearchTerm } = recipeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
