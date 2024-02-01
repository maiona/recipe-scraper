import React from "react";
import "./App.css";
import { VideoFinder } from "./components";
import VideoCard from "./components/VideoCard";
import { Grid } from "@mui/material";

function App() {
  const videoMock = [
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    },
    {
      id: "abcde",
      title: "Eric Anders",
    },
    {
      id: "fghij",
      title: "Isaac Newton",
    },
    {
      id: "klmno",
      title: "Moms channel",
    }
  ];

  const videos = videoMock.map((video) => (
    <VideoCard key={"vc" + video.id} snippet={video} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <VideoFinder />
      </header>

      <Grid container spacing={4}>
        {videos}
      </Grid>
    </div>
  );
}

export default App;
