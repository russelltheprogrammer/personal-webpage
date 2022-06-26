import { skillItems }from './constants.js';
import {
     Card,
     Container,
     Grid,
     Paper,
 } from "@mui/material";
 import SkillsIcon from './SkillsIcon.js';


const Skills = () => {

      return ( 
          <div id="skills">
               <Container
               sx={{
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    paddingTop: "1rem",
                    paddingBottom: "5rem",
               }}>
                    <div id="skills-header">
                         <h1 style={{ fontSize: "4rem", fontStyle: "italic", paddingBottom:  "1rem" }}>~SKILLS~</h1>
                    </div>
                         <Card
                         sx={{
                              padding: "1.5rem",
                              fontSize: "3rem",
                              backgroundColor: "#442F74",
                              border: "none", 
                              boxShadow: "none",
                         }}>
                              <Grid container spacing={0} alignItems="center" justifyContent="center">
                                   {skillItems.map((item) => (
                                       <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                                             <Paper sx={{
                                                  border: ".2rem solid black",
                                                  backgroundColor: "#8A7BAF",
                                                  color: "black",
                                                  padding: "1rem",
                                             }}>
                                             {item.title}
                                             <SkillsIcon props={item.title} />
                                             </Paper>
                                       </Grid>
                                   ))}
                              </Grid>
                         </Card>   
               </Container>
          </div>
          );
}
 
export default Skills;