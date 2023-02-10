import { filmSlice } from "../../../src/redux/films/films";
import { expect } from "@jest/globals";

describe("filmSlice", () => {
  const state = {
    films: [],
    results: undefined,
    currentSortString: "Select",
    active: false,
  };
  test("Initial State Verification", () => {
    const testedValue = filmSlice.getInitialState();
    expect(testedValue).toEqual({
      films: [],
      results: undefined,
      currentSortString: "Select",
      active: false,
    });
  });
  test("setFilms Action", () => {
    const testedValue = filmSlice.reducer(
      state,
      filmSlice.actions.setFilms("test")
    );
    expect(testedValue).toEqual({
      films: "test",
      results: undefined,
      currentSortString: "Select",
      active: false,
    });
  });

  test("setResults", () => {
    const testedValue = filmSlice.reducer(
      state,
      filmSlice.actions.setResults(0)
    );
    expect(testedValue).toEqual({
      films: [],
      results: 0,
      currentSortString: "Select",
      active: false,
    });
  });
});
