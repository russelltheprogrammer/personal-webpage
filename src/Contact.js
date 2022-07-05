import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

const sendEmail = () => {
    window.location = "mailto:russelltheprogrammer@gmail.com";
}

const sendPhoneNumber = () => {
    window.location= "tel:347-508-3407";
}

    return ( 
        <div id="contact">
            <h1>~CONTACT~</h1>
                <div id="contact-container">
                    <p className='contact-name'>RUSSELL</p>
                    <p onClick={sendPhoneNumber} className='contact-phone-number'><FontAwesomeIcon icon={faPhoneSquare} /> (347) 508 3407</p>
                    <p onClick={sendEmail} className="contact-email"><FontAwesomeIcon icon={faPaperPlane} /> russelltheprogrammer@gmail.com</p>
                </div>
        </div>
     );
}
 
export default Contact;