import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <div id="hero" className="section"><Hero /></div>
        <div id="about" className="section"><About /></div>
        <div id="projects" className="section"><Projects /></div>
        <div id="contact" className="section"><Contact /></div>
        <div className="section"><Footer /></div>
      </div>
    </div>
  );
}

export default App;