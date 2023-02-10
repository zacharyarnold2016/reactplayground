import { isSelected } from "../../src/helpers/isSelected";
import { imgFallback } from "../../src/helpers/imgFallback";
import { expect } from "@jest/globals";

describe("isSelected", () => {
  test("isSelected True", () => {
    const testedValue = isSelected("All", "All");
    expect(testedValue).toBe("highlighted");
  });
  test("isSelected False", () => {
    const testedValue = isSelected("All", "No");
    expect(testedValue).toBe("");
  });
});

describe("imgFallback", () => {
  test("Correct Values", () => {
    const obj = { currentTarget: { onerror: undefined, src: undefined } };
    imgFallback(obj);
    expect(obj.currentTarget.onerror).toBe(null);
    expect(obj.currentTarget.src).toBe("https://picsum.photos/500/750");
  });
});
