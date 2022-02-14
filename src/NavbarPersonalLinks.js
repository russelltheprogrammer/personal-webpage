import copyToClipBoard from "./copyToClipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const NavbarPersonalLinks = () => {
    
    return ( 
    <ul id="nav-personal-links" className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/russell-monteith-cpa-0a43975a/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/russelltheprogrammer" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faGithubSquare} size="lg" /></a>
            </li>
            <li className="nav-item">
            <span className="nav-link">
                <button className="nav-link-button" onClick={() => copyToClipBoard("russelltheprogrammer@gmail.com", "Russell's E-mail Has Been Copied To The Clipboard.")}>
                <FontAwesomeIcon icon={faEnvelope} size="lg" /></button>
            </span>
            </li>
    </ul>

     );
}
 
export default NavbarPersonalLinks;