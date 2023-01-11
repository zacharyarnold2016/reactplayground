import React, { useState, useCallback } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import Dropdown from "./Dropdown";

/**
 *  This seems like a situation where redux would
 *  be unneccessary.
 */

const ContextMenu = () => {
  const [drop, setDrop] = useState(false);

  const handleDrop = useCallback(() => {
    setDrop(!drop);
  }, [drop]);

  return (
    <>
      <AiOutlineDownCircle className="context" onClick={handleDrop} />
      {drop && <Dropdown />}
    </>
  );
};
export default ContextMenu;
