import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent.jsx";
import About from "./pages/About.jsx"; 
import Contact from "./pages/Contact"; 
import LinkPage from "./pages/LinkPage"; 
import Movies from "./Components/Movies";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/link" element={<LinkPage />} />
      </Routes>
    </Router>
  );
};

export default App;
