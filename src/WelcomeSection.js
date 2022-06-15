import headshot from "./images/headshot.jpg";
import * as React from 'react';
import {
    Card
} from "@mui/material";


const WelcomeSection = () => {

    return (
        <div id="welcome-section">
            <Card
              sx={{
                marginTop: '6%',
                padding: "1%",
                width: "70%",
                color: 'white',
                textAlign: "center",
                backgroundColor: "#8A7BAF",
              }}
            >
                <h1>I am Russell Monteith</h1>
                    <p>A Front End Developer on the journey to becoming a Full Stack Developer. Scroll down to find out more...</p>
                    <img className="welcome-headshot" src={headshot} alt="Headshot"/>
            </Card>
        </div>
     );
}
 
export default WelcomeSection;