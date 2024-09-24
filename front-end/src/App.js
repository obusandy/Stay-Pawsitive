import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Navbar from "./components/Navbar";

import React from "react";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
