// @ts-nocheck

import { fetchDetails } from "../../src/helpers/fetchDetails";
import { expect } from "@jest/globals";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: "Hi" }),
  })
);

describe("fetchDetails", () => {
  let dummyDetailState;
  const setDetails = jest.fn((details) => {
    dummyDetailState = details;
  });
  test("Success", async () => {
    const testedValue = {
      setDetails,
      movieId: 1,
    };
    await fetchDetails(testedValue);
    expect(dummyDetailState).toEqual({ test: "Hi" });
  });

  test("No ID", async () => {
    let dummyDetailState;
    const setDetails = jest.fn((details) => {
      dummyDetailState = details;
    });
    const testedValue = {
      setDetails,
      movieId: undefined,
    };
    await fetchDetails(testedValue);
    expect(dummyDetailState).toEqual(undefined);
  });
});
