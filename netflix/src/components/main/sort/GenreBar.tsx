import React from "react";
import GenreOption from "./GenreOption";

const GenreBar = (props: any) => {
  return (
    <div className="genreBar">
      <GenreOption callback={props.callback} />
    </div>
  );
};

export default GenreBar;
