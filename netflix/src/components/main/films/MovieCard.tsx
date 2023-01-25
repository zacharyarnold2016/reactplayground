import * as React from "react";
import ContextMenu from "./ContextMenu";
import Film from "./Film";
import { film } from "../../../interfaces/Film.interface";
import { convertRuntime } from "../../../helpers/convertRuntime";

const MovieCard = (props: film) => {
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
    runtime,
  } = props;
  const year = release_date.split("-")[0];
  const time = convertRuntime(runtime as number);

  return (
    <div className="film">
      <ContextMenu id={id} />
      <Film
        id={id}
        title={title}
        tagline={tagline}
        vote_average={vote_average}
        vote_count={vote_count}
        release_date={year}
        poster_path={poster_path}
        overview={overview}
        budget={budget}
        revenue={revenue}
        genres={genres}
        runtime={time}
      />
    </div>
  );
};

export default MovieCard;
