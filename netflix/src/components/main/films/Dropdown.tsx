import React from "react";
import { useDispatch } from "react-redux";
import { renderEdit, renderDelete } from "../../../redux/forms";

const Dropdown = (props: { id: number }) => {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <h2
        className="dropdownOption"
        onClick={() => dispatch(renderEdit(props.id))}
      >
        Edit
      </h2>
      <h2
        className="dropdownOption"
        onClick={() => dispatch(renderDelete(props.id))}
      >
        Delete
      </h2>
    </div>
  );
};

export default Dropdown;
