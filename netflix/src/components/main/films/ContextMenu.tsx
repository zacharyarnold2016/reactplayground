import React, { useState, useCallback } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import Dropdown from "./Dropdown";

const ContextMenu = (props: any) => {
  const [drop, setDrop] = useState(false);

  const handleDrop = useCallback(() => {
    setDrop(!drop);
  }, [drop]);

  return (
    <>
      <AiOutlineDownCircle className="context" onClick={handleDrop} />
      {drop && <Dropdown callback={props.callback} />}
    </>
  );
};
export default ContextMenu;
