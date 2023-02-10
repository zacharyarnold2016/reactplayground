import { convertRuntime } from "../../src/helpers/convertRuntime";
import { sortString } from "../../src/helpers/sortHelperMethods";
import { expect } from "@jest/globals";

describe("converters", () => {
  test("convertRuntime", () => {
    const testedValue = convertRuntime(120);
    expect(testedValue).toBe("2h0min");
  });
  test("convertRuntime null", () => {
    // @ts-ignore
    const testedValue = convertRuntime(null);
    expect(testedValue).toBe("0h0min");
  });

  test("sortString", () => {
    const testedValue = sortString("Test String");
    expect(testedValue).toBe("test_string");
  });
});
