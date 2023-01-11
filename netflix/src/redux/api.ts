import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getMovieById: builder.query({
      query: (id) => `/movies/${id}`,
    }),
    getMoviesList: builder.query({
      query: () => `/movies`,
    }),
    getSortedList: builder.query({
      query: (sortType: string = "rating", sortOrder: string = "desc") =>
        `/movies?sortBy=${sortType}?sortOrder=${sortOrder}`,
    }),
    searchMovieByTitle: builder.query({
      query: (searchQuery: string) =>
        `/movies?search=${searchQuery}&searchBy=title`,
    }),
    searchMovieByGenre: builder.query({
      query: (genreQuery: string) =>
        `/movies?search=${genreQuery}&searchBy=genres`,
    }),
    filter: builder.query({
      query: (genre) => `/movies?filter=${genre}`,
    }),
  }),
});

export const {
  useGetMovieByIdQuery,
  useGetMoviesListQuery,
  useGetSortedListQuery,
  useSearchMovieByTitleQuery,
  useSearchMovieByGenreQuery,
  useFilterQuery,
} = filmApi;
