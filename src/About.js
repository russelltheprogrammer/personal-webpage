import React, { useState, useEffect } from "react";
import AboutDropDownList from "./AboutDropDownList";
import Aos from "aos";
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {

const [buttonStatus, setButtonStatus] = useState([
            { id: 0, description: "Who is Russell?", isActive: false },
            { id: 1, description: "What does Russell do right now?", isActive: false },
            { id: 2, description: "What Russell used to do?", isActive: false },
            { id: 3, description: "Education", isActive: false },
            { id: 4, description: "Outside Interests/Hobbies", isActive: false }
        ]
    );

const [popOutStatus, setPopOutStatus] = useState(false);

useEffect(() => {
    Aos.init({duration: 2000});
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
            <h1>~About~</h1>
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
        <div>
        <div id="about-pop-out">
            <div id="about-pop-out-content" data-aos="fade-in">
                {buttonStatus.map((el, index) => {
                    return (
                        <span key={index}>
                            <div className="about-exit-button-container">
                                {el.isActive ? 
                                <button onClick={() => handleButtonClick(el.id)} className="about-exit-button"> <FontAwesomeIcon icon={faTimesCircle} /></button> : 
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
                        <AboutDropDownList props={"div"} />
                    </span>
                )}
            )}
        </div>
        </div>
    </div>
    </div>
    )
}
}
 
export default About;