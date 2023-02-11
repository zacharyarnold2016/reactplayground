import React from "react";
import { useDispatch } from "react-redux";
import { renderEdit, renderDelete } from "../../../redux/films/forms";

const Dropdown = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <div className="dropdown">
      <h2
        className="dropdownOption"
        onClick={() => {
          dispatch(renderEdit(id));
        }}
      >
        Edit
      </h2>
      <h2
        className="dropdownOption"
        onClick={() => {
          dispatch(renderDelete(id));
        }}
      >
        Delete
      </h2>
    </div>
  );
};

export default Dropdown;
