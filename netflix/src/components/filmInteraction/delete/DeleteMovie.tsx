import React from "react";
import Button from "../../util/Button";
import { ButtonType } from "../../../interfaces/components/util/Button.interface";
import { useDispatch, useSelector } from "react-redux";
import { closeForms, resetId } from "../../../redux/forms";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDeleteMovieMutation } from "../../../redux/api";

const DeleteMovie = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.forms);
  const [updatePost] = useDeleteMovieMutation();
  const refresh = () => {
    window.location.reload();
  };
  const deleteMovie = async () => {
    console.log(id);
    await updatePost(id);
    dispatch(closeForms());
    refresh();
    dispatch(resetId());
  };

  console.log(id);
  return (
    <div className="delete">
      <h1>Delete Movie?</h1>
      <AiFillCloseCircle onClick={() => dispatch(closeForms())} />
      <h2>Are you sure you want to delete this movie?</h2>
      <Button
        styling="--pri"
        type={ButtonType.BUTTON}
        text="Delete This"
        callback={deleteMovie}
      />
    </div>
  );
};

export default DeleteMovie;
