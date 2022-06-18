import React, { useEffect } from "react";
import NavbarPersonalLinks from "./NavbarPersonalLinks";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarMainLinks = (props) => {

    useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    return ( 
        <nav id="container-navbar" className="navbar fixed-top navbar-expand-md" data-aos="slide-left">
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
            <span className="navbar-toggler-icon"> <FontAwesomeIcon icon={faBars} size="2x"/></span>
            </button>

            <div className={`${!props.isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerMenu">
                <ul id="site-links" className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
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