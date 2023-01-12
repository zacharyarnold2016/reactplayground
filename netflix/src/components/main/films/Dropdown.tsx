import React from "react";
import { useDispatch } from "react-redux";
import { renderEdit, renderDelete } from "../../../redux/forms";

const Dropdown = () => {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <h2 className="dropdownOption" onClick={() => dispatch(renderEdit())}>
        Edit
      </h2>
      <h2 className="dropdownOption" onClick={() => dispatch(renderDelete())}>
        Delete
      </h2>
    </div>
  );
};

export default Dropdown;
