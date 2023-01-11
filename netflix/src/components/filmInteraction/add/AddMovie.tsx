import React from "react";
import MovieForm from "../MovieForm";
import { useDispatch } from "react-redux";
import { closeForms } from "../../../redux/forms";
import { AiFillCloseCircle } from "react-icons/ai";

const AddMovie = () => {
  const dispatch = useDispatch();
  return (
    <div className="addContainer">
      <h1 className="addMovieTitle">Add Movie</h1>
      <div className="close" onClick={() => dispatch(closeForms())}>
        <AiFillCloseCircle />
      </div>
      <MovieForm />
    </div>
  );
};

export default AddMovie;
