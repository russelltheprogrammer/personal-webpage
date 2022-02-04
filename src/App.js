import './index.scss';
import React from "react";
import Navbar from "./Navbar";
import WelcomeSection from "./WelcomeSection";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from './Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
