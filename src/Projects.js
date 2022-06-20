import { flexItems } from "./constants.js"
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";

const Projects = () => {

    return ( 
        <Container
        sx={{
            width: "80%",
            textAlign: "center",
        }}>
        <div id="projects">
            <div className="projects-header-container">
                <h1 className="projects-header">~Projects~</h1>
            </div> 
              <Grid container spacing={3} alignItems="center" justifyContent="center">  
                    {flexItems.map((item) => (
                     <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Card
                            elevation={3}
                            sx={{
                                backgroundColor: "#8A7BAF",
                                border: ".2rem solid black",
                                borderRadius: "25% 10%",
                            }}>
                            <CardActionArea href={item.url} target="_blank" rel="noreferrer noopener" alt="project link">
                            <CardMedia
                                component="img"
                                height="150"
                                image={item.img}
                                alt={item.alt}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                <div className="projects-wording">{item.title}</div>
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            </Card>
                            </Grid>
                    ))}
             </Grid>       
        </div>
        </Container>
     );
}
 
export default Projects;