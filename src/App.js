import './App.css';
import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;