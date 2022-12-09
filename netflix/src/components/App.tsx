import React from "react";
import TopBar from "./top/TopBar";
import VideoBar from "./main/VideoBar";

const App: React.FC = () => {
  return (
    <div className="app">
      <TopBar />
      <VideoBar />
    </div>
  );
};

export default App;
