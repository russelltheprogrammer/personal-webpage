import React, { useState } from "react";

const Skills = () => {

const [initialSetting, setInitialSetting] = useState(true);

const handleButtonClick = () => {

return setTimeout(() => {
     setInitialSetting(false)}, 3000);
}


     if(initialSetting){
      return ( 
          <div id="skills">
               <button id="skills-button" onClick={handleButtonClick}>
               <h1 className="skills-heading">SKILLS</h1>
               </button>
               <br/>
               <br/>
               <i className="far fa-hand-point-up"></i>
          </div>
          );
    }
    else if(!initialSetting){
     return(
          <div id="skills">
              Skills
          </div>
     )
    }



}
 
export default Skills;

// click skills button, then fade away, then changed colors and lists skills such as pragamming skills
// make a scss mixin for skills ID?