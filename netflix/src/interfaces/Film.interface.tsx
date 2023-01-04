import React from "react";

export interface film {
  key: number;
  img: string;
  name: string;
  genre: string;
  year: number;
  description: string;
  rating: number;
}

export interface filmList extends React.FC {
  films: film[];
}
