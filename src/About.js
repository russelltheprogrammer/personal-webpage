import React, { useState } from "react";
import AboutDropDownList from "./AboutDropDownList";

const About = () => {

const [buttonStatus, setButtonStatus] = useState([
            { id: 0, description: "Words To Describe Russell", isActive: false },
            { id: 1, description: "Prior Work Experience", isActive: false },
            { id: 2, description: "Education", isActive: false },
            { id: 3, description: "Other Interests", isActive: false }
        ]
    );

const handleButtonClick = (id) => {
    let tmp = buttonStatus.slice();
    if(tmp[id].isActive){
        tmp[id].isActive = false;
        return setButtonStatus(tmp);
    }
        tmp[id].isActive = true;
        return setButtonStatus(tmp);
};

    return ( 
        <div id="about">
            <h1>About Russell</h1>
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
     );
}
 
export default About;