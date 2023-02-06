import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import appLoader from "./loaders/appLoader";
import App from "../components/App";

export const router = createBrowserRouter([
  {
    path: "/search/:searchQuery?",
    element: <App />,
    loader: appLoader,
  },
  {
    path: "/",
    element: <Navigate to="/search" replace />,
    errorElement: <h1>404 Error</h1>,
  },
]);
