import React from "react";
import Film from "./Film";
import SortBar from "./SortBar";
import ContextMenu from "./ContextMenu";

const films = [
  {
    img: "https://picsum.photos/400/400",
    name: "Name",
    genre: "Action",
    year: 2005,
  },
  {
    img: "https://picsum.photos/400/400",
    name: "Name",
    genre: "Action",
    year: 2005,
  },
  {
    img: "https://picsum.photos/400/400",
    name: "Name",
    genre: "Action",
    year: 2005,
  },
  {
    img: "https://picsum.photos/400/400",
    name: "Name",
    genre: "Action",
    year: 2005,
  },
];

const VideoBar = () => {
  return (
    <div className="mainContainer">
      <SortBar />
      <div className="filmsContainer">
        {films.map((element) => {
          return (
            <div className="film">
              <ContextMenu />
              <Film
                img={element.img}
                name={element.name}
                genre={element.genre}
                year={element.year}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoBar;
