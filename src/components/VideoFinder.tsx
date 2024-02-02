import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { searchYoutube } from "../store/reducers/searchYoutube";
import { changeSearchTerm, clearChannels } from '../store';

export default function VideoFinder() {
  
  const searchTerm = useAppSelector((state) => state.recipeFinder.searchTerm);

  const dispatch = useAppDispatch();

  const btnCLick = (): void => {
    dispatch(clearChannels());
    dispatch(searchYoutube(false));
  };

  return (
    <Card sx={{ minWidth: 600 }}>
      <CardContent>
        <Typography variant="h3">Recipe Scraper</Typography>
        <Typography variant="body2" color="text.secondary">
          Paste or type a video ID in the input below to get it's description.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              id="txtChannel"
              label="Query"
              placeholder="Enter a term to search on YouTube..."
              value={searchTerm}
              onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Button id="btnFetch" onClick={btnCLick}>
              Search
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
