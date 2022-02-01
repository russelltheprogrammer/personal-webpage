import React, { useState, useEffect } from "react";
import AboutDropDownList from "./AboutDropDownList";
import Aos from "aos";
import "aos/dist/aos.css"

const About = () => {

const [buttonStatus, setButtonStatus] = useState([
            { id: 0, description: "Words To Describe Russell", isActive: false },
            { id: 1, description: "Prior Work Experience", isActive: false },
            { id: 2, description: "Education", isActive: false },
            { id: 3, description: "Hobbies", isActive: false }
        ]
    );

const [popOutStatus, setPopOutStatus] = useState(false);

useEffect(() => {
    Aos.init({duration: 2500});
}, []);

const handleButtonClick = (id) => {
    let tmp = buttonStatus.slice();
    if(tmp[id].isActive){
        tmp[id].isActive = false;
        return setButtonStatus(tmp) + setPopOutStatus(false);
    }
        tmp[id].isActive = true;
        return setButtonStatus(tmp) + setPopOutStatus(true);
};

if(!popOutStatus){
    return ( 
        <div id="about">
            <div id="about-container">
            <h1>~About Russell~</h1>
            <div className="about-drop-down">
                {buttonStatus.map((el, index) => {
                    return (
                        <span key={index}>
                            <button onClick={() => handleButtonClick(el.id)} type="button" className="about-button">
                                {el.description}
                            </button>
                            <AboutDropDownList props={el} />
                        </span>
                    )}
                )}
            </div>
            </div>
        </div>
     );
}
else{
    return (
        <div id="about">
        <div id="about-pop-out">
            <div id="about-pop-out-content" data-aos="fade-in">
                {buttonStatus.map((el, index) => {
                    return (
                        <span key={index}>
                            <div className="about-exit-button-container">
                                {el.isActive ? 
                                <button onClick={() => handleButtonClick(el.id)} className="about-exit-button"><i className="fas fa-times-circle"></i></button> : 
                                <div></div>}
                            </div>
                            <div className="about-content-container">
                                <AboutDropDownList props={el} />
                            </div>
                        </span>
                    )}
                )}
            </div>
        </div>
        </div>
    )
}
}
 
export default About;