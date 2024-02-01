import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function VideoCard(props: any) {

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 350 }}>
        <CardContent>
          <Typography variant="h5">{props.snippet.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum Dolor Sit Amet
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
