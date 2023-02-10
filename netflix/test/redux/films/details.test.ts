import { detailsSlice } from "../../../src/redux/films/details";
import { expect } from "@jest/globals";

describe("detailsSlice", () => {
  const state = {
    details: undefined,
  };

  test("Initial State Verification", () => {
    const testedValue = detailsSlice.getInitialState();
    expect(testedValue).toEqual({
      details: undefined,
    });
  });

  test("setDetails Action", () => {
    const testedValue = detailsSlice.reducer(
      state,
      detailsSlice.actions.setDetails("test")
    );
    expect(testedValue).toEqual({
      details: "test",
    });
  });
  test("closeDetails Action", () => {
    const testedValue = detailsSlice.reducer(
      state,
      detailsSlice.actions.closeDetails()
    );
    expect(testedValue).toEqual({
      details: undefined,
    });
  });
});
