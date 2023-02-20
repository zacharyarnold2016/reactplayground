import React from "react";

const Result = ({ results }: { results: number }) => {
  return (
    <div className="searchResults">
      <h2> {results} movie found</h2>
    </div>
  );
};

export default Result;
