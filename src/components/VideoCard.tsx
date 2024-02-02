import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./VideoCard.css";
import { YouTubeChannel } from "../Types";

export default function VideoCard(props: YouTubeChannel) {
  const channel = props.snippet;
  const pub = new Date(channel.publishedAt);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayDeclination = [
    "th",
    "st",
    "nd",
    "rd",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
  ];
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 350 }}>
        <CardHeader title={channel.title} />
        <CardContent>
          <img
            className="channelThumbnail"
            src={channel.thumbnails.default.url}
            alt={channel.title}
          />
          <Typography variant="subtitle1" color="text.secondary">
            {channel.description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Created on {months[pub.getMonth()]} {pub.getDate()}
            <sup>
              {
                dayDeclination[
                  pub.getDate() >= 10 && pub.getDate() <= 13
                    ? 0
                    : pub.getDate() % 10
                ]
              }
            </sup>
            , {pub.getFullYear()}
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
