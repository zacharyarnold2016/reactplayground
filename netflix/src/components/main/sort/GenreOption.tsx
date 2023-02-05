import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import generateUrl from "../../../helpers/generateUrlString";

const GenreOption = (props: any) => {
  const navigate = useNavigate();
  const searchState = useParams();
  const genre = props.genre.toString();

  const isSelect = useCallback(() => {
    if (props.genre === searchState.genre) {
      return "highlighted";
    }
  }, [searchState.genre, props.genre]);

  const sortGenre = useCallback(async () => {
    if (genre !== searchState.genre) {
      const { sortBy, searchQuery } = searchState;
      const newSearchState = {
        sortBy,
        searchQuery,
        genre,
      };
      const url = generateUrl(newSearchState);
      navigate(url);
    }
    console.log(searchState);
  }, [genre, navigate, searchState]);
  return (
    <h4 className={isSelect()} onClick={sortGenre}>
      {genre}
    </h4>
  );
};

export default GenreOption;
