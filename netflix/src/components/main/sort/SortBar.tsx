import React from "react";
import SortBy from "./SortBy";
import GenreBar from "./GenreBar";

const SortBar = (props: any) => {
  return (
    <div className="sortBar">
      <GenreBar callback={props.callback} />
      <SortBy />
    </div>
  );
};

export default SortBar;
