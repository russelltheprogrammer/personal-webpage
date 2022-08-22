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
                    {/* Skills Header CSS */}
                    <div id="skills-header">
                         <h1 style={{ fontSize: "4rem", fontStyle: "italic", paddingBottom:  "1rem", color: "white" }}>~SKILLS~</h1>
                    </div>
                         <Card
                         sx={{
                              padding: "1.5rem",
                              fontSize: "3rem",
                              backgroundColor: "lightGrey",
                              border: ".3rem solid black",
                              boxShadow: '.3rem .3rem black',
                         }}>
                              <Grid container spacing={0} >
                                   {skillItems.map((item) => (
                                       <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                                             <Paper elevation={0} square
                                             sx={{
                                                  color: "black",
                                                  padding: "2rem",
                                                  border: "none", 
                                                  boxShadow: "none",
                                                  backgroundColor: "lightGrey",
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