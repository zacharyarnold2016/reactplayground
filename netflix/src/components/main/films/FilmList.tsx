import React from "react";
import Film from "./Film";
import ContextMenu from "./ContextMenu";
import { film } from "../../../interfaces/Film.interface";

const FilmList = (props: any) => {
  return (
    <ul>
      <div className="filmsContainer">
        {props.films.map((element: film) => {
          return (
            <div className="film">
              <li key={element.key}>
                <ContextMenu callback={props.callback} />
                <Film
                  key={element.key}
                  img={element.img}
                  name={element.name}
                  genre={element.genre}
                  year={element.year}
                />
              </li>
            </div>
          );
        })}
      </div>
    </ul>
  );
};

export default FilmList;
