import React from "react";
import { imgFallback } from "../../../helpers/imgFallback";
import { useSearchParams } from "react-router-dom";

const Film = (props: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") as string;
  const searchQuery = searchParams.get("searchQuery") as string;

  return (
    <div className="filmContainer">
      <img
        src={props.poster_path}
        onClick={() => {
          const params = { sortBy, searchQuery, movieId: props.id };
          setSearchParams(params);
        }}
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
