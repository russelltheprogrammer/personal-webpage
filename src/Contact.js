import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return ( 
        <div id="contact">
            <h1>~Contact~</h1>
                <div id="contact-container">
                    <p>Russell</p>
                    <p><FontAwesomeIcon icon={faPhoneSquare} /> (347) 508 3407</p>
                    <p><FontAwesomeIcon icon={faPaperPlane} /> russelltheprogrammer@gmail.com</p>
                </div>
        </div>
     );
}
 
export default Contact;