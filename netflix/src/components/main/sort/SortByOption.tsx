import * as React from "react";
import { filterGenre } from "../../../redux/api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { setFilms } from "../../../redux/films";
import { sortString } from "../../../helpers/sortHelperMethods";

const SortByOption = ({ option }: any) => {
  const { currentGenre } = useSelector((state: RootState) => state.film);
  const dispatch = useDispatch();
  const finalstring = sortString(option);
  const [trigger] = filterGenre(option);

  const sortAll = async () => {
    const payload = await trigger({
      genre: currentGenre,
      sortBy: finalstring,
    }).unwrap();
    dispatch(setFilms(payload.data));
  };

  return (
    <h5 style={{ padding: "1px" }} onClick={sortAll}>
      {option}
    </h5>
  );
};

export default SortByOption;
