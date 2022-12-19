import React from "react";

const Dropdown = (props: any) => {
  const { renderDelete, renderEdit } = props.callback;

  return (
    <div className="dropdown">
      <h2 className="dropdownOption" onClick={renderEdit}>
        Edit
      </h2>
      <h2 className="dropdownOption" onClick={renderDelete}>
        Delete
      </h2>
    </div>
  );
};

export default Dropdown;
