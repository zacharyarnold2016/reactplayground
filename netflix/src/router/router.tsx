import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import appLoader from "./loaders/appLoader";
import App from "../components/App";

export const router = createBrowserRouter([
  {
    path: "/search/:searchQuery?/:genre?/:sortBy?/",
    element: <App />,
    loader: appLoader,
  },
  {
    path: "/?movieId",
    element: <App />,
    loader: async ({ params, request }) => {
      console.log(request, params);
      const { movieId } = params;
      const response = await fetch(`http://localhost:4000/movies/${movieId}`);
      const data = response.json();
      return data;
    },
  },
  {
    path: "/",
    element: <Navigate to="/search" replace />,
    errorElement: <h1>404 Error</h1>,
  },
]);
