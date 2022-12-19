import React, { useState, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SortBy = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <div className="sortBy">
      <h1 style={{ color: "#555555" }}>Sort By</h1>
      <div style={{ display: "inline-flex" }}>
        <h1 onClick={handleOpen}>Release Year</h1>
        <AiFillCaretDown />
        {open ? (
          <ul>
            <li>
              <button>Actors</button>
            </li>
            <li>
              <button>Acclaim</button>
            </li>
            <li>
              <button>Awards</button>
            </li>
            <li>
              <button>Popularity</button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};
export default SortBy;
