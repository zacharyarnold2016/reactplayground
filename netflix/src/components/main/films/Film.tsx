import React from "react";
import { useDispatch } from "react-redux";
import { setDetails } from "../../../redux/films/details";
import { imgFallback } from "../../../helpers/imgFallback";
import { useSearchParams } from "react-router-dom";

const Film = (props: any) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  return (
    <div className="filmContainer">
      <img
        src={props.poster_path}
        onClick={() => setSearchParams({ movieId: props.id })}
        className="listImage"
        alt="Failed to find Poster Path"
        onError={(currentTarget) => imgFallback(currentTarget)}
      />
      <div className="--details">
        <h2>{props.title}</h2>
        <h3 className="release_date">{props.release_date}</h3>
        <h3 style={{ color: "#979797" }}>{props.genres[0]}</h3>
      </div>
    </div>
  );
};

export default Film;
