import React from "react";
import { GENRES } from "../../../interfaces/enums/lists.enums";

const GenreOption = (props: any) => {
  const options = Object.values(GENRES);

  return (
    <>
      {options.map((element) => {
        return (
          <li className="sortOption" key={element.toString()}>
            {element}
          </li>
        );
      })}
    </>
  );
};

export default GenreOption;
