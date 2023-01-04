import React from "react";
import { BsSearch } from "react-icons/bs";

const Details = (props: any) => {
  const { callback } = props;
  const bound = callback.bind(this, false);
  return (
    <div className="details">
      <img src={props.details.img} alt="img" />
      <div className="description">
        <div>
          <div className="detailHead">
            <h1>{props.details.name}</h1>
            <h1 className="rating">{props.details.rating}</h1>
          </div>
          <div className="detailsSubtext">
            <h2>{props.details.year}</h2>
            <h2>{props.details.genre}</h2>
          </div>
        </div>
        <h4>{props.details.description}</h4>
      </div>
      <BsSearch onClick={bound} className="switchDetails" />
    </div>
  );
};

export default Details;
