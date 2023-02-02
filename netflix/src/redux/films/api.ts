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

    editMovie: builder.mutation({
      query: (patch) => ({
        url: `/movies`,
        method: "PUT",
        body: patch,
      }),
    }),

    addMovie: builder.mutation({
      query: (patch) => {
        return {
          url: `/movies`,
          method: "POST",
          body: patch,
        };
      },
    }),
  }),
});

export const {
  useGetMovieByIdQuery,
  useGetMoviesListQuery,
  useFilterQuery,
  useDeleteMovieMutation,
  useAddMovieMutation,
  useEditMovieMutation,
} = filmApi;

export const filter = filmApi.endpoints.filter.useLazyQuery;
