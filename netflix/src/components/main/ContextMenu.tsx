import React from "react";
import { AiOutlineDownCircle } from "react-icons/ai";

const click = () => {
  console.log("Click!");
};
const ContextMenu = () => {
  return <AiOutlineDownCircle className="context" onClick={click} />;
};
export default ContextMenu;
