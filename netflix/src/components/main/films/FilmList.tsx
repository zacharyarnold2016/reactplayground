import React from "react";
import Film from "./Film";
import ContextMenu from "./ContextMenu";
import films from "../../../dummyFilms";

const FilmList = () => {
  return (
    <ul>
      <div className="filmsContainer">
        {films.map((element) => {
          return (
            <div className="film">
              <li key={element.key}>
                <ContextMenu />
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
