import React from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { details } from "../../interfaces/details/Details.interface";
import { closeDetails } from "../../redux/films/details";
import { imgFallback } from "../../helpers/imgFallback";

const Details = ({ details }: details) => {
  const dispatch = useDispatch();

  return (
    <div className="details">
      <img
        src={details.poster_path}
        alt="Placeholder"
        onError={(currentTarget) => imgFallback(currentTarget)}
      />
      <div>
        <div className="detailHead">
          <h1>{details.title}</h1>
          <h2 className="rating">{details.vote_average}</h2>
          <h5>{details.genres[0]}</h5>
        </div>
        <div className="detailsSubtext">
          <h2>{details.release_date}</h2>
          <h2>{details.runtime}</h2>
        </div>
        <br />
        <h3 className="description">{details.overview}</h3>
      </div>
      <BsSearch
        onClick={() => dispatch(closeDetails())}
        className="switchDetails"
      />
    </div>
  );
};

export default Details;
