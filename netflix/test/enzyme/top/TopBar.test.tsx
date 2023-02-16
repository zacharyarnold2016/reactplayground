// @ts-nocheck

import React from "react";
import { expect } from "@jest/globals";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as route from "react-router-dom";
import TopBar from "../../../src/components/top/TopBar";
import * as redux from "react-redux";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom");
jest.mock("react-redux");

const dispatchSpy = jest.fn();
const navSpy = jest.fn();
const searchSpy = jest.fn();

redux.useDispatch.mockReturnValue(() => dispatchSpy);
route.useNavigate.mockImplementation(() => navSpy);
route.useParams.mockReturnValue(() => searchSpy);
route.useSearchParams.mockImplementation(() => [{ get: searchSpy }, searchSpy]);

describe("TopBar", () => {
  test("renders div", () => {
    const wrapper = shallow(<TopBar />);
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("h2").text()).toBe("Find Your Movie");
  });

  test("handles Search", () => {
    const wrapper = shallow(<TopBar />);
    wrapper.find("form").simulate("submit", {
      target: [{ value: "test" }],
      preventDefault: jest.fn(),
    });
    expect(navSpy).toBeCalled();
  });
});
