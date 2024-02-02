import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { YouTubeChannel } from "../Types";

export default function VideoCard(props: YouTubeChannel) {
  const channel = props.snippet;
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 350 }}>
        <CardHeader title={channel.title} />
        <CardContent>
          <img src={channel.thumbnails.default.url} alt={channel.title} />
          <Typography variant="subtitle1" color="text.secondary">
            {channel.description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            TEST
          </Typography>
        </CardContent>
        <CardActions>
          <Button id="btnScrape" onClick={() => console.log(props)}>
            Scrape
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
