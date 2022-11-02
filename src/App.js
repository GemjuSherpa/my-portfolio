import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.scss';

// Components imports
import Navbar from "./components/header/Navbar"
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer"
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import PageNotFound from "./components/page_not_found/PageNotFound";

const App = () => {
  return (
   
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/experience" element={<Experience/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route element={<PageNotFound/>} />
          </Routes>

          <Footer />
        </div>
      </Router>

  );
}

export default App;