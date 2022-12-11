import React from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/Button.interface";

const TopBar = () => {
  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        type="text"
        name="Search"
        placeholder="Search"
      />
      <Button styling="--submit" purpose={ButtonType.SUBMIT} text="Submit" />
      <Button
        styling="--addMovie"
        purpose={ButtonType.BUTTON}
        text="Add Movie"
      />
      <h2 className="logo">Find Your Movie</h2>
    </div>
  );
};

export default TopBar;
