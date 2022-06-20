// import React, { useState, useEffect } from "react";
import SkillsList from './SkillsList.js';
import { skillItems }from './constants.js';
// import { colors } from './constants.js';
import {
     Card,
     Container,
     Grid,
     Paper,
 } from "@mui/material";



const Skills = () => {

// const [ fontColor, setFontColor ] = useState("white");
// const [ fontColorNumber, setFontColorNumber ] = useState(0);
// const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);

// useEffect(() => {
//      let number = fontColorNumber;
//      let timer = setTimeout(() => {
//           if(number === 7){
//                setFontColorNumber(0);
//                setFontColor(colors[0]);
//           }
//           else{
//                setFontColorNumber(number + 1);
//                setFontColor(colors[number + 1]);
//           }
//      }, 2000);
//      return () => clearTimeout(timer);
// });


// useEffect(() => {
//     window.addEventListener("resize", updateMedia);
//     return () => window.removeEventListener("resize", updateMedia)
// });

// const updateMedia = () => {
//     setIsDesktop(window.innerWidth > 890)
// };


      return ( 
          <div>
               <Container
               sx={{
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    paddingTop: "1rem",
                    paddingBottom: "5rem",
               }}>
                    <div id="skills-header">
                         <h1 style={{ fontSize: "4rem", fontStyle: "italic", paddingBottom:  "1rem" }}>~Skills~</h1>
                    </div>
                         <Card
                         sx={{
                              padding: "3rem 0",
                              width: "80%",
                              marginLeft: "10%",
                              fontSize: "3rem",
                              color: "black",
                         }}>
                              <Grid container spacing={1} alignItems="center" justifyContent="center">
                                   {skillItems.map((item) => (
                                       <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                                        <Paper>{item.title}</Paper>
                                       </Grid>
                                   ))}
          
                               {/* <div style={{color: "blue" }}>
                                    <SkillsList props={true} />
                                   {isDesktop ? <SkillsList props={true} /> : <SkillsList props={false} />}
                              </div> */}

                              </Grid>
                         </Card>
                         
               </Container>
          </div>
          );
}
 
export default Skills;