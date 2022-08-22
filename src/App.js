import './index.scss';
import React from "react";
import Navbar from "./Navbar";
import WelcomeSection from "./WelcomeSection";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from './Footer';
import appBackground from "./images/appBackground.jpg";


const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${appBackground})` }}>
      <Navbar />
      <WelcomeSection />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
