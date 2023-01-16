import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "forms",
  initialState: {
    addMovie: false,
    deleteMovie: false,
    editMovie: false,
    blur: false,
    id: 0,
  },
  reducers: {
    renderAdd: (state) => {
      state.blur = !state.blur;
      state.deleteMovie = false;
      state.editMovie = false;
      state.addMovie = !state.addMovie;
    },
    renderDelete: (state, id) => {
      state.id = id.payload;
      state.blur = !state.blur;
      state.editMovie = false;
      state.addMovie = false;
      state.deleteMovie = !state.deleteMovie;
    },
    renderEdit: (state, id) => {
      state.id = id.payload;
      state.blur = !state.blur;
      state.deleteMovie = false;
      state.addMovie = false;
      state.editMovie = !state.editMovie;
    },
    closeForms: (state) => {
      state.id = 0;
      state.blur = false;
      state.deleteMovie = false;
      state.editMovie = false;
      state.addMovie = false;
    },
    resetId: (state) => {
      state.id = 0;
    },
  },
});

export const { renderAdd, renderDelete, renderEdit, closeForms, resetId } =
  formSlice.actions;
export default formSlice.reducer;
