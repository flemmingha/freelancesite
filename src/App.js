import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./Navbar/Navbar";
//import NavbarHook from "./NavbarHook/NavbarHook";
import Temp from "./pages/Temp";
//import Home from "./pages/Home";
//import About from "./pages/About";
//import Join from "./pages/Join";
//import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
       {/*<Navbar /> */}
      {/*<NavbarHook /> */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Temp />} />
          {/*
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Contact" element={<Contact />} />
          */}
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
