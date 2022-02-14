import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faSass, faGithub } from '@fortawesome/free-brands-svg-icons';



const Skills = () => {

     useEffect(() => {
          Aos.init({duration: 2500});
      }, []);
  


      return ( 
           <div id="skills">
                <div id="skills-container">
                    <h1>~Russell's Skills~</h1>
                    <div>
                    <FontAwesomeIcon icon={faHtml5} />&nbsp;HTML5&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCss3} />&nbsp;CSS3&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faJs} />&nbsp;JavaScript (ES6)&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faReact} />&nbsp;ReactJS&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSass} />&nbsp;SASS&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faGithub} />&nbsp;GIT/GITHUB&nbsp;&nbsp;&nbsp;REDUX
                    </div>
               </div>
          </div>
          );
    
}
 
export default Skills;