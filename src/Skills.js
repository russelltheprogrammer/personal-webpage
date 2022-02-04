import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



const Skills = () => {

     useEffect(() => {
          Aos.init({duration: 2500});
      }, []);
  


      return ( 
           <div id="skills" data-aos="flip-left">
               HTML, CSS, JS, REACTJS, SASS, REDUX, BOOTSTRAP, GIT/GITHUB, VSC, CLI
          </div>
          );
    
}
 
export default Skills;