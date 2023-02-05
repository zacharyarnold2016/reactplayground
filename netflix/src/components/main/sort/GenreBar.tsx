import React from "react";
import GenreOption from "./GenreOption";
import { GENRES } from "../../../interfaces/enums/lists.enums";

const GenreBar = () => {
  const genreOptions = Object.values(GENRES);
  return (
    <div className="genreBar">
      {genreOptions.map((genre) => {
        return (
          <li className="sortOption" key={genre.toString()}>
            <GenreOption genre={genre} />
          </li>
        );
      })}
    </div>
  );
};

export default GenreBar;
