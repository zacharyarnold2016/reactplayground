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
import { useParams } from "react-router";
import { BsCheckLg } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

const App: React.FC = () => {
  const { form } = useSelector((state: any) => state.forms);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get("movieId");
  const [details, setDetails] = useState(undefined);

  const fetchDetails = useCallback(async () => {
    if (movieId !== undefined) {
      const details = await fetch(`http://localhost:4000/movies/${movieId}`);
      const jsonDetails = await details.json();
      setDetails(jsonDetails);
    } else {
      setDetails(undefined);
    }
  }, [movieId]);

  useEffect(() => {
    fetchDetails();
  }, [movieId, fetchDetails]);
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <div className={form ? "blur" : ""}>
          {details ? <Details details={details} /> : <TopBar />}
          <VideoBar />
        </div>
        {form === "add" && <AddMovie />}
        {form === "edit" && <EditMovie />}
        {form === "delete" && <DeleteMovie />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
