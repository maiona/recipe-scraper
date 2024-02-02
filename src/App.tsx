import React from "react";
import "./App.css";
import { VideoFinder } from "./components";
import { useAppSelector } from "./store/hooks";
import SearchResults from "./components/SearchResults";

function App() {
  const channels = useAppSelector((state) => state.recipeFinder.channels);

  return (
    <div className="App">
      <header className="App-header">
        <VideoFinder />
      </header>
      { channels.length ? (<SearchResults channels={channels} />) : ''}
    </div>
  );
}

export default App;
