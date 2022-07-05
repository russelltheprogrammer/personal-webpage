const AboutDropDownList = ({props}) => {

    if(props.description === "WHO AM I" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                    <p>I am self-taught web developer based out of New York City. My journey began in July 2020 when I created my first Javascript variable.
                    <br/><code>var x = "hello world"</code><br/>
                    Ever since then, I have been hooked on programming and continue to refine my skills on a daily basis.
                    I am currently looking to join a team that shares my same passion.
                    </p>
            </div>
        )
    }
    else if(props.description === "WHAT I DO RIGHT NOW" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                <p>Currently, I work part time in tax accounting and spend the rest of my time focused on my goal of becoming a full time 
                    web developer. Some of the ways I develop my programming skills are by building personal projects, learning new concepts/best practices/technologies, 
                    reading about computer science fundamentals, and practicing my algorithm skills.
                </p>
            </div>
        )
    }
    else if(props.description === "WHAT I USED TO DO" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                <p> I used to work full time as a tax accountant and stumbled upon web development randomly during the Pandemic after conversing with a friend.
                    For fun, I started programming, then later realized I could teach myself the skills needed to enter the profession.<br/><br/>
                    As an accountant, I have over 9 years of experience working in tax and I am a Certified Public Accountant 
                    in the State of New York. I still manage a side business to this day. Check out my website at&nbsp;
                    <a href="http://www.monteithtaxcpa.com/"
                    target="_blank"
                    rel="noreferrer noopener">www.monteithtaxcpa.com</a>.
                </p>
            </div>
        )
    }
    else if(props.description === "EDUCATION" && props.isActive) {
        return (
            <div>
                <ul className="about-drop-down-word-list">
                    <li>freeCodeCamp Responsive Web Design Certification</li>
                    <li>freeCodeCamp Javascript Algorithms and Data Structures Certification</li>
                    <li>freeCodeCamp Front End Libraries Certification</li>
                    <li>Graduated from Binghamton University with a Bachelor of Science in Accounting</li>
                    <li>Graduated from Binghamton University with a Master of Science in Accounting</li>
                </ul>
            </div>
        )
    }
    else if(props.description === "OUTSIDE INTERESTS" && props.isActive) {
        return (
            <div className="about-drop-down-word-blurb">
                <p>It might be hard to believe but I do not program 24/7, 365 days a year. Of course, I enjoy it but other times
                    you can find me partaking in other activities such as watching football/Formula1, playing video games/board games, 
                    exercising, being outdoors, listening to synthwave music, or simply relaxing in space.
                </p>
            </div>
        )
    }
    else if(props === "div") {
        return (
            <div>
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