import React, { useState } from "react";
import AboutDropDownList from "./AboutDropDownList";

const About = () => {

// const [buttonOneStatus, setbuttonOneStatus] = useState(false);
// const [buttonTwoStatus, setbuttonTwoStatus] = useState(false);
// const [buttonThreeStatus, setbuttonThreeStatus] = useState(false);
// const [buttonFourStatus, setbuttonFourStatus] = useState(false);
const [buttonStatus, setButtonStatus] = useState([
            { id: 0, description: "Words To Describe Russell", isActive: false },
            { id: 1, description: "Prior Work Experience", isActive: false },
            { id: 2, description: "Education", isActive: false },
            { id: 3, description: "Other Interests", isActive: false }
        ]
    );

// const handleClickButtonOne = () => !buttonOneStatus ? setbuttonOneStatus(true) : setbuttonOneStatus(false);
// const handleClickButtonTwo = () => !buttonTwoStatus ? setbuttonTwoStatus(true) : setbuttonTwoStatus(false);
// const handleClickButtonThree = () => !buttonThreeStatus ? setbuttonThreeStatus(true) : setbuttonThreeStatus(false);
// const handleClickButtonFour = () => !buttonFourStatus ? setbuttonFourStatus(true) : setbuttonFourStatus(false);

// useEffect(() => {
// }, []);

// when button is clicked AboutDropDownList will not re-render. How do we fix this?


const handleButtonClick = (id) => {
    let tmp = buttonStatus;
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
            <div className="dropdown">
                {buttonStatus.map((el, index) => {
                    return (
                        <span key={index}>
                            <button onClick={() => handleButtonClick(el.id)} type="button" className="btn btn-primary">
                                {el.description}
                            </button>
                            <AboutDropDownList props={el} />
                        </span>
                    )}
                )}
             

                {/* <button type="button" class="btn btn-success" onClick={handleClickButtonOne}>Words To Describe Russell</button>
                {buttonOneStatus ? <DropDownList wordsDescribe={true} /> : <DropDownList wordsDescribe={false} />}
                <button type="button" class="btn btn-success" onClick={handleClickButtonTwo}>Prior Work Experience</button>
                {buttonTwoStatus ? <DropDownList priorWork={true} /> : <DropDownList priorWork={false} />}
                <button type="button" class="btn btn-success" onClick={handleClickButtonThree}>Education</button>
                {buttonThreeStatus ? <DropDownList education={true} /> : <DropDownList education={false} />}
                <button type="button" class="btn btn-success" onClick={handleClickButtonFour}>Other Interests</button>
                {buttonFourStatus ? <DropDownList otherInterests={true} /> : <DropDownList otherInterests={false} />} */}
            </div>
        </div>
     );
}
 
export default About;