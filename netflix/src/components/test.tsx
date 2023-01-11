import React from "react";
import { useFilterQuery } from "../redux/api";

const Testing = () => {
  const { data, error, isLoading } = useFilterQuery("Adventure");
  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {data.data.map((film: any) => {
            return (
              <div>
                <img src={film.poster_path} alt="placeholder" />
                <h1>{film.title}</h1>
                <h2>{film.genres}</h2>
                <h2>{film.overview}</h2>
                <h3>{film.tagline}</h3>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Testing;
