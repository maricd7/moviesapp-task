import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Details, NotFound } from "./pages";
import { MovieContextProvider } from "./contexts/MoviesContext";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MovieContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:type/:id" element={<Details />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MovieContextProvider>
      </Router>
    </div>
  );
};

export default App;
