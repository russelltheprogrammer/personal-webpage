import React, { useState } from "react";
import DropDownList from "./DropDownList";

const About = () => {

// const [buttonOneStatus, setbuttonOneStatus] = useState(false);
// const [buttonTwoStatus, setbuttonTwoStatus] = useState(false);
// const [buttonThreeStatus, setbuttonThreeStatus] = useState(false);
// const [buttonFourStatus, setbuttonFourStatus] = useState(false);
const [buttonStatus, setButtonStatus] = useState([
            { name: "wordsDescribe", isActive: false },
            { name: "priorWork", isActive: false },
            { name: "education", isActive: false },
            { name: "otherInterests", isActive: false  }
        ]
    );


// const handleClickButtonOne = () => !buttonOneStatus ? setbuttonOneStatus(true) : setbuttonOneStatus(false);
// const handleClickButtonTwo = () => !buttonTwoStatus ? setbuttonTwoStatus(true) : setbuttonTwoStatus(false);
// const handleClickButtonThree = () => !buttonThreeStatus ? setbuttonThreeStatus(true) : setbuttonThreeStatus(false);
// const handleClickButtonFour = () => !buttonFourStatus ? setbuttonFourStatus(true) : setbuttonFourStatus(false);

const handleButtonClick = (index) => {
    let tmp = buttonStatus.arr;
    if(tmp[index].isActive){
        tmp[index].isActive = false;
        return setButtonStatus(tmp);
    }
        tmp[index].isActive = true;
        return setButtonStatus(tmp);
}




    return ( 
        <div id="about">
            <h1>About Russell</h1>
            <div className="dropdown">
                {buttonStatus.map((el, index) =>
                <><button key={index} onClick={handleButtonClick(index)} type="button" class="btn btn-primary">
                        {el.name}
                    </button><DropDownList key={el.index} props={el.isActive} /></>

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