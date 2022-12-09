import React from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";
import Button from "./util/Button";
import { ButtonStyle, ButtonType } from "../interfaces/Button.interface";
import ErrorBoundary from "./err/ErrorBoundary";

const App: React.FC = () => {
  const err = () => {
    throw new Error("Error Boundary Works");
  };
  return (
    <ErrorBoundary>
      <div className="app">
        <TopBar />
        <VideoBar />
        <Button
          style={ButtonStyle.A}
          purpose={ButtonType.BUTTON}
          text="SelfDestructText"
          callback={err}
        />
      </div>
    </ErrorBoundary>
  );
};

export default App;
