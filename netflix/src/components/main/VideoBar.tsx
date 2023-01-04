// @ts-nocheck
import React, { useCallback, useState, useEffect } from "react";
import SortBar from "./sort/SortBar";
import Result from "./Results";
import FilmList from "./films/FilmList";

// This is only temporary while we're not fetching data from a server
import films from "../../dummyFilms";

const VideoBar = (props) => {
  const [videos, setVideos] = useState(films);
  const [results, setResults] = useState(0);

  const sort = (genre) => {
    let sortedFilms = films;
    if (genre === "All") {
      setVideos(sortedFilms);
    } else {
      const sortedFilms = films.filter((element) => element.genre === genre);
      setVideos(sortedFilms);
    }
  };

  const getResults = useCallback(() => {
    const count = videos.length;
    setResults(count);
  }, [videos]);

  // useEffect(initFetch, []);
  useEffect(getResults, [videos, getResults]);
  return (
    <div className="mainContainer">
      <SortBar callback={sort} />
      <Result results={results} />
      <FilmList films={videos} callback={props.callback} />
    </div>
  );
};

export default VideoBar;
