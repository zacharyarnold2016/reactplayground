import React from "react";
import Button from "../../util/Button";
import { ButtonType } from "../../../interfaces/Button.interface";

const DeleteMovie = () => {
  return (
    <div>
      <h1>Delete Movie?</h1>
      <h2>Are you sure you want to delete this movie?</h2>
      <Button styling="primary" type={ButtonType.SUBMIT} />
    </div>
  );
};

export default DeleteMovie;
