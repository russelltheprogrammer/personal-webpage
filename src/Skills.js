import React, { useState, useEffect } from "react";
import SkillsList from './SkillsList.js';
import { colors } from './constants.js';



const Skills = () => {

const [ fontColor, setFontColor ] = useState("white");
const [ fontColorNumber, setFontColorNumber ] = useState(0);
const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);

useEffect(() => {
     let number = fontColorNumber;
     let timer = setTimeout(() => {
          if(number === 7){
               setFontColorNumber(0);
               setFontColor(colors[0]);
          }
          else{
               setFontColorNumber(number + 1);
               setFontColor(colors[number + 1]);
          }
     }, 2000);
     return () => clearTimeout(timer);
});


useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
});

const updateMedia = () => {
    setIsDesktop(window.innerWidth > 890)
};


      return ( 
           <div id="skills">
                <div id="skills-container">
                    <h1>~Skills~</h1>
                    <div style={{color: fontColor }}>
                         {isDesktop ? <SkillsList props={true} /> : <SkillsList props={false} />}
                    </div>
               </div>
          </div>
          );
}
 
export default Skills;