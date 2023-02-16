// @ts-nocheck
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import GenreOption from "../../../../src/components/main/sort/GenreOption";
import { useNavigate, useParams } from "react-router";
import generateUrl from "../../../../src/helpers/generateUrlString";
import * as route from "react-router-dom";

jest.mock("react-router");
jest.mock("react-router-dom");
const spyFunction = jest.fn();
useNavigate = jest.fn(() => spyFunction);
useParams = jest.fn(() => {
  return { searchQuery: "test" };
});
generateUrl = jest.fn();

afterAll(() => {
  jest.unmock("react-router");
  jest.unmock("react-router-dom");
});
describe("GenreOption", () => {
  test("Snapshot", () => {
    route.useSearchParams.mockReturnValue([{ get: spyFunction }, spyFunction]);
    const component = renderer.create(<GenreOption genre="test" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("onClick", () => {
    route.useSearchParams.mockReturnValue([{ get: spyFunction }, spyFunction]);
    const component = renderer.create(<GenreOption genre="test" />);
    let tree = component.toJSON();
    tree.props.onClick();
    expect(generateUrl).toBeCalled();
  });
  test("isSelected", () => {
    route.useSearchParams.mockReturnValue([{ get: () => "test" }, spyFunction]);
    const component = renderer.create(<GenreOption genre="test" />);
    let tree = component.toJSON();
    tree.props.onClick();
    expect(generateUrl).toBeCalled();
  });
});
