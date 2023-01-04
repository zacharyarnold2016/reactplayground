import * as React from "react";
import ContextMenu from "./ContextMenu";
import Film from "./Film";

const MovieCard = (props: any) => {
  const { renderDetails } = props.callback;
  const { name, img, genre, year, description, rating } = props;
  const film = {
    name,
    img,
    genre,
    year,
    description,
    rating,
  };
  const bound = renderDetails.bind(this, film);

  return (
    <div className="film" onClick={bound}>
      <ContextMenu callback={props.callback} />
      <Film
        key={props.key}
        img={props.img}
        name={props.name}
        genre={props.genre}
        year={props.year}
        rating={props.rating}
        description={props.description}
      />
    </div>
  );
};

export default MovieCard;
