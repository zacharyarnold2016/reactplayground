import React, { useState, useCallback } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import Dropdown from "./Dropdown";

const ContextMenu = () => {
  const [drop, setDrop] = useState(false);

  const handleDrop = useCallback(() => {
    setDrop(!drop);
  }, [drop]);

  return (
    <>
      <AiOutlineDownCircle className="context" onClick={handleDrop} />
      {drop ? <Dropdown /> : null}
    </>
  );
};
export default ContextMenu;
