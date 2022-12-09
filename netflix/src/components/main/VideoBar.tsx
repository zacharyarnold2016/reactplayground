import React from "react";
import Film from "./Film";
import SortBar from "./SortBar";
import ContextMenu from "./ContextMenu";
import Result from "./Results";

const films = [
  {
    img: "https://picsum.photos/400/400",
    name: "Pulp",
    genre: "Action",
    year: 2005,
  },
  {
    img: "https://picsum.photos/400/400",
    name: "Fiction",
    genre: "Action",
    year: 2005,
  },
  {
    img: "https://picsum.photos/400/400",
    name: "Is",
    genre: "Action",
    year: 2005,
  },
];

const VideoBar = () => {
  return (
    <div className="mainContainer">
      <SortBar />
      <Result />
      <div className="filmsContainer">
        {films.map((element) => {
          return (
            <ul>
              <div className="film">
                <li key={element.name}>
                  <ContextMenu />
                  <Film
                    img={element.img}
                    name={element.name}
                    genre={element.genre}
                    year={element.year}
                  />
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default VideoBar;
