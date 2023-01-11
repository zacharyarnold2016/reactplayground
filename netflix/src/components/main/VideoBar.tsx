// @ts-nocheck
import React, { useCallback, useState, useEffect } from "react";
import SortBar from "./sort/SortBar";
import Result from "./Results";
import FilmList from "./films/FilmList";


const VideoBar = (props) => {
  return (
    <div className="mainContainer">
      <SortBar />
      <Result />
      <FilmList />
    </div>
  );
};

export default VideoBar;
