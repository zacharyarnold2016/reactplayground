import React, { useState, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { SORTOPTIONS } from "../../../interfaces/enums/lists.enums";
import SortByOption from "./SortByOption";

const SortBy = () => {
  const [open, setOpen] = useState(false);
  const { currentSortString } = useSelector((state: any) => state.film);

  const options = Object.values(SORTOPTIONS);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <div className="sortBy">
      <h1 style={{ color: "#555555", paddingRight: "5px" }}>Sort By: </h1>
      <div style={{ display: "inline-flex" }}>
        <h1 onClick={handleOpen}>
          {currentSortString} <AiFillCaretDown className="caret" />
        </h1>

        {open && (
          <ul>
            {options.map((element) => {
              return (
                <li key={element.toString()}>
                  <SortByOption option={element} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default SortBy;
