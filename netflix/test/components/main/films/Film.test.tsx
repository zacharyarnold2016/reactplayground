// @ts-nocheck

import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import Film from "../../../../src/components/main/films/Film";
import { useSearchParams } from "react-router-dom";
import { imgFallback } from "../../../../src/helpers/imgFallback";

const jestSpy = jest.fn((body) => 1);
useSearchParams = jest.fn(() => {
  return [
    {
      get: (option) => option,
    },
    jestSpy,
  ];
});

imgFallback = jest.fn((value) => {
  return value;
});
describe("Film", () => {
  test("renders", () => {
    const component = renderer.create(
      <Film
        poster_path="url"
        title="test"
        release_date="testDate"
        genres={["test"]}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(useSearchParams).toBeCalled();
  });

  test("onClick", () => {
    const component = renderer.create(
      <Film
        poster_path="url"
        title="test"
        release_date="testDate"
        genres={["test"]}
      />
    );
    let tree = component.toJSON();
    tree.children[0].props.onClick();
    expect(jestSpy).toBeCalled();
  });

  test("onError", () => {
    const component = renderer.create(
      <Film
        poster_path="url"
        title="test"
        release_date="testDate"
        genres={["test"]}
      />
    );
    let tree = component.toJSON();
    tree.children[0].props.onError();
    expect(imgFallback).toBeCalled();
  });
});
