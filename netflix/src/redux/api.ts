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
    searchMovie: builder.query({
      query: ({ searchQuery, searchType }) =>
        `/movies?search=${searchQuery}&searchBy=${searchType}`,
    }),
    filter: builder.query({
      query: ({ genre, sortBy, sortOrder }) => {
        console.log(genre, sortBy, sortOrder);
        if (!sortBy && !sortOrder) {
          return `/movies?sortBy=vote_average&sortOrder=desc&filter=${genre}`;
        } else if (!sortOrder) {
          return `/movies?sortBy=${sortBy}&sortOrder=desc&filter=${genre}`;
        } else {
          return `/movies?sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${genre}`;
        }
      },
    }),
  }),
});

export const {
  useGetMovieByIdQuery,
  useGetMoviesListQuery,
  useSearchMovieQuery,
  useFilterQuery,
} = filmApi;

export const filterGenre = filmApi.endpoints.filter.useLazyQuery;
