import copyEmailToClipBoard from "./copyEmailToClipBoard";


const NavbarPersonalLinks = () => {
    return ( 
    <ul id="personal-links" className="navbar-nav ms-auto">
            <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/russell-monteith-cpa-0a43975a/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin-in"></i></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://github.com/russelltheprogrammer" target="_blank" rel="noreferrer noopener"><i className="fab fa-github-square"></i></a>
            </li>
            <li className="nav-item">
            <span className="nav-link">
                <button className="nav-link-button" onClick={() => copyEmailToClipBoard("russelltheprogrammer@gmail.com")}><i className="fas fa-envelope"></i></button>
            </span>
            </li>
    </ul>

     );
}
 
export default NavbarPersonalLinks;