// @ts-nocheck

import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import Dropdown from "../../../../src/components/main/films/Dropdown";
import * as redux from "react-redux";

jest.mock("react-redux");
const spyFunction = jest.fn(() => 1);
redux.useDispatch.mockReturnValue(spyFunction);

describe("Dropdown", () => {
  afterAll(() => {
    jest.unmock("react-redux");
  });
  test("onClick Edit", () => {
    const component = renderer.create(<Dropdown id={1} />);
    const tree = component.toJSON();
    tree.children[0].props.onClick();
    expect(spyFunction).toBeCalled();
  });
  test("onClick Delete", () => {
    const component = renderer.create(<Dropdown id={1} />);
    const tree = component.toJSON();
    tree.children[1].props.onClick();
    expect(spyFunction).toBeCalled();
  });
  test("Snapshot Test", () => {
    const component = renderer.create(<Dropdown id={1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
