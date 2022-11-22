import React from "react";
import Counter from "./components/Counter";
import NavBar from "./components/nav/NavBar";
import Genres from "./components/Genres";

const App = () => (
  <div className="App">
    <NavBar />
    <h1>Hello World</h1>
    <Counter />
    <Genres />
  </div>
);
export default App;
