import copyToClipBoard from "./copyToClipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return ( 

     <div id="footer">
        <div className="container-fluid">
            <ul id="footer-personal-links" className="d-flex justify-content-center">
            <li>
                <a className="footer-link" href="https://www.linkedin.com/in/russell-monteith-cpa-0a43975a/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
            </li>
            <li>
                <a className="footer-link" href="https://github.com/russelltheprogrammer" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                </a>
            </li>
            <li>
                <span className="footer-link">
                    <button className="footer-link-button" onClick={() => copyToClipBoard("russelltheprogrammer@gmail.com", "Russell's E-mail Has Been Copied To The Clipboard.")}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" /></button>
                </span>
            </li>
            <li>
                <a className="footer-link" href="#welcome-section" rel="noreferrer noopener">
                    <span className="footer-link">
                    <FontAwesomeIcon icon={faAnglesUp} size="lg" />
                    </span>
                </a>
            </li>
            </ul>
            <div style={{textAlign: "center", fontWeight: "bold", paddingBottom: "1%", color: "blue"}}>
            NOTE! THIS SITE IS CURRENTLY UNDER A REDESIGN, STAY TUNED FOR FURTHER CHANGES!
            </div>
        </div>
    </div>
     );
}
 
export default Footer;

