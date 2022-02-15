import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faSass, faGithub } from '@fortawesome/free-brands-svg-icons';



const Skills = () => {

const [ fontColor, setFontColor ] = useState("white");

const colors = ["white", "red", "yellow", "blue", "purple"];
  
useEffect(() => {
     let colorToChange;



     setFontColor(colorToChange)

});



      return ( 
           <div id="skills">
                <div id="skills-container">
                    <h1>~Russell's Skills~</h1>
                    <div style={{color: fontColor }}>
                         <div className="skills-item">
                         <FontAwesomeIcon icon={faHtml5} />&nbsp;HTML5&nbsp;&nbsp;&nbsp;
                         <FontAwesomeIcon icon={faCss3} />&nbsp;CSS3&nbsp;&nbsp;&nbsp;
                         <FontAwesomeIcon icon={faJs} />&nbsp;JavaScript (ES6)
                         </div>
                         <div className="skills-item">
                         <FontAwesomeIcon icon={faReact} />&nbsp;ReactJS&nbsp;&nbsp;&nbsp;
                         <FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap&nbsp;&nbsp;&nbsp;
                         <FontAwesomeIcon icon={faSass} />&nbsp;SASS
                         </div>
                         <div className="skills-item">
                         <FontAwesomeIcon icon={faGithub} />&nbsp;GIT/GITHUB&nbsp;&nbsp;&nbsp;
                         <FontAwesomeIcon icon={faRegistered} />&nbsp;REDUX
                         </div>
                    </div>
               </div>
          </div>
          );
    
}
 
export default Skills;