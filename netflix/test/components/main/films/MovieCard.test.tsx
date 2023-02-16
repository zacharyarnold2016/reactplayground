// @ts-nocheck

import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import MovieCard from "../../../../src/components/main/films/MovieCard";
import { useSearchParams } from "react-router-dom";

const jestSpy = jest.fn((body) => 1);
useSearchParams = jest.fn(() => {
  return [
    {
      get: (option) => option,
    },
    jestSpy,
  ];
});
describe("MovieCard", () => {
  test("Snapshot Test", () => {
    const component = renderer.create(
      <MovieCard
        id={1}
        title="title"
        tagline="tagline"
        vote_average={1}
        vote_count={1}
        release_date="01-01-2023"
        poster_path="url"
        overview="overview"
        budget={1}
        revenue={1}
        genres={["Action"]}
        callback={() => 1}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
