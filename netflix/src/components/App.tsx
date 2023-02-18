import React, { useCallback, useEffect, useState } from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./err/ErrorFallback";
import EditMovie from "./filmInteraction/edit/EditMovie";
import DeleteMovie from "./filmInteraction/delete/DeleteMovie";
import AddMovie from "./filmInteraction/add/AddMovie";
import Details from "./details/Details";
import { useSelector } from "react-redux";
import { fetchDetails } from "../helpers/fetchDetails";
import { useSearchState } from "../hooks/useSearchState";

const App = (props: any) => {
  const { movieId } = useSearchState();
  const { form } = useSelector((state: any) => state.forms);
  const [details, setDetails] = useState(props.films.details);

  const fetch = useCallback(
    () => fetchDetails({ movieId, setDetails }),
    [movieId]
  );

  useEffect(() => {
    fetch();
  }, [movieId, fetch]);

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <div className={form ? "blur" : ""}>
          {details ? (
            <Details details={details} callback={setDetails} />
          ) : (
            <TopBar />
          )}
          <VideoBar callback={setDetails} films={props.films} />
        </div>
        {form === "add" && <AddMovie />}
        {form === "edit" && <EditMovie />}
        {form === "delete" && <DeleteMovie />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
