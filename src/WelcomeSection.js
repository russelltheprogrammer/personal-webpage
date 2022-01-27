import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const WelcomeSection = () => {

    useEffect(() => {
        Aos.init({duration: 2500});
    }, []);

    return ( 
        <div id="welcome-section" data-aos="zoom-in-down">
                <h1>Russell Monteith's Personal Web Page</h1>
                    <p>I am a Front End Developer, among other things... Scroll down to find out more...</p>
        </div>
     );
}
 
export default WelcomeSection;