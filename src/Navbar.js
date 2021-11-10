import React, { useState } from "react";

const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return ( 
        
        <nav id="container-navbar" className="navbar fixed-top navbar-expand-md">
            <div className="container-fluid">
             <button 
             className="navbar-toggler" 
             type="button" 
             data-bs-toggle="collapse" 
             data-bs-target="#navbarTogglerMenu" 
             aria-controls="navbarTogglerMenu" 
             aria-expanded={!isNavCollapsed ? true : false} 
             aria-label="Toggle navigation"
             onClick={handleNavCollapse}
             >
            <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{fontSize: "20px"}}></i></span>
            </button>

             <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerMenu">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#welcome-section">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;