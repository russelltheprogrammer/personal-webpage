import { skillItems }from './constants.js';
import {
     Card,
     Container,
     Grid,
     Paper,
 } from "@mui/material";
 import JavascriptIcon from '@mui/icons-material/Javascript';


const Skills = () => {

      return ( 
          <div>
               <div>
               </div>
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
                              padding: "3rem",
                              fontSize: "3rem",
                              color: "black",
                              backgroundColor: "#8A7BAF"
                         }}>
                              <Grid container spacing={3} alignItems="center" justifyContent="center">
                                   {skillItems.map((item) => (
                                       <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                                             <Paper sx={{
                                                  backgroundColor: "white",
                                                  border: ".2rem solid black",
                                             }}>
                                             {item.title}
                                             <JavascriptIcon sx={{
                                                  fontSize: "250%",
                                             }}/>
                                             </Paper>
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