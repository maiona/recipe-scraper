import React from "react";
import { YouTubeChannel } from "../Types";
import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";

export default function SearchResults({
  channels,
}: {
  channels: YouTubeChannel[];
}) {
  return (
    <Grid container spacing={4}>
      {channels.length && (
        channels.map((channel) => <VideoCard id={channel.id} key={'vc' + channel.snippet.channelId } snippet={channel.snippet} />)
      )}
    </Grid>
  );
}
