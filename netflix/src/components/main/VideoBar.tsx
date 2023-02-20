// @ts-nocheck
import React from "react";
import SortBar from "./sort/SortBar";
import Result from "./Results";
import FilmList from "./films/FilmList";

const VideoBar = (props: any) => {
  return (
    <div className="mainContainer">
      <SortBar />
      <Result results={props.films.totalAmount} />
      <FilmList callback={props.callback} films={props.films} />
    </div>
  );
};

export default VideoBar;
