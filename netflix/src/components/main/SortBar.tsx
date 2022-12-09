import React, { useState, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SortBar = () => {
  const [open, setOpen] = useState(false);

  const ding = useCallback(() => {
    console.log("DING!");
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className="sortBar">
      <div className="genreBar">
        <h1 onClick={ding} className="sortOption">
          Action
        </h1>
        <h1 onClick={ding} className="sortOption">
          Drama
        </h1>
        <h1 onClick={ding} className="sortOption">
          Comedy
        </h1>
        <h1 onClick={ding} className="sortOption">
          Horror
        </h1>
        <h1 onClick={ding} className="sortOption">
          Documentary
        </h1>
      </div>
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
    </div>
  );
};

export default SortBar;
