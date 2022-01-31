const AboutDropDownList = ({props}) => {

    if(props.description === "Words To Describe Russell" && props.isActive) {
        return (
            <div>
                <ul className="about-drop-down-word-list">
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
            <div className="about-drop-down-word-blurb">
                <p>He was a multi-millionaire but lost everything in a poor investment in an exotic lizard zoo... Now Russell is
                    trying his hand at web development. He also has over 8 years of experience working as a tax accountant and
                    is a Certified Public Accountant. Check out his website at&nbsp;
                    <a href="https://monteithtaxcpa.com/"
                    target="_blank"
                    rel="noreferrer noopener">www.monteithtaxcpa.com</a>.
                </p>
            </div>
        )
    }
    else if(props.description === "Education" && props.isActive) {
        return (
            <div>
                <ul className="about-drop-down-word-list">
                    <li>freeCodeCamp Responsive Web Design Certification</li>
                    <li>freeCodeCamp Javascript Algorithms and Data Structures Certification</li>
                    <li>freeCodeCamp Front End Libraries Certification</li>
                    <li>Graduated from Binghamton University with a Bachelor of Science in Accounting</li>
                    <li>Graduated from Binghamton University with a Masters in Accounting</li>
                </ul>
            </div>
        )
    }
    else if(props.description === "Hobbies" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                <p>Some people might find it hard to believe but Russell does not program 24/7, 365 days a year. Although he does enjoy it, other times
                    you can find Russell partaking in other activities such as watching football, watching Formula1, playing video games/board games, 
                    exercising, listening to synthwave music, or simply relaxing in space.
                </p>
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