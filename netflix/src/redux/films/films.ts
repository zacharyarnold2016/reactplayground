import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    films: [],
    results: undefined,
    currentSortString: "Select",
    active: false,
  },
  reducers: {
    setFilms: (state, filmList) => {
      state.films = filmList.payload;
    },
    setResults: (state, result) => {
      state.results = result.payload;
    },
  },
});

export const { setFilms, setResults } = filmSlice.actions;
export default filmSlice.reducer;
