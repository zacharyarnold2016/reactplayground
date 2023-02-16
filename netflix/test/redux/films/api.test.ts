import { filmApi, useGetMovieByIdQuery } from "../../../src/redux/films/api";
import { expect } from "@jest/globals";

describe("Api", () => {
  test("Endpoint Confirmation", () => {
    expect(Object.keys(filmApi.endpoints)).toEqual([
      "getMovieById",
      "getMoviesList",
      "filter",
      "deleteMovie",
      "editMovie",
      "addMovie",
    ]);
  });
});
