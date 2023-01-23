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

    filter: builder.query({
      query: (searchQuery) => {
        console.log(searchQuery);
        return searchQuery;
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
  useFilterQuery,
  useDeleteMovieMutation,
} = filmApi;

export const filter = filmApi.endpoints.filter.useLazyQuery;
