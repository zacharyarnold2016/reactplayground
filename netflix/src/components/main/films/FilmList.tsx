import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { setFilms } from "../../../redux/films/films";
import { useDispatch, useSelector } from "react-redux";

const FilmList = (props: any) => {
  const dispatch = useDispatch();
  const { data } = props.films;
  dispatch(setFilms(data));

  const { films } = useSelector((state: any) => state.film);
  useEffect(() => {
    dispatch(setFilms(films));
  }, [films, dispatch]);
  return (
    <>
      {films ? (
        <ul>
          <div className="filmsContainer">
            {films.map((film: any) => {
              return (
                <li key={film.id} className="centered">
                  <MovieCard
                    id={film.id}
                    title={film.title}
                    tagline={film.tagline}
                    vote_average={film.vote_average}
                    vote_count={film.vote_count}
                    release_date={film.release_date}
                    poster_path={film.poster_path}
                    overview={film.overview}
                    budget={film.budget}
                    revenue={film.revenue}
                    genres={film.genres}
                    runtime={film.runtime}
                    callback={props.callback}
                  />
                </li>
              );
            })}
          </div>
        </ul>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default FilmList;
