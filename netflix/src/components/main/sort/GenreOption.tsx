import React, { useCallback, useEffect } from "react";
import {
  setCurrentGenre,
  setFilms,
  setResults,
} from "../../../redux/films/films";
import { batch, useDispatch, useSelector } from "react-redux";
import { filter } from "../../../redux/films/api";
import { selectStatus } from "../../../redux/selectors/films";
import { useSearchState } from "../../../hooks/useSearchState";

const GenreOption = (props: any) => {
  const searchState = useSelector(selectStatus);
  const getQueryString = useSearchState();
  const dispatch = useDispatch();
  const genre = props.genre.toString();
  const [trigger] = filter();

  const isSelect = useCallback(() => {
    if (props.genre === searchState.currentGenre) {
      return "highlighted";
    }
  }, [searchState.currentGenre, props.genre]);

  const sortGenre = useCallback(async () => {
    const queryString = getQueryString({
      currentGenre: genre,
      currentSort: searchState.currentSort,
      currentSearch: searchState.currentSearch,
    });
    const payload = await trigger(queryString).unwrap();

    batch(() => {
      dispatch(setCurrentGenre(genre));
      dispatch(setFilms(payload.data));
      dispatch(setResults(payload.totalAmount));
    });
  }, [dispatch, genre, getQueryString, searchState, trigger]);
  return (
    <h4 className={isSelect()} onClick={sortGenre}>
      {genre}
    </h4>
  );
};

export default GenreOption;
