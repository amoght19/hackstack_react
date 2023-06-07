import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Home";
import Landing from "./Landing";
import MovieDetail from "./MovieDetail";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:movie" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default App;
