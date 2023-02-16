import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import ListItem from "../../../src/components/util/ListItem";

describe("ListItem", () => {
  test("renders", () => {
    const component = renderer.create(<ListItem value="test" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
