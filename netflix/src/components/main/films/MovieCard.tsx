import * as React from "react";
import ContextMenu from "./ContextMenu";
import Film from "./Film";

const MovieCard = (props: any) => {
  return (
    <div className="film">
      <li key={props.key}>
        <ContextMenu callback={props.callback} />
        <Film
          key={props.key}
          img={props.img}
          name={props.name}
          genre={props.genre}
          year={props.year}
        />
      </li>
    </div>
  );
};

export default MovieCard;
