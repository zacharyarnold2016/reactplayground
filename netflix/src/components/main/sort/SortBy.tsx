import React, { useState, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { SORTOPTIONS } from "../../../interfaces/enums/lists.enums";

const SortBy = () => {
  const [open, setOpen] = useState(false);

  const options = Object.values(SORTOPTIONS);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <div className="sortBy">
      <h1 style={{ color: "#555555" }}>Sort By</h1>
      <div style={{ display: "inline-flex" }}>
        <h1 onClick={handleOpen}>Release Year</h1>
        <AiFillCaretDown />
        {open && (
          <ul>
            {options.map((element) => {
              return (
                <li>
                  <button>{element}</button>
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
