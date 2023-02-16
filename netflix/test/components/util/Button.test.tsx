import renderer from "react-test-renderer";
import Button from "../../../src/components/util/Button";
import { expect } from "@jest/globals";
import {
  ButtonStyle,
  ButtonType,
} from "../../../src/interfaces/components/util/Button.interface";

describe("Button", () => {
  const testCallback = jest.fn();
  test("Button Clicked", () => {
    const component = renderer.create(
      <Button
        type={ButtonType.BUTTON}
        styling={ButtonStyle.A}
        callback={testCallback}
      />
    );
    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.props.onClick();
    expect(testCallback).toBeCalled();
  });
  test("No Callback", () => {
    const component = renderer.create(
      <Button type={ButtonType.BUTTON} styling={ButtonStyle.A} />
    );
    let tree: any = component.toJSON();
    expect(tree.props.onClick).toBe(null);
  });
});
