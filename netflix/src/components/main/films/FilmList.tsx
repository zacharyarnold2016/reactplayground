import React from "react";
import { film } from "../../../interfaces/Film.interface";
import MovieCard from "./MovieCard";

const FilmList = (props: any) => {
  return (
    <ul>
      <div className="filmsContainer">
        {props.films.map((element: film) => {
          return (
            <MovieCard
              key={element.key}
              img={element.img}
              name={element.name}
              genre={element.genre}
              year={element.year}
              callback={props.callback}
            />
          );
        })}
      </div>
    </ul>
  );
};

export default FilmList;
