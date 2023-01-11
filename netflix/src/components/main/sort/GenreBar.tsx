import React from "react";
import GenreOption from "./GenreOption";
import { GENRES } from "../../../interfaces/enums/lists.enums";

const GenreBar = (props: any) => {
  const options = Object.values(GENRES);
  return (
    <div className="genreBar">
      {options.map((genre) => {
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
