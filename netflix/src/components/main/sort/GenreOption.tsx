import React, { useCallback, useEffect } from "react";
import { setCurrentGenre, setFilms } from "../../../redux/films";
import { useDispatch, useSelector } from "react-redux";
import { filterGenre } from "../../../redux/api";

const GenreOption = (props: any) => {
  const dispatch = useDispatch();
  const genre = props.genre.toString();
  const [trigger, result] = filterGenre(genre);
  const sortGenre = async () => {
    const payload = await trigger({ genre }).unwrap();
    dispatch(setCurrentGenre(genre));
    dispatch(setFilms(payload.data));
  };
  useEffect(() => {}, [result]);
  return <h3 onClick={sortGenre}>{genre}</h3>;
};

export default GenreOption;
