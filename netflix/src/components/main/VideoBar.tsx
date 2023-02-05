// @ts-nocheck
import React from "react";
import SortBar from "./sort/SortBar";
import Result from "./Results";
import FilmList from "./films/FilmList";

const VideoBar = (props: any) => {
  return (
    <div className="mainContainer">
      <SortBar />
      <Result />
      <FilmList callback={props.callback} />
    </div>
  );
};

export default VideoBar;
