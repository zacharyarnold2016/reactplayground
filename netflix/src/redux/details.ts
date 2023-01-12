import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: false,
  },
  reducers: {
    setDetails: (state, film) => {
      state.details = film.payload;
    },
    closeDetails: (state) => {
      state.details = false;
    },
  },
});

export const { setDetails, closeDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
