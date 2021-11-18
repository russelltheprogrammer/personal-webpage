const AboutDropDownList = ({props}) => {

    if(props.description === "Words To Describe Russell" && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <ul id="about-words-describe">
                    <li>Problem Solver</li>
                    <li>Detail-Oriented</li>
                    <li>Reliable</li>
                    <li>Professional</li>
                    <li>Adaptable and Versatile</li>
                    <li>Leader and Listener</li>
                    <li>Intellectually Curious</li>
                    <li>Organized and Time Management Extraordinaire</li>
                </ul>
            </div>
        )
    }
    else if(props.description === "Prior Work Experience" && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <p>Millionaire</p>
            </div>
        )
    }
    else if(props.description === "Education" && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <p>University</p>
            </div>
        )
    }
    else if(props.description === "Other Interests" && props.isActive) {
        return (
            <div className="drop-down-word-list">
                <p>Fun</p>
            </div>
        )
    }
    else {
        return(
            <div>
            </div>
            
        )
    }
}

export default AboutDropDownList;