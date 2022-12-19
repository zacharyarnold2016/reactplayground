import React from "react";
import MovieForm from "../MovieForm";

const AddMovie = (props: any) => {
  return (
    <div className="addContainer">
      <h1 className="addMovieTitle">Add Movie</h1>
      <span className="close" onClick={props.callback}>
        X
      </span>
      <MovieForm />
    </div>
  );
};

export default AddMovie;
