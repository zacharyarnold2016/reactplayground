import React from "react";
import ContextMenu from "./ContextMenu";
import Film from "./Film";
import { convertRuntime } from "../../../helpers/convertRuntime";

const MovieCard = (props: any) => {
  const year = props.release_date.split("-")[0];
  const time = convertRuntime(props.runtime as number);

  return (
    <div className="film">
      <ContextMenu id={props.id} />
      <Film
        id={props.id}
        title={props.title}
        tagline={props.tagline}
        vote_average={props.vote_average}
        vote_count={props.vote_count}
        release_date={year}
        poster_path={props.poster_path}
        overview={props.overview}
        budget={props.budget}
        revenue={props.revenue}
        genres={props.genres}
        runtime={time}
        callback={props.callback}
      />
    </div>
  );
};

export default MovieCard;
