// @ts-nocheck
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import Result from "../../../src/components/main/Results";
import { useLoaderData } from "react-router";

useLoaderData = jest.fn(() => 4);

describe("Result", () => {
  test("Snapshot", () => {
    const component = renderer.create(<Result />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
