import React, {useCallback, useEffect, useState} from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./err/ErrorFallback";
import EditMovie from "./filmInteraction/edit/EditMovie";
import DeleteMovie from "./filmInteraction/delete/DeleteMovie";
import AddMovie from "./filmInteraction/add/AddMovie";
import Details from "./details/Details";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {fetchDetails} from "../helpers/fetchDetails";

const App: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, _setSearchParams] = useSearchParams();
    const {form} = useSelector((state: any) => state.forms);
    const movieId = searchParams.get("movieId");
    const [details, setDetails] = useState(undefined);

    const fetch = useCallback(
        () => fetchDetails({movieId, setDetails}),
        [movieId]
    );

    useEffect(() => {
        fetch();
    }, [movieId, fetch]);

    return (
        <div className="App">
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {
            }}>
                <div className={form ? "blur" : ""}>
                    {details ? (
                        <Details details={details} callback={setDetails}/>
                    ) : (
                        <TopBar/>
                    )}
                    <VideoBar callback={setDetails}/>
                </div>
                {form === "add" && <AddMovie/>}
                {form === "edit" && <EditMovie/>}
                {form === "delete" && <DeleteMovie/>}
            </ErrorBoundary>
        </div>
    );
};

export default App;
