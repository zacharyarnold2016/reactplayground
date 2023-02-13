// @ts-nocheck
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import SortBy from "../../../../src/components/main/sort/SortBy";
import * as route from "react-router-dom";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

jest.mock("react-router-dom");
const spyFunction = jest.fn();
useState = jest.fn(() => [1, spyFunction]);
useNavigate = jest.fn(() => spyFunction);

describe("SortBy", () => {
  test("Snapshot Test", () => {
    route.useSearchParams.mockReturnValue([{ get: spyFunction }, spyFunction]);
    const component = renderer.create(<SortBy />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("onClick", () => {
    route.useSearchParams.mockReturnValue([{ get: spyFunction }, spyFunction]);
    const component = renderer.create(<SortBy />);
    let tree = component.toJSON();
    console.log(tree.children[1].children[0].props.onClick());
    expect(spyFunction).toBeCalled();
  });
});
