import headshot from "./images/headshot.jpg";
import * as React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";

const WelcomeSection = () => {

    return (
        <div id="welcome-section">
            <Card
              sx={{
                padding: ".5% 2% 4% 2%",
                width: "80%",
                color: 'white',
                textAlign: "center",
                backgroundColor: "#8A7BAF",
                border: ".3rem solid black",
                boxShadow: '.3rem .3rem black',
              }}
            >
                <CardContent
                  sx={{
                    paddingBottom: '3%',
                    fontSize: "300%",
                  }}
                    >
                <h1 style={{ fontSize: "200%"}}>I am Russell Monteith</h1>
                    <p>A New York City based Web Developer - Scroll down to find out more...</p>
                </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            image={headshot}
                            alt="Headshot"
                            sx={{
                                margin: "auto",
                                maxWidth: "30%",
                                '@media (min-width: 771px) and (max-width: 1024px)': {
                                  maxWidth: "40%"
                                },
                                '@media (min-width: 625px) and (max-width: 770px)': {
                                  maxWidth: "50%"
                                },
                                '@media (max-width: 624px)': {
                                  maxWidth: "75%"
                                },
                                height: 'auto',
                                width: 'auto',
                                border: ".25rem solid black",
                                borderRadius: '50%',
                                direction: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        />
            </Card>
        </div>
     );
}
 
export default WelcomeSection;