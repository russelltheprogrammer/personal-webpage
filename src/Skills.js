import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';



const Skills = () => {

     useEffect(() => {
          Aos.init({duration: 2500});
      }, []);
  


      return ( 
           <div id="skills">
                <div id="skills-container">
                    <h1>~Russell's Skills~</h1>
                    <div>
                    <FontAwesomeIcon icon={faRocket} /> HTML5    CSS3, JavaScript ES6, ReactJS, REDUX, BOOTSTRAP, SASS, GIT/GITHUB
                    </div>
               </div>
          </div>
          );
    
}
 
export default Skills;