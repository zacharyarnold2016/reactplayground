import React from "react";
import { GENRES } from "../../../interfaces/enums/lists.enums";

const GenreOption = (props: any) => {
  const options = Object.values(GENRES);

  return (
    <>
      {options.map((element) => {
        const bound = props.callback.bind(this, element);
        return (
          <li className="sortOption" onClick={bound} key={element.toString()}>
            {element}
          </li>
        );
      })}
    </>
  );
};

export default GenreOption;
