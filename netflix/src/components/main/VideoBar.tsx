import React from "react";
import SortBar from "./SortBar";
import Result from "./Results";
import FilmList from "./films/FilmList";

const VideoBar = () => {
  return (
    <div className="mainContainer">
      <SortBar />
      <Result />
      <FilmList />
    </div>
  );
};

export default VideoBar;
