import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: undefined,
  },
  reducers: {
    setDetails: (state, film) => {
      state.details = film.payload;
    },
    closeDetails: (state) => {
      state.details = undefined;
    },
  },
});

export const { setDetails, closeDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
