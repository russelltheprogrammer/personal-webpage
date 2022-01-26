import NavbarPersonalLinks from "./NavbarPersonalLinks";

const NavbarMainLinks = (props) => {
    return ( 
        <nav id="container-navbar" className="navbar fixed-top navbar-expand-md">
            <div className="container-fluid">
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarTogglerMenu" 
            aria-controls="navbarTogglerMenu" 
            aria-expanded={!props.isNavCollapsed ? true : false} 
            aria-label="Toggle navigation"
            onClick={props.handleNavCollapse}
            >
            <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{fontSize: "20px"}}></i></span>
            </button>

            <div className={`${!props.isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerMenu">
                <ul id="site-links" className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                {props.personalLinks ? <NavbarPersonalLinks /> : ''}
            </div>
            </div>
        </nav>
        );
}
 
export default NavbarMainLinks;