import React from "react";
import Button from "../../util/Button";
import { ButtonType } from "../../../interfaces/components/util/Button.interface";
import { useDispatch } from "react-redux";
import { closeForms } from "../../../redux/forms";
import { AiFillCloseCircle } from "react-icons/ai";

const DeleteMovie = () => {
  const dispatch = useDispatch();
  return (
    <div className="delete">
      <h1>Delete Movie?</h1>
      <AiFillCloseCircle onClick={() => dispatch(closeForms())} />
      <h2>Are you sure you want to delete this movie?</h2>
      <Button styling="--pri" type={ButtonType.SUBMIT} text="Delete This" />
    </div>
  );
};

export default DeleteMovie;
