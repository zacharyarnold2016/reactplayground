import React from "react";

const Button = (props: any) => {
  return (
    <button
      type={props.purpose}
      className={props.styling}
      onClick={props.callback || null}
    >
      {props.text}
    </button>
  );
};

export default Button;
