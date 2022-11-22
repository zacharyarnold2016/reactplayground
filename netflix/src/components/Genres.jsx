// No actual logic here. Just some checkboxes.
import React from "react";

const Genres = () => {
  const genres = ["Horror", "Comedy", "Documentary", "Classics", "Action"];

  return genres.map((element) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input type="checkbox" id={element} value={element} />
      {element}
    </label>
  ));
};

export default Genres;
