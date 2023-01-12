import React from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/components/util/Button.interface";
import { useDispatch } from "react-redux";
import { renderAdd } from "../../redux/forms";
import { search } from "../../redux/api";
import { setFilms } from "../../redux/films";

const TopBar = () => {
  const dispatch = useDispatch();
  const [trigger] = search();

  const handleSearch = async (event: any) => {
    event.preventDefault();
    const searchString = event.target[0].value;
    const searchResults = await trigger(searchString).unwrap();
    dispatch(setFilms(searchResults.data));
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleSearch}>
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
      <h2 className="logo">Find Your Movie</h2>
    </div>
  );
};

export default TopBar;
