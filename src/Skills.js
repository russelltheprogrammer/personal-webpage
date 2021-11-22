import React, { useState } from "react";

const Skills = () => {

const [skillsInitialBackground, setSkillsInitialBackground] = useState(true);

     if(skillsInitialBackground){
     return ( 

          <div id="skills">
               <button id="skills-button">
               <h1 className="skills-heading">SKILLS</h1>
               </button>
               <br/>
               <br/>
               <i class="far fa-hand-point-up"></i>
               
               
               
          </div>
          );
    }
}
 
export default Skills;

// click skills button, then fade away, then changed colors and lists skills such as pragamming skills
// make a scss mixin for skills ID?