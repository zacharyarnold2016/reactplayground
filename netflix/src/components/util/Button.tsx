import React from "react";
import { button } from "../../interfaces/Button.interface";

const Button = (props: button) => {
  return (
    <button
      type={props.purpose}
      className={props.style}
      onClick={props.callback || null}
    >
      {props.text}
    </button>
  );
};

export default Button;
