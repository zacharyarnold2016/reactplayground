import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    films: [],
    results: 0,
  },
  reducers: {
    setFilms: (state, filmList) => {
      state.films = filmList.payload;
      // @ts-ignore
      state.results = state.films.length;
    },
  },
});

export const { setFilms } = filmSlice.actions;
export default filmSlice.reducer;
