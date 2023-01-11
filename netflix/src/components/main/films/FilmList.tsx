import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useGetMoviesListQuery } from "../../../redux/api";
import { setFilms } from "../../../redux/films";
import { useDispatch, useSelector } from "react-redux";

const FilmList = (props: any) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetMoviesListQuery("");
  const { films } = useSelector((state: any) => state.film);
  useEffect(() => {
    isLoading ? console.log("Loading") : dispatch(setFilms(data.data));
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <ul>
          <div className="filmsContainer">
            {films.map((film: any) => {
              return (
                <li key={film.title.toString()}>
                  <MovieCard
                    id={film.id}
                    title={film.title}
                    tagLine={film.tagline}
                    vote_average={film.vote_average}
                    vote_count={film.vote_count}
                    release_date={film.release_date}
                    poster_path={film.poster_path}
                    overview={film.overview}
                    budget={film.budget}
                    revenue={film.revenue}
                    genres={film.genres}
                    runtime={film.runtime}
                    year={film.year}
                    rating={film.rating}
                    description={film.overview}
                  />
                </li>
              );
            })}
          </div>
        </ul>
      )}
    </>
  );
};

export default FilmList;
