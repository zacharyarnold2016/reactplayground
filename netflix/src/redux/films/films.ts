import { createSlice } from "@reduxjs/toolkit";
import { GENRES } from "../../interfaces/enums/lists.enums";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    films: [],
    currentFilter: {
      currentGenre: GENRES.ALL,
      currentSort: "",
      currentSearch: "",
    },
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
    setCurrentGenre: (state, genre) => {
      console.log(genre, state.currentFilter);
      state.currentFilter.currentGenre = genre.payload;
      console.log(genre, state.currentFilter.currentGenre);
    },
    setCurrentSort: (state, sort) => {
      console.log(sort);
      state.currentFilter.currentSort = sort.payload.finalstring;
      state.currentSortString = sort.payload.option;
    },
    setSearch: (state, search) => {
      state.currentFilter.currentSearch = search.payload;
    },
  },
});

export const {
  setFilms,
  setCurrentGenre,
  setCurrentSort,
  setSearch,
  setResults,
} = filmSlice.actions;
export default filmSlice.reducer;
