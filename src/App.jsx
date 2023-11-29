import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import Journey from "./components/Journey";
import About from "./components/About";

function App () {
  return (
    <>
    <Navigation />
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Journey />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
