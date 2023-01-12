import React from "react";

export interface film {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
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
