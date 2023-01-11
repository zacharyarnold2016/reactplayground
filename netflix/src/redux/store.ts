import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formSliceReducer from "./forms";
import detailsSliceReducer from "./details";
import filmSliceReducer from "./films";
import { filmApi } from "./api";

// @TODO - Add API Reducer
const store = configureStore({
  reducer: {
    forms: formSliceReducer,
    details: detailsSliceReducer,
    film: filmSliceReducer,
    filmApi: filmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
