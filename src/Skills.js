import React, { useState } from "react";

const Skills = () => {

const [initialSetting, setInitialSetting] = useState(true);


const handleButtonClick = () => {
     setInitialSetting(false);
};

     if(initialSetting){
      return ( 
           <div id="skills">
               <div id="skills-before">
                    <button id="skills-button" onClick={handleButtonClick}>
                    <h1 className="skills-heading">SKILLS</h1>
                    </button>
                    <br/>
                    <br/>
                    <i className="far fa-hand-point-up"></i>
               </div>
          </div>
          );
    }
    else if(!initialSetting){
     return(
          <div id="skills">
               <div id="skills-after">
               HTML, CSS, JS, REACTJS, SASS, REDUX, BOOTSTRAP, GIT/GITHUB, VSC, CLI
               </div>
          </div>
     )
    }
}
 
export default Skills;

// click skills button, then fade away, then changed colors and lists skills such as pragamming skills
// make a scss mixin for skills ID?
// transition have background-colors change synchronously while chaining promises with a time delay