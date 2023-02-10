// @ts-nocheck
import { expect } from "@jest/globals";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { useParams } from "react-router";
import { useSearchState } from "../../src/hooks/useSearchState";

Enzyme.configure({ adapter: new Adapter() });
useParams = jest.fn(() => 1);

test("Renders with Providers for Router and Redux", () => {
  const testSearch = useSearchState();
  expect(testSearch).toBe(1);
});
