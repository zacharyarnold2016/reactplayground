import React from "react";
import MovieForm from "../MovieForm";
import { useDispatch } from "react-redux";
import { closeForms } from "../../../redux/forms";
import { AiFillCloseCircle } from "react-icons/ai";

const EditMovie = (props: any) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="addContainer">
        <h1 className="addMovieTitle">Edit Movie</h1>
        <div className="close" onClick={() => dispatch(closeForms())}>
          <AiFillCloseCircle />
        </div>
        <MovieForm />
      </div>
    </div>
  );
};

export default EditMovie;
