import React from "react";
import film from "../../../interfaces/Film.interface";

const Film = (props: film) => {
  return (
    <div className="filmContainer">
      <img src={props.img} alt="placeholder" />
      <div className="details">
        <h2>{props.name}</h2>
        <h4>{props.year}</h4>
        <h3>{props.genre}</h3>
      </div>
    </div>
  );
};

export default Film;
