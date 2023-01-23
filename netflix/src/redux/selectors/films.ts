import { createSelector } from "@reduxjs/toolkit";

export const filmSelector = (state: any) => state.film;
const selectCurrent = (state: any) => state.film.currentFilter;

export const selectStatus = createSelector(selectCurrent, (items) => {
  const { currentGenre, currentSort, currentSearch } = items;
  return { currentGenre, currentSort, currentSearch };
});
