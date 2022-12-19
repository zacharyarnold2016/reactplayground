import React from "react";
import Button from "../../util/Button";
import { ButtonType } from "../../../interfaces/Button.interface";

const DeleteMovie = () => {
  return (
    <div className="delete">
      <h1>Delete Movie?</h1>
      <h2>Are you sure you want to delete this movie?</h2>
      <Button styling="--pri" type={ButtonType.SUBMIT} text="Delete This" />
    </div>
  );
};

export default DeleteMovie;
