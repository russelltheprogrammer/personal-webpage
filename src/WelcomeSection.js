import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WelcomeSection = () => {

    useEffect(() => {
        Aos.init({duration: 2500});
    }, []);

    return ( 
        <div id="welcome-section" data-aos="zoom-in-down">
                <h1>I am Russell Monteith</h1>
                    <p>A Front End Developer on the journey to becoming a Full Stack Developer. Scroll down to find out more...</p>
                    <img className="welcome-headshot" src="/headshot.jpg" alt="Headshot"/>
        </div>
     );
}
 
export default WelcomeSection;