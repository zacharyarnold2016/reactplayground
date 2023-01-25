import React from "react";
import { useSelector } from "react-redux";

const Result = (props: any) => {
  const results = useSelector((state: any) => state.film.results);
  return (
    <div className="searchResults">
      <h2> {results} Results</h2>
    </div>
  );
};

export default Result;
