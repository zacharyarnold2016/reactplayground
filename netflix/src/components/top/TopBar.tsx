import React, { useCallback } from "react";
import Button from "../util/Button";
import { ButtonType } from "../../interfaces/components/util/Button.interface";
import { useDispatch } from "react-redux";
import { renderAdd } from "../../redux/films/forms";
import generateUrl from "../../helpers/generateUrlString";
import { useSearchState } from "../../hooks/useSearchState";
import { useRouter } from "next/router";

const TopBar = () => {
  const urlParams = useSearchState();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = useCallback(
    async (event: any) => {
      event.preventDefault();
      const searchString = event.target[0].value;
      const { genre, sortBy } = urlParams;
      const newSearchState = {
        genre,
        sortBy,
        searchQuery: searchString,
      };
      const url = generateUrl(newSearchState);
      await router.push(url);
    },
    [router, urlParams]
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
