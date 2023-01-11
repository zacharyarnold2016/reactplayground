import * as React from "react";
import { filterGenre } from "../../../redux/api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { setFilms } from "../../../redux/films";
const SortByOption = ({ option }: any) => {
  const { currentGenre } = useSelector((state: RootState) => state.film);
  const dispatch = useDispatch();
  const string = option.toLowerCase();
  const array = string.split(" ");
  const finalstring = array.join("_");
  const [trigger, result] = filterGenre(option);

  const sortAll = async () => {
    const payload = await trigger({
      genre: currentGenre,
      sortBy: finalstring,
    }).unwrap();
    dispatch(setFilms(payload.data));
  };

  return (
    <h4 style={{ padding: "1px" }} onClick={sortAll}>
      {option}
    </h4>
  );
};

export default SortByOption;
