import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Home";
import Landing from "./Landing";
import MovieDetail from "./MovieDetail";

import { Provider } from "react-redux";
import store from "../store/store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:movieId" element={<MovieDetail />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
