import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStatus } from "../redux/selectors/films";
import { useSearchState } from "../hooks/useSearchState";
import {
  setCurrentGenre,
  setCurrentSort,
  setSearch,
} from "../redux/films/films";

const Test = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { getQueryString, values } = useSearchState();
  console.log(getQueryString());
  return (
    <div>
      <h1 onClick={() => dispatch(setCurrentGenre("Words"))}>
        {values.currentGenre}
      </h1>
      <h1
        onClick={() =>
          dispatch(setCurrentSort({ finalstring: "Words", option: "Hi" }))
        }
      >
        option 2
      </h1>
      <h1 onClick={() => dispatch(setCurrentGenre("new words"))}>option 3</h1>
    </div>
  );
};

export default Test;
