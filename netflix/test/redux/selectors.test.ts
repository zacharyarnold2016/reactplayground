import { filmSelector, selectStatus } from "../../src/redux/selectors/films";
import { expect } from "@jest/globals";

describe("Redux Selectors", () => {
  const dummyState = {
    film: {
      currentFilter: {
        currentGenre: "test",
        currentSort: "test",
        currentSearch: "test",
      },
    },
  };
  test("filmSelector", () => {
    expect(filmSelector(dummyState)).toEqual({
      currentFilter: {
        currentGenre: "test",
        currentSort: "test",
        currentSearch: "test",
      },
    });
  });
  test("selectStatus", () => {
    expect(selectStatus(dummyState)).toEqual({
      currentGenre: "test",
      currentSort: "test",
      currentSearch: "test",
    });
  });
});
