import React from "react";

export interface film {
  key: number;
  img: string;
  name: string;
  genre: string;
  year: number;
}

export interface filmList extends React.FC {
  films: film[];
}
