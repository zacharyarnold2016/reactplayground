import React from "react";
import MovieForm from "../MovieForm";

const EditMovie = (props: any) => {
  return (
    <div>
      <div className="addContainer">
        <h1 className="addMovieTitle">Edit Movie</h1>
        <span className="close" onClick={props.callback}>
          X
        </span>
        <MovieForm />
      </div>
    </div>
  );
};

export default EditMovie;
