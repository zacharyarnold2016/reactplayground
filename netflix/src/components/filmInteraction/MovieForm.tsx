import React from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/Button.interface";

const MovieForm = (props: any) => {
  return (
    <form>
      {/* <h1 className="addMovieTitle">Add Movie</h1> */}
      <div className="formContainer">
        <label className="formLabel">
          Name:
          <input type="text" name="Title" className="formInput" />
        </label>
        <label className="formLabel">
          Release Date:
          <input type="text" name="Release Date" className="formInput" />
        </label>
        <label className="formLabel">
          Movie Url:
          <input type="text" name="Movie Url" className="formInput" />
        </label>
        <label className="formLabel">
          Rating:
          <input type="text" name="Rating" className="formInput" />
        </label>
        <label className="formLabel">
          Genre:
          <input type="text" name="Genre" className="formInput" />
        </label>
        <label className="formLabel">
          RunTime:
          <input type="text" name="RunTime" className="formInput" />
        </label>
        <div className="overviewForm">
          Overview:
          <input type="text" name="Overview" className="overview" />
        </div>
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
