import React from "react";
import Button from "../util/Button";
import { ButtonStyle, ButtonType } from "../../interfaces/Button.interface";

const TopBar = () => {
  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        type="text"
        name="Search"
        placeholder="Search"
      />
      <Button style={ButtonStyle.D} purpose={ButtonType.SUBMIT} text="Submit" />
      <div className="addMovie">
        <Button
          style={ButtonStyle.B}
          purpose={ButtonType.BUTTON}
          text="Add Movie"
        />
      </div>
      <h2 className="logo">Find Your Movie</h2>
    </div>
  );
};

export default TopBar;
