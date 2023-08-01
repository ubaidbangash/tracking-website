import React from "react";
import "./App.css";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import MyNavbar from "./Components/MyNavbar";
import ExploreImage from "./Components/exploreImages/exploreImage";
import ExploreGallery from "./Components/exploreGallery/ExploreGallery";
import Luggs from "./Components/luggs/luggs";
import Premium from "./Components/premium/premium";
import Yilomi from "./Components/yilomi/yilomi";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore-image" element={<ExploreImage />} />
        <Route path="/traking" element={<ExploreGallery />} />
        <Route path="/luggs" element={<Luggs />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/yilomi" element={<Yilomi />} />
      </Routes>
    </div>
  );
}

export default App;
