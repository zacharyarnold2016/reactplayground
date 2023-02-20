import React, { useCallback } from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/components/util/Button.interface";
import { useDispatch } from "react-redux";
import { renderAdd } from "../../redux/films/forms";
import { usePageState } from "../../hooks/usePageState";

const TopBar = () => {
  const handlePage = usePageState();
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    async (event: any) => {
      event.preventDefault();
      const searchString = event.target[0].value;
      await handlePage(searchString, "search");
    },
    [handlePage]
  );

  return (
    <div className="searchContainer">
      <form onSubmit={handleSearch}>
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
        callback={() => dispatch(renderAdd())}
      />
      <h2 className="logo">Find Your Movie</h2>
    </div>
  );
};

export default TopBar;
