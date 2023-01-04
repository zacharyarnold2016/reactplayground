import React, { useState, useCallback } from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./err/ErrorFallback";
import EditMovie from "./filmInteraction/edit/EditMovie";
import DeleteMovie from "./filmInteraction/delete/DeleteMovie";
import Details from "./details/Details";

const App: React.FC = () => {
  const [edit, setEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [details, setDetails] = useState(false);

  const renderEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);
  const renderDelete = useCallback(() => {
    console.log(deleted);
    setDeleted(!deleted);
  }, [deleted]);
  const renderDetails = useCallback(function (film: any) {
    film ? setDetails(film) : setDetails(false);
    setDetails(film);
  }, []);

  const handleContext = {
    renderEdit,
    renderDelete,
    renderDetails,
  };
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        {details ? (
          <Details callback={renderDetails} details={details} />
        ) : (
          <TopBar />
        )}
        <VideoBar callback={handleContext} />
        {edit ? <EditMovie /> : null}
        {deleted ? <DeleteMovie /> : null}
      </ErrorBoundary>
    </div>
  );
};

export default App;
