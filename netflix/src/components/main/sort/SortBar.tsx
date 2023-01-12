import React from "react";
import SortBy from "./SortBy";
import GenreBar from "./GenreBar";

const SortBar = () => {
  return (
    <div className="sortBar">
      <GenreBar />
      <SortBy />
    </div>
  );
};

export default SortBar;
