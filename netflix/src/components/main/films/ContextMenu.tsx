import React, { useState, useCallback } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import Dropdown from "./Dropdown";

const ContextMenu = (props: { id: number }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDrop = useCallback(() => {
    setDropdown(!dropdown);
  }, [dropdown]);

  return (
    <>
      <AiOutlineDownCircle className="context" onClick={handleDrop} />
      {dropdown && <Dropdown id={props.id} />}
    </>
  );
};
export default ContextMenu;
