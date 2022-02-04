const AboutDropDownList = ({props}) => {

    if(props.description === "Who is Russell?" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                    <p>I live in New York City and I have been doing web development since July 2020 when I created my first Javascript variable.
                    This was a big moment for someone trying to find their calling in life. Ever since then, I have been hooked on programming.
                    I am now looking to join a team that shares my similar excitement for web development. As a profession that allows for forever learning
                    and daily problem solving, I can't help but flock to it.
                    </p>
            </div>
        )
    }
    else if(props.description === "What does Russell do right now?" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                <p>Currently, I work part time in accounting and spend the rest of my time focusing on my goal of becoming a full time 
                    web developer. Some of the ways I develop my programming skills are by building personal projects, learning new coding languagues 
                    and technologies, and practicing my algorithm skills.
                </p>
            </div>
        )
    }
    else if(props.description === "What Russell used to do?" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                <p> I was a multi-millionaire but lost everything in a poor investment in an exotic lizard zoo...
                    In reality, I used to be a full time accountant but I always knew I would not work as an accountant forever. I did not discover my
                    passion for web development until later in life and I am sure glad I did because I am very happy on this new journey.
                    As an accountant, I have over 8 years of experience working in tax and I am a Certified Public Accountant 
                    in the State of New York. I still manage a side business to this day. Check out my website at&nbsp;
                    <a href="http://www.monteithtaxcpa.com/"
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
    else if(props.description === "Outside Interests/Hobbies" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                <p>Some people might find it hard to believe but I do not program 24/7, 365 days a year. Of course, I enjoy it but other times
                    you can find me partaking in other activities such as watching football, watching Formula1, playing video games/board games, 
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