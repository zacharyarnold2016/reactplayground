import React from "react";
import { film } from "../../../interfaces/Film.interface";
import MovieCard from "./MovieCard";

const FilmList = (props: any) => {
  return (
    <ul>
      <div className="filmsContainer">
        {props.films.map((element: film) => {
          return (
            <li key={element.key}>
              <MovieCard
                key={element.key}
                img={element.img}
                name={element.name}
                genre={element.genre}
                year={element.year}
                rating={element.rating}
                description={element.description}
                callback={props.callback}
              />
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default FilmList;
