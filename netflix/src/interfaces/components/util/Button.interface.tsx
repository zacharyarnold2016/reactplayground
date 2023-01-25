export interface button {
  style: ButtonStyle;
  purpose: ButtonType;
  text: string;
  callback?: any;
}

export enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export enum ButtonStyle {
  A = "primaryButton",
  B = "secondaryButton",
  C = "tertiaryButton",
  D = "submitButtonTop",
}
