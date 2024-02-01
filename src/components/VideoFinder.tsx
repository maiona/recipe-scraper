import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function VideoFinder() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onVideoChange = (e: any) => setSearchTerm(e.target.value);
  const btnCLick = (): void => {
    console.log(`TODO: Fire YT API to search ${searchTerm}`);
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
              onChange={onVideoChange}
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
