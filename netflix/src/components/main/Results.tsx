import React from "react";

const Result = (props: any) => {
  return (
    <div className="searchResults">
      <h2> {props.results} Results</h2>
    </div>
  );
};

export default Result;
