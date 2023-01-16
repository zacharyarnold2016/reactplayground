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
      query: (searchQuery) => `/movies?search=${searchQuery}&searchBy=title`,
    }),

    filter: builder.query({
      query: ({ genre, sortBy, sortOrder }) => {
        if (!sortBy && !sortOrder) {
          if (genre === "All") {
            return `/movies?sortBy=vote_average&sortOrder=desc`;
          }
          return `/movies?sortBy=vote_average&sortOrder=desc&filter=${genre}`;
        } else if (!sortOrder) {
          if (genre === "All") {
            return `/movies?sortBy=${sortBy}&sortOrder=desc`;
          }
          return `/movies?sortBy=${sortBy}&sortOrder=desc&filter=${genre}`;
        } else {
          if (genre === "All") {
            return `/movies?sortBy=${sortBy}&sortOrder=${sortOrder}`;
          }
          return `/movies?sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${genre}`;
        }
      },
    }),

    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `/movies/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetMovieByIdQuery,
  useGetMoviesListQuery,
  useSearchMovieQuery,
  useFilterQuery,
  useDeleteMovieMutation,
} = filmApi;

export const filterGenre = filmApi.endpoints.filter.useLazyQuery;
export const search = filmApi.endpoints.searchMovie.useLazyQuery;
