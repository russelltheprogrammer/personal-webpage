import './index.scss';
import React from "react";
import Navbar from "./Navbar";
import WelcomeSection from "./WelcomeSection";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer Information */}
      <div id="footer">Coded by 
        <a 
        target="_blank"
        rel="noreferrer noopener"
        href="https://forum.freecodecamp.org/u/rundownx3">
        Rundownx3</a> (An aspiring programmer) for FCC curriculum.
      </div>
    </div>
  );
}

export default App;
