import React from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/Button.interface";
import AddMovie from "../filmInteraction/add/AddMovie";
import { useSelector, useDispatch } from "react-redux";
import { renderAdd } from "../../redux/forms";

const TopBar = () => {
  const { addMovie } = useSelector((state: any) => state.forms);
  const dispatch = useDispatch();

  return (
    <div className="searchContainer">
      <form>
        <input
          className="searchBar"
          type="text"
          name="Search"
          placeholder="Search"
        />
        {/* Make into a Button, remove submit option. requests will be handled through redux !routing */}
        <Button styling="--submit" purpose={ButtonType.SUBMIT} text="Submit" />
      </form>
      <Button
        styling="--addMovie"
        purpose={ButtonType.BUTTON}
        text="+Add Movie"
        callback={() => dispatch(renderAdd())}
      />
      {addMovie && <AddMovie />}
      <h2 className="logo">Find Your Movie</h2>
    </div>
  );
};

export default TopBar;
