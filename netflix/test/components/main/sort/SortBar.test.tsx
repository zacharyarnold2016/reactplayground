// @ts-nocheck
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import SortBar from "../../../../src/components/main/sort/SortBar";
import { useNavigate, useParams } from "react-router";

import * as route from "react-router-dom";

jest.mock("react-router");
jest.mock("react-router-dom");
afterAll(() => {
  jest.unmock("react-router");
  jest.unmock("react-router-dom");
});
const spyFunction = jest.fn();

describe("SortBar", () => {
  test("Snapshot", () => {
    route.useSearchParams.mockReturnValue([{ get: spyFunction }, spyFunction]);
    const component = renderer.create(<SortBar />);
    let tree = component.toJSON();
  });
});
