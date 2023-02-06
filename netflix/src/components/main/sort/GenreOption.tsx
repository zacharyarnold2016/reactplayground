import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import generateUrl from "../../../helpers/generateUrlString";

const GenreOption = (props: any) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchState = useParams();
  const genre = props.genre.toString();

  const isSelect = useCallback(() => {
    if (props.genre === searchParams.get("genre")) {
      return "highlighted";
    }
  }, [searchParams.get("genre"), props.genre]);

  const sortGenre = useCallback(async () => {
    if (genre !== searchParams.get("genre")) {
      const { searchQuery } = searchState;
      const sortBy = searchParams.get("sortBy");
      const newSearchState = {
        sortBy,
        searchQuery,
        genre,
      };
      const url = generateUrl(newSearchState);
      navigate(url);
    }
  }, [genre, navigate, searchParams]);
  return (
    <h4 className={isSelect()} onClick={sortGenre}>
      {genre}
    </h4>
  );
};

export default GenreOption;
