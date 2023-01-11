import * as React from "react";
import ContextMenu from "./ContextMenu";
import Film from "./Film";

const MovieCard = (props: any) => {
  const {
    id,
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    genres,
    rating,
    description,
    runtime,
  } = props;

  const hours = Math.round(runtime / 60);
  const minutes = runtime % 60;
  const time = `${hours}h${minutes}min`;

  const year = release_date.split("-");

  return (
    <div className="film">
      <ContextMenu />
      <Film
        id={id}
        title={title}
        tagline={tagline}
        vote_average={vote_average}
        vote_count={vote_count}
        release_date={year[0]}
        poster_path={poster_path}
        overview={overview}
        budget={budget}
        revenue={revenue}
        genres={genres}
        rating={rating}
        description={description}
        runtime={time}
      />
    </div>
  );
};

export default MovieCard;
