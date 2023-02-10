import { expect } from "@jest/globals";
import generateQueryString from "../../src/helpers/generateQueryString";
import generateUrl from "../../src/helpers/generateUrlString";

describe("Query Generators", () => {
  test("Full Query", () => {
    const query = { searchQuery: "abc", genre: "def", sortBy: "ghi" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&search=abc&filter=def&sortBy=ghi&sortOrder=desc"
    );
  });
  test("Genre Query", () => {
    const query = { genre: "def" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&filter=def"
    );
  });
  test("SortBy Query", () => {
    const query = { sortBy: "ghi" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&sortBy=ghi&sortOrder=desc"
    );
  });
  test("SearchQuery Query", () => {
    const query = { searchQuery: "abc" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&search=abc"
    );
  });
  test("SearchQuery Filler String Query", () => {
    const query = { searchQuery: "f08ab2" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&search="
    );
  });
  test("searchQuery Genre Query", () => {
    const query = { searchQuery: "abc", genre: "def" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&search=abc&filter=def"
    );
  });
  test("SearchQuery SortBy Query", () => {
    const query = { searchQuery: "abc", sortBy: "ghi" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&search=abc&sortBy=ghi&sortOrder=desc"
    );
  });
  test("Genre SortBy Query", () => {
    const query = { genre: "def", sortBy: "ghi" };
    const testedValue = generateQueryString(query);
    expect(testedValue).toBe(
      "http://localhost:4000/movies?searchBy=title&filter=def&sortBy=ghi&sortOrder=desc"
    );
  });
});

describe("URL Generator", () => {
  test("generateUrl", () => {
    const testObject = {
      sortBy: "vote_average",
      searchQuery: "star",
      genre: "Action",
    };
    const testedValue = generateUrl(testObject);
    expect(testedValue).toBe("/search/star?genre=Action&sortBy=vote_average");
  });
  test("generateUrl Genre Default", () => {
    const testObject = {
      sortBy: "vote_average",
      searchQuery: "star",
    };
    const testedValue = generateUrl(testObject);
    expect(testedValue).toBe("/search/star?genre=All&sortBy=vote_average");
  });
  test("generateUrl Empty", () => {
    const testObject = {};
    const testedValue = generateUrl(testObject);
    expect(testedValue).toBe("/search?genre=All");
  });
});
