import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "forms",
  initialState: {
    form: undefined as any,
    id: undefined as any,
  },
  reducers: {
    renderAdd: (state) => {
      state.form = "add";
    },
    renderDelete: (state, id) => {
      state.id = id.payload;
      state.form = "delete";
    },
    renderEdit: (state, id) => {
      state.id = id.payload;
      state.form = "edit";
    },
    closeForms: (state) => {
      state.id = 0;
      state.form = undefined;
    },
    resetId: (state) => {
      state.id = undefined;
    },
  },
});

export const { renderAdd, renderDelete, renderEdit, closeForms, resetId } =
  formSlice.actions;
export default formSlice.reducer;
