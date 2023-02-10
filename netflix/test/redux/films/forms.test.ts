import { formSlice } from "../../../src/redux/films/forms";
import { expect } from "@jest/globals";

describe("formSlice", () => {
  const dummyState = formSlice.getInitialState();

  test("renderAdd", () => {
    let testedValue = formSlice.reducer(
      dummyState,
      formSlice.actions.renderAdd()
    );
    expect(testedValue).toEqual({
      form: "add",
      id: undefined,
    });
  });
  test("renderDelete", () => {
    let testedValue = formSlice.reducer(
      dummyState,
      formSlice.actions.renderDelete(1)
    );
    expect(testedValue).toEqual({ form: "delete", id: 1 });
  });
  test("renderEdit", () => {
    let testedValue = formSlice.reducer(
      dummyState,
      formSlice.actions.renderEdit(1)
    );
    expect(testedValue).toEqual({ form: "edit", id: 1 });
  });
  test("closeForms", () => {
    let testedValue = formSlice.reducer(
      dummyState,
      formSlice.actions.closeForms()
    );
    expect(testedValue).toEqual({ form: undefined, id: 0 });
  });
  test("resetId", () => {
    let testedValue = formSlice.reducer(
      dummyState,
      formSlice.actions.resetId()
    );
    expect(testedValue).toEqual({ form: undefined, id: undefined });
  });
});
