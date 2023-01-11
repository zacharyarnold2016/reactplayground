import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "forms",
  initialState: {
    addMovie: false,
    deleteMovie: false,
    editMovie: false,
  },
  reducers: {
    renderAdd: (state) => {
      state.deleteMovie = false;
      state.editMovie = false;
      state.addMovie = !state.addMovie;
    },
    renderDelete: (state) => {
      state.editMovie = false;
      state.addMovie = false;
      state.deleteMovie = !state.deleteMovie;
    },
    renderEdit: (state) => {
      state.deleteMovie = false;
      state.addMovie = false;
      state.editMovie = !state.editMovie;
    },
    closeForms: (state) => {
      state.deleteMovie = false;
      state.editMovie = false;
      state.addMovie = false;
    },
  },
});

export const { renderAdd, renderDelete, renderEdit, closeForms } =
  formSlice.actions;
export default formSlice.reducer;
