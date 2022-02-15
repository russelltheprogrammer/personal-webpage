const Contact = () => {
    return ( 
        <div id="contact">
                <h1>~Contact Information~</h1>
                    <div id="contact-grid">
                        <a  href="https://forum.freecodecamp.org/u/rundownx3/summary"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>FCC Profile
                        </p>
                        </a>
                        <a  href="https://github.com/russelltheprogrammer"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>GitHub Profile
                        </p>
                        </a>
                        <a  href="mailto: russelltheprogrammer@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>Send me an e-mail
                        </p>
                        </a>
                    <a  href="tel:+1234567890"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>Call me maybe (Not a real phone number)
                        </p>
                        </a>
                    </div>
            </div>
     );
}
 
export default Contact;