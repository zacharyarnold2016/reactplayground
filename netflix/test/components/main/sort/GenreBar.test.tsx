// @ts-nocheck
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import GenreBar from "../../../../src/components/main/sort/GenreBar";
import { useNavigate, useParams } from "react-router";
import * as route from "react-router-dom";

jest.mock("react-router");
jest.mock("react-router-dom");
afterAll(() => {
  jest.unmock("react-router");
  jest.unmock("react-router-dom");
});

const spyFunction = jest.fn();

describe("GenreBar", () => {
  test("SnapShot", () => {
    route.useSearchParams.mockReturnValue([{ get: spyFunction }, spyFunction]);
    const component = renderer.create(<GenreBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
