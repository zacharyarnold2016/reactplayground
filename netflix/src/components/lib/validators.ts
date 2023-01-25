import * as yup from "yup";

// Example Validators to Show that i can write them
export const validateTitle = (value: any) => {
  let error;
  if (!value) {
    error = new Error("Must Provide a Title!");
  } else if (value.length <= 2) {
    error = new Error("Title Field Must be At Least 2 Characters Long");
  }
  return error;
};

export const validateRelease = (value: any) => {
  const checkDate = yup.date();
  let error;
  if (!value) {
    error = new Error("Must Provide A Release Date!");
  } else if (!checkDate.isValidSync(value)) {
    error = new Error("Must be in ISO format");
  }

  return error;
};

export const validateRating = (value: any) => {
  let error;
  if (!value) {
    error = new Error("Must Provide a Rating!");
  } else if (typeof value !== "number") {
    error = new Error("Rating must be a number");
  }
  return error;
};

export const movieFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title Too Short")
    .max(50, "Title Too Long")
    .required("Title Field is Required"),
  release_date: yup.date().required("Release Date Field Required"),
  poster_path: yup
    .string()
    .url("Please Provide Valid URL")
    .required("URL Field Required"),
  vote_average: yup.number().required().min(0).max(10),
  genres: yup.string().required("Please Provide a Genre"),
  runtime: yup.number().min(5).max(500).required(),
  overview: yup.string().min(5).max(2048).required(),
});
