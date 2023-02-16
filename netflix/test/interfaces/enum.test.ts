import { SORTOPTIONS, GENRES } from "../../src/interfaces/enums/lists.enums";
import {
  ButtonType,
  ButtonStyle,
} from "../../src/interfaces/components/util/Button.interface";
import { expect } from "@jest/globals";

describe("Enum Variables", () => {
  test("SORTOPTIONS", () => {
    expect(SORTOPTIONS.RATING).toBe("Vote Average");
    expect(SORTOPTIONS.RELEASE).toBe("Release Date");
  });
  test("GENRES", () => {
    expect(GENRES.ALL).toBe("All");
    expect(GENRES.ACTION).toBe("Action");
    expect(GENRES.DRAMA).toBe("Drama");
    expect(GENRES.COMEDY).toBe("Comedy");
    expect(GENRES.HORROR).toBe("Horror");
    expect(GENRES.DOCUMENTARY).toBe("Documentary");
  });

  test("ButtonType", () => {
    expect(ButtonType.SUBMIT).toBe("submit");
    expect(ButtonType.RESET).toBe("reset");
    expect(ButtonType.BUTTON).toBe("button");
  });

  test("ButtonStyle", () => {
    expect(ButtonStyle.A).toBe("primaryButton");
    expect(ButtonStyle.B).toBe("secondaryButton");
    expect(ButtonStyle.C).toBe("tertiaryButton");
    expect(ButtonStyle.D).toBe("submitButtonTop");
  });
});
