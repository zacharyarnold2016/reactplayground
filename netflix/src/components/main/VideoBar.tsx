// @ts-nocheck
import React, { useCallback, useState, useEffect } from "react";
import SortBar from "./sort/SortBar";
import Result from "./Results";
import FilmList from "./films/FilmList";

// This is only temporary while we're not fetching data from a server
import films from "../../dummyFilms";

const VideoBar = (props) => {
  const [videos, setVideos] = useState(films);

  /*
   * Trying to figure out a way to do this without having
   * create a new function for every single genre.
   * It's definitely me overlooking something, please point
   * me in the right direction.
   */
  const sortAction = () => {
    const sortedFilms = films.filter((element) => element.genre === "Action");
    setVideos(sortedFilms);
  };
  const sortDrama = () => {
    const sortedFilms = films.filter((element) => element.genre === "Drama");
    setVideos(sortedFilms);
  };
  const sortComedy = () => {
    const sortedFilms = films.filter((element) => element.genre === "Comedy");
    setVideos(sortedFilms);
  };
  const sortHorror = () => {
    const sortedFilms = films.filter((element) => element.genre === "Horror");
    setVideos(sortedFilms);
  };
  const sortDocumentary = () => {
    const sortedFilms = films.filter(
      (element) => element.genre === "Documentary"
    );
    setVideos(sortedFilms);
  };
  const sortReset = () => {
    setVideos(films);
  };
  const sortOptions = {
    sortAction,
    sortDrama,
    sortComedy,
    sortHorror,
    sortDocumentary,
    sortReset,
  };

  const [results, setResults] = useState(0);

  const getResults = useCallback(() => {
    console.log("Pinged!");
    const count = videos.length;
    setResults(count);
  }, [videos]);

  useEffect(getResults, [videos, getResults]);

  return (
    <div className="mainContainer">
      <SortBar callback={sortOptions} />
      <Result results={results} />
      <FilmList films={videos} callback={props.callback} />
    </div>
  );
};

export default VideoBar;
