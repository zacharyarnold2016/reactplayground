import React, { useCallback } from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/components/util/Button.interface";
import { batch, useDispatch, useSelector } from "react-redux";
import { renderAdd } from "../../redux/films/forms";
import { filter } from "../../redux/films/api";
import { setFilms, setResults, setSearch } from "../../redux/films/films";
import { useSearchState } from "../../hooks/useSearchState";
import { selectStatus } from "../../redux/selectors/films";

const TopBar = () => {
  const getQueryString = useSearchState();
  const searchState = useSelector(selectStatus);
  const dispatch = useDispatch();
  const [trigger] = filter();

  const handleSearch = useCallback(
    async (event: any) => {
      event.preventDefault();
      const searchString = event.target[0].value;
      const queryString = getQueryString({
        currentGenre: searchState.currentGenre,
        currentSort: searchState.currentSort,
        currentSearch: searchString,
      });
      const searchResults = await trigger(queryString).unwrap();
      batch(() => {
        dispatch(setSearch(searchString));
        dispatch(setFilms(searchResults.data));
        dispatch(setResults(searchResults.totalAmount));
      });
    },
    [trigger, dispatch, getQueryString, searchState]
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
