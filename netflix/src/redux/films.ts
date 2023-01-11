import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    films: [],
    results: 0,
    currentGenre: "All",
  },
  reducers: {
    setFilms: (state, filmList) => {
      state.films = filmList.payload;
      // @ts-ignore
      state.results = state.films.length;
    },
    setCurrentGenre: (state, genre) => {
      state.currentGenre = genre.payload;
    },
  },
});

export const { setFilms, setCurrentGenre } = filmSlice.actions;
export default filmSlice.reducer;
