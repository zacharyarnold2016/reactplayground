import React from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./err/ErrorFallback";

const App: React.FC = () => {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <TopBar />
        <VideoBar />
      </ErrorBoundary>
    </div>
  );
};

export default App;
