import React from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/components/util/Button.interface";

const MovieForm = () => {
  return (
    <form>
      {/* Correct CSS for this File */}
      <div className="formContainer">
        <div className="formElement">
          <label className="formLabel">Name:</label>
          <input type="text" name="Title" className="formInput" />
        </div>
        <div className="formElement">
          <label className="formLabel">Release Date:</label>
          <input type="text" name="Release Date" className="formInput" />
        </div>
        <div className="formElement">
          <label className="formLabel">Movie Url:</label>
          <input type="text" name="Movie Url" className="formInput" />
        </div>
        <div className="formElement">
          <label className="formLabel">Rating:</label>
          <input type="text" name="Rating" className="formInput" />
        </div>
        <div className="formElement">
          <label className="formLabel">Genre:</label>
          <input type="text" name="Genre" className="formInput" />
        </div>
        <div className="formElement">
          <label className="formLabel">RunTime:</label>
          <input type="text" name="RunTime" className="formInput" />
        </div>
        <div className="formElement">
          <div className="overviewForm">Overview:</div>
          <input type="text" name="Overview" className="overview" />
        </div>
        <div />
        <div />
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
      </div>
    </form>
  );
};
export default MovieForm;
