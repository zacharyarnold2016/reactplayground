import React from "react";
import { BsSearch } from "react-icons/bs";
import { imgFallback } from "../../helpers/imgFallback";
import { useSearchParams } from "react-router-dom";

const Details = ({ details, callback }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  const setDetails = callback;

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
          <h4>{details.release_date}</h4>
          <h4>{details.runtime}</h4>
        </div>
        <br />
        <h3 className="description">{details.overview}</h3>
      </div>
      <BsSearch
        onClick={() => {
          setDetails(undefined);
          setSearchParams();
        }}
        className="switchDetails"
      />
    </div>
  );
};

export default Details;
