import React, { useState, useCallback } from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./err/ErrorFallback";
import EditMovie from "./filmInteraction/edit/EditMovie";
import DeleteMovie from "./filmInteraction/delete/DeleteMovie";

const App: React.FC = () => {
  const [edit, setEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const renderEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);
  const renderDelete = useCallback(() => {
    console.log(deleted);
    setDeleted(!deleted);
  }, [deleted]);
  const handleContext = {
    renderEdit,
    renderDelete,
  };
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <TopBar />
        <VideoBar callback={handleContext} />
        {edit ? <EditMovie /> : null}
        {deleted ? <DeleteMovie /> : null}
      </ErrorBoundary>
    </div>
  );
};

export default App;
