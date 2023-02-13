// @ts-nocheck

import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import * as redux from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilms } from "../../../../src/redux/films/films";

import * as route from "react-router";
import FilmList from "../../../../src/components/main/films/FilmList";

jest.mock("react-redux");
jest.mock("react-router");
jest.mock("react-router-dom");

setFilms = jest.fn(() => 1);

const spyFunction = jest.fn();

redux.useDispatch.mockReturnValue(spyFunction);
redux.useSelector.mockReturnValue({
  films: [
    {
      id: 269149,
      title: "Zootopia",
      tagline: "Welcome to the urban jungle.",
      vote_average: 7.7,
      vote_count: 6795,
      release_date: "2016-02-11",
      poster_path:
        "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
      overview:
        "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
      budget: 150000000,
      revenue: 1023784195,
      genres: ["Animation", "Adventure", "Family", "Comedy"],
      runtime: 108,
    },
    {
      id: 181808,
      title: "Star Wars: The Last Jedi",
      tagline: "The Saga Continues",
      vote_average: 7.1,
      vote_count: 4732,
      release_date: "2017-12-13",
      poster_path:
        "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      overview:
        "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      budget: 200000000,
      revenue: 1325937250,
      genres: ["Fantasy", "Adventure", "Science Fiction"],
      runtime: 152,
    },
  ],
});
route.useLoaderData.mockReturnValue({ data: 1 });
useSearchParams = jest.fn(() => {
  return [
    {
      get: (option) => option,
    },
    spyFunction,
  ];
});
afterAll(() => {
  jest.unmock("react-redux");
  jest.unmock("react-router");
});

describe("FilmList", () => {
  test("Snapshot", () => {
    const component = renderer.create(<FilmList callback={spyFunction} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
