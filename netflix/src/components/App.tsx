import React from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./err/ErrorFallback";
import EditMovie from "./filmInteraction/edit/EditMovie";
import DeleteMovie from "./filmInteraction/delete/DeleteMovie";
import AddMovie from "./filmInteraction/add/AddMovie";
import Details from "./details/Details";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const { deleteMovie, editMovie, addMovie, blur } = useSelector(
    (state: any) => state.forms
  );
  const { details } = useSelector((state: any) => state.details);

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <div className={blur ? "blur" : ""}>
          {details ? <Details details={details} /> : <TopBar />}
          <VideoBar />
        </div>
        {addMovie && <AddMovie />}
        {editMovie && <EditMovie />}
        {deleteMovie && <DeleteMovie />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
