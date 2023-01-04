import React, { useCallback, useState } from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/Button.interface";
import AddMovie from "../filmInteraction/add/AddMovie";

const TopBar = () => {
  const [addMovie, setAddMovie] = useState(false);
  const handleFormState = useCallback(() => {
    setAddMovie(!addMovie);
  }, [addMovie]);

  return (
    <div className="searchContainer">
      <form>
        <input
          className="searchBar"
          type="text"
          name="Search"
          placeholder="Search"
        />
        <Button styling="--submit" purpose={ButtonType.SUBMIT} text="Submit" />
      </form>
      <Button
        styling="--addMovie"
        purpose={ButtonType.BUTTON}
        text="+Add Movie"
        callback={handleFormState}
      />
      {addMovie ? <AddMovie callback={handleFormState} /> : null}
      <h2 className="logo">Find Your Movie</h2>
    </div>
  );
};

export default TopBar;
