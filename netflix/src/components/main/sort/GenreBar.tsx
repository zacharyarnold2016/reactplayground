import React from "react";

const GenreBar = (props: any) => {
  const sortOptions = props.callback;
  const action = sortOptions.sortAction;
  const drama = sortOptions.sortDrama;
  const comedy = sortOptions.sortComedy;
  const horror = sortOptions.sortHorror;
  const documentary = sortOptions.sortDocumentary;
  const resetList = sortOptions.sortReset;
  return (
    <div className="genreBar">
      <h1 onClick={resetList} className="sortOption">
        All
      </h1>
      <h1 onClick={action} className="sortOption">
        Action
      </h1>
      <h1 onClick={drama} className="sortOption">
        Drama
      </h1>
      <h1 onClick={comedy} className="sortOption">
        Comedy
      </h1>
      <h1 onClick={horror} className="sortOption">
        Horror
      </h1>
      <h1 onClick={documentary} className="sortOption">
        Documentary
      </h1>
    </div>
  );
};

export default GenreBar;
