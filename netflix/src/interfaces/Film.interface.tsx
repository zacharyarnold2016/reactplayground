import React from "react";

export interface film {
  title: string;
  tagLine: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number | string;
  genres: string[];
}

export interface filmList extends React.FC {
  films: film[];
}
