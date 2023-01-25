import React, { useCallback } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { validateTitle } from "../lib/validators";

// Just a dumb little example of using Formiks Hooks
const MovieForm = (props: any) => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validateTitle,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default MovieForm;
