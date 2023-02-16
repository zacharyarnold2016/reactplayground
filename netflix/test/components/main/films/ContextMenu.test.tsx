// @ts-nocheck
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import ContextMenu from "../../../../src/components/main/films/ContextMenu";
import { useState } from "react";

const spyFunction = jest.fn();
useState = jest.fn(() => [undefined, spyFunction]);
describe("ContextMenu", () => {
  test("Snapshot Test", () => {
    const component = renderer.create(<ContextMenu id={1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("onClick", () => {
    const component = renderer.create(<ContextMenu id={1} />);
    const tree = component.toJSON();
    tree.props.onClick();
    expect(spyFunction).toBeCalled();
  });
});
