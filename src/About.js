import React, { useState } from "react";
import DropDownList from "./DropDownList";

const About = () => {

const [buttonOneStatus, setbuttonOneStatus] = useState(false);
const [buttonTwoStatus, setbuttonTwoStatus] = useState(false);
const [buttonThreeStatus, setbuttonThreeStatus] = useState(false);
const [buttonFourStatus, setbuttonFourStatus] = useState(false);


const handleClickButtonOne = () => !buttonOneStatus ? setbuttonOneStatus(true) : setbuttonOneStatus(false);
const handleClickButtonTwo = () => !buttonTwoStatus ? setbuttonTwoStatus(true) : setbuttonTwoStatus(false);
const handleClickButtonThree = () => !buttonThreeStatus ? setbuttonThreeStatus(true) : setbuttonThreeStatus(false);
const handleClickButtonFour = () => !buttonFourStatus ? setbuttonFourStatus(true) : setbuttonFourStatus(false);


    return ( 
        <div id="about">
            <h1>About Russell</h1>
            <div className="dropdown">
                <button type="button" class="btn btn-success" onClick={handleClickButtonOne}>Words To Describe Russell</button>
                {buttonOneStatus ? <DropDownList wordsDescribe={true} /> : <DropDownList wordsDescribe={false} />}
                <button type="button" class="btn btn-success" onClick={handleClickButtonTwo}>Prior Work Experience</button>
                {buttonTwoStatus ? <DropDownList priorWork={true} /> : <DropDownList priorWork={false} />}
                <button type="button" class="btn btn-success" onClick={handleClickButtonThree}>Education</button>
                {buttonThreeStatus ? <DropDownList education={true} /> : <DropDownList education={false} />}
                <button type="button" class="btn btn-success" onClick={handleClickButtonFour}>Other Interests</button>
                {buttonFourStatus ? <DropDownList otherInterests={true} /> : <DropDownList otherInterests={false} />}
            </div>
        </div>
     );
}
 
export default About;