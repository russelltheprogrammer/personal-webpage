import copyToClipBoard from "./copyToClipboard";


const NavbarPersonalLinks = () => {
    
    return ( 
    <ul id="nav-personal-links" className="navbar-nav ms-auto">
            <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/russell-monteith-cpa-0a43975a/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin-in"></i></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://github.com/russelltheprogrammer" target="_blank" rel="noreferrer noopener"><i className="fab fa-github-square"></i></a>
            </li>
            <li className="nav-item">
            <span className="nav-link">
                <button className="nav-link-button" onClick={() => copyToClipBoard("russelltheprogrammer@gmail.com", "Russell's E-mail Has Been Copied To The Clipboard.")}>
                <i className="fas fa-envelope"></i></button>
            </span>
            </li>
    </ul>

     );
}
 
export default NavbarPersonalLinks;