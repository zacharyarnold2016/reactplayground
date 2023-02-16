import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import "./index.css";
import { router } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<h1>LOADING</h1>} />
    </Provider>
  </React.StrictMode>
);
