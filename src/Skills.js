import React, { useState } from "react";

const Skills = () => {

const [initialSetting, setInitialSetting] = useState(true);
const [transitionColors, setTransitionColors] = useState(null);

const changeColors = (color, transitionTime) => {
     return new Promise((resolve, reject) => {
          let wait = setTimeout(() => {
               clearTimeout(wait);
               resolve(setTransitionColors(color));
          }, transitionTime);
          
     });
};

const handleButtonClick = () => {
     setInitialSetting(false);
     return changeColors("#04E762", 250)
     .then(() => changeColors("#DC0073", 1500))
     .then(() => changeColors("#89FC00", 1500))
     .then(() => changeColors("#008BF8", 1500))
     .then(() => changeColors("#F5B700", 1500))
     .catch(err => {console.log("promise rejected", err)});
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
               <div id="skills-after" style={{ backgroundColor:transitionColors }}>
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