import React, { useCallback } from "react";

const GenreBar = () => {
  const ding = useCallback(() => {
    console.log("DING!");
  }, []);
  return (
    <div className="genreBar">
      <h1 onClick={ding} className="sortOption">
        Action
      </h1>
      <h1 onClick={ding} className="sortOption">
        Drama
      </h1>
      <h1 onClick={ding} className="sortOption">
        Comedy
      </h1>
      <h1 onClick={ding} className="sortOption">
        Horror
      </h1>
      <h1 onClick={ding} className="sortOption">
        Documentary
      </h1>
    </div>
  );
};

export default GenreBar;
