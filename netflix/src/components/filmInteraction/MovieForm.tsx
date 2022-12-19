import React from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/Button.interface";

const MovieForm = (props: any) => {
  return (
    <form>
      {/* Correct CSS for this File */}
      <div className="formContainer">
        <label className="formLabel">Name:</label>
        <input type="text" name="Title" className="formInput" />
        <label className="formLabel">Release Date:</label>
        <input type="text" name="Release Date" className="formInput" />
        <label className="formLabel">Movie Url:</label>
        <input type="text" name="Movie Url" className="formInput" />
        <label className="formLabel">Rating:</label>
        <input type="text" name="Rating" className="formInput" />
        <label className="formLabel">Genre:</label>
        <input type="text" name="Genre" className="formInput" />
        <label className="formLabel">RunTime:</label>
        <input type="text" name="RunTime" className="formInput" />
        <div className="overviewForm">Overview:</div>
        <input type="text" name="Overview" className="overview" />
        <div />
        <div />
        <div className="addMovieButtons">
          <Button
            styling="addMovieSubmit"
            purpose={ButtonType.SUBMIT}
            text="Submit"
          />
          <Button
            styling="addMovieReset"
            purpose={ButtonType.BUTTON}
            text="Reset"
          />
        </div>
      </div>
    </form>
  );
};
export default MovieForm;
