import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formSliceReducer from "./forms";
import detailsSliceReducer from "./details";
import filmSliceReducer from "./films";
import { filmApi } from "./api";

// @TODO - Add API Reducer
export default configureStore({
  reducer: {
    forms: formSliceReducer,
    details: detailsSliceReducer,
    film: filmSliceReducer,
    filmApi: filmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});
