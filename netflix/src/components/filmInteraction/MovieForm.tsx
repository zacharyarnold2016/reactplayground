import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/components/util/Button.interface";
import { closeForms } from "../../redux/films/forms";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  useAddMovieMutation,
  useEditMovieMutation,
} from "../../redux/films/api";
import { movieFormSchema } from "../lib/validators";

const MovieForm = (props: any) => {
  const [addMovie] = useAddMovieMutation();
  const [editMovie] = useEditMovieMutation();
  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.forms);
  const initialValues = {
    title: "",
    release_date: "",
    poster_path: "",
    vote_average: "",
    genres: "",
    runtime: "",
    overview: "",
  };
  const update = useCallback(
    async (
      {
        title,
        release_date,
        poster_path,
        vote_average,
        genres,
        runtime,
        overview,
      }: any,
      actions: any
    ) => {
      const genreArray: string[] = genres.split(" ");
      const runtimeAsNumber: number = parseInt(runtime);
      const voteNum = parseInt(vote_average);
      const film = {
        title,
        release_date,
        poster_path,
        vote_average: voteNum,
        genres: genreArray,
        runtime: runtimeAsNumber,
        overview,
        id,
      };

      if (props.type === "Add") {
        const payload = await addMovie(film);
        dispatch(closeForms());
        console.log(payload);
      } else if (props.type === "Edit") {
        const payload = await editMovie(film);
        dispatch(closeForms());
        console.log(payload);
      }
      actions.setSubmitting(false);
    },
    [id, props.type, addMovie, editMovie]
  );

  return (
    <div className="addContainer">
      <div className="close" onClick={() => dispatch(closeForms())}>
        <AiFillCloseCircle />
      </div>
      <h1 className="addMovieTitle">{props.type} Movie</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={movieFormSchema}
        onSubmit={(values, actions) => {
          update(values, actions);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="title">Title:</label>
              <Field id="title" name="title" placeholder={"Title"} />
              {errors.title && touched.title ? <h1>{errors.title}</h1> : null}
            </div>
            <div>
              <label htmlFor="release_date">Release Date:</label>
              <Field
                id="release_date"
                name="release_date"
                placeholder={"Release Date"}
              />
              {errors.release_date && touched.release_date ? (
                <h1>{errors.release_date}</h1>
              ) : null}
            </div>
            <div>
              <label htmlFor="poster_path">URL:</label>
              <Field
                id="poster_path"
                name="poster_path"
                placeholder={"https://"}
              />
              {errors.poster_path && touched.poster_path ? (
                <h1>{errors.poster_path}</h1>
              ) : null}
            </div>
            <div>
              <label htmlFor="vote_average">Rating:</label>
              <Field id="vote_average" name="vote_average" placeholder={7} />
              {errors.vote_average && touched.vote_average ? (
                <h1>{errors.vote_average}</h1>
              ) : null}
            </div>
            <div>
              <label htmlFor="genres">Genre</label>
              <Field id="genres" name="genres" placeholder={"Action"} />
              {errors.genres && touched.genres ? (
                <h1>{errors.genres}</h1>
              ) : null}
            </div>
            <div>
              <label htmlFor="runtime">Runtime</label>
              <Field id="runtime" name="runtime" placeholder={"Xmins"} />
              {errors.runtime && touched.runtime ? (
                <h1>{errors.runtime}</h1>
              ) : null}
            </div>
            <div>
              <label htmlFor="overview">Overview</label>
              <Field id="overview" name="overview" placeholder={"Overview"} />
              {errors.overview && touched.overview ? (
                <h1>{errors.overview}</h1>
              ) : null}
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
        )}
      </Formik>
    </div>
  );
};
export default MovieForm;
