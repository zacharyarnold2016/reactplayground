import React, { useState } from "react";

const SortBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="sortBar">
      <div className="genreBar">
        <h1>Action</h1>
        <h1>Drama</h1>
        <h1>Comedy</h1>
        <h1>Horror</h1>
        <h1>Documentary</h1>
      </div>
      <div className="sortBy">
        <h1 style={{ color: "#555555" }}>Sort By</h1>
        <h1 onClick={handleOpen}>Release Year</h1>
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

export default SortBar;
