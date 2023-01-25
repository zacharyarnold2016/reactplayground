import * as React from "react";
import { filter } from "../../../redux/films/api";
import { useSelector, useDispatch, batch } from "react-redux";
import { setCurrentSort, setFilms } from "../../../redux/films/films";
import { sortString } from "../../../helpers/sortHelperMethods";
import { selectStatus } from "../../../redux/selectors/films";
import { useSearchState } from "../../../hooks/useSearchState";

const SortByOption = ({ option }: any) => {
  const dispatch = useDispatch();
  const searchState = useSelector(selectStatus);
  const getQueryString = useSearchState();
  const finalstring: string = sortString(option);
  const [trigger] = filter(option);

  const sortAll = async () => {
    const queryString = getQueryString({
      currentGenre: searchState.currentGenre,
      currentSort: finalstring,
      currentSearch: searchState.currentSearch,
    });
    const payload = await trigger(queryString).unwrap();
    console.log(payload);
    const options = { finalstring, option };
    batch(() => {
      dispatch(setCurrentSort(options));
      dispatch(setFilms(payload.data));
    });
  };

  return (
    <h5 style={{ padding: "1px" }} onClick={sortAll}>
      {option}
    </h5>
  );
};

export default SortByOption;
