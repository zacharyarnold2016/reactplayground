import React, { useCallback, useState } from "react";
import EditMovie from "../../filmInteraction/edit/EditMovie";
import DeleteMovie from "../../filmInteraction/delete/DeleteMovie";

const Dropdown = () => {
  const [edit, setEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const renderEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  const renderDelete = useCallback(() => {
    setDeleted(!deleted);
  }, [deleted]);

  return (
    <div className="dropdown">
      <h2 className="dropdownOption" onClick={renderEdit}>
        Edit
        {edit ? <EditMovie /> : null}
      </h2>
      <h2 className="dropdownOption" onClick={renderDelete}>
        Delete
        {deleted ? <DeleteMovie /> : null}
      </h2>
    </div>
  );
};

export default Dropdown;
