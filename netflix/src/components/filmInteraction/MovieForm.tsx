import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/components/util/Button.interface";
import { closeForms } from "../../redux/films/forms";
import { AiFillCloseCircle } from "react-icons/ai";

const MovieForm = (props: any) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.forms);
  const initialValues = {
    title: "",
    releaseDate: "",
    movieUrl: "",
    rating: "",
    genre: "",
    runtime: "",
    overview: "",
  };
  return (
    <div className="addContainer">
      <div className="close" onClick={() => dispatch(closeForms())}>
        <AiFillCloseCircle />
      </div>
      <h1 className="addMovieTitle">{props.type} Movie</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          if (props.type === "Add") {
            console.log("ADD");
          } else if (props.type === "Edit") {
            console.log("EDIT");
            console.log(id);
          }
          console.log(values, actions);
          alert(values.title);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <Field id="title" name="title" placeholder={"Title"} />
          </div>
          <div>
            <label htmlFor="releaseDate">Release Date:</label>
            <Field
              id="releaseDate"
              name="releaseDate"
              placeholder={"Release Date"}
            />
          </div>
          <div>
            <label htmlFor="movieUrl">URL:</label>
            <Field id="movieUrl" name="movieUrl" placeholder={"https://"} />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <Field id="rating" name="rating" placeholder={"7.8"} />
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <Field id="genre" name="genre" placeholder={"Action"} />
          </div>
          <div>
            <label htmlFor="runtime">Runtime</label>
            <Field id="runtime" name="runtime" placeholder={"Xmins"} />
          </div>
          <div>
            <label htmlFor="overview">Overview</label>
            <Field id="overview" name="overview" placeholder={"Overview"} />
          </div>
          <div className="addMovieButtons">
            <Button
              styling="addMovieReset"
              purpose={ButtonType.BUTTON}
              text="Reset"
            />
            <Button
              styling="addMovieSubmit"
              purpose={ButtonType.SUBMIT}
              text="Submit"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default MovieForm;
