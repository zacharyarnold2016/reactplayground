import React from "react";
import { useDispatch } from "react-redux";
import { setDetails } from "../../../redux/details";

const Film = (props: any) => {
  const dispatch = useDispatch();
  return (
    <div className="filmContainer">
      <img
        src={props.poster_path}
        alt="placeholder"
        onClick={() => dispatch(setDetails(props))}
      />
      <div className="--details">
        <h2>{props.title}</h2>
        <h4>{props.year}</h4>
        <h3>{props.genres[0]}</h3>
      </div>
    </div>
  );
};

export default Film;
