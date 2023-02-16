// @ts-nocheck

import { expect } from "@jest/globals";
import appLoader from "../../src/router/loaders/appLoader";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        test: "test",
      }),
  })
);

describe("appLoader", () => {
  const dummyData = {
    params: {
      searchQuery: "test",
    },
    request: {
      url: "http://test.com/test?sortBy=test&genre=test",
    },
  };
  test("Golden Route", async () => {
    const testedValue = await appLoader(dummyData);
    expect(testedValue).toEqual({ test: "test" });
  });
});
