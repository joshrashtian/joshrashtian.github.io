import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Home />
      </div>
      <Projects />
    </BrowserRouter>
  );
};

export default App;
