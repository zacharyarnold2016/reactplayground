// @ts-nocheck
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import SortByOption from "../../../../src/components/main/sort/SortByOption";
import { useNavigate, useParams } from "react-router";
import generateUrl from "../../../../src/helpers/generateUrlString";

const spyFunction = jest.fn();
useNavigate = jest.fn(() => spyFunction);
generateUrl = jest.fn();

describe("SortByOption", () => {
  test("Snapshot", () => {
    const component = renderer.create(<SortByOption option="test" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("onClick", () => {
    const component = renderer.create(<SortByOption option="test" />);
    let tree = component.toJSON();
    tree.props.onClick();
    expect(generateUrl).toBeCalled();
  });
});
