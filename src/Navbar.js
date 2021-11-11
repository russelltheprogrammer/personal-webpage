import React, { useState, useEffect } from "react";
import NavbarMainLinks from "./NavbarMainLinks";

const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia)
    });

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 770)
    };

    if(isDesktop) {
    return ( 
        <div>
        <NavbarMainLinks handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed} personalLinks={true} />
        </div>
        // <nav id="container-navbar" className="navbar fixed-top navbar-expand-md">
        //     <div className="container-fluid">
        //      <button 
        //      className="navbar-toggler" 
        //      type="button" 
        //      data-bs-toggle="collapse" 
        //      data-bs-target="#navbarTogglerMenu" 
        //      aria-controls="navbarTogglerMenu" 
        //      aria-expanded={!isNavCollapsed ? true : false} 
        //      aria-label="Toggle navigation"
        //      onClick={handleNavCollapse}
        //      >
        //     <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{fontSize: "20px"}}></i></span>
        //     </button>

        //      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerMenu">
        //         <ul id="site-links" className="navbar-nav mr-auto">
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#about">About</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#skills">Skills</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#projects">Projects</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#contact">Contact</a>
        //             </li>
        //         </ul>
        //         <ul id="personal-links" className="navbar-nav ms-auto">
        //                 <li className="nav-item">
        //                 <a className="nav-link" href="https://www.linkedin.com/in/russell-monteith-cpa-0a43975a/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin-in"></i></a>
        //                 </li>
        //                 <li className="nav-item">
        //                 <a className="nav-link" href="https://github.com/russelltheprogrammer" target="_blank" rel="noreferrer noopener"><i className="fab fa-github-square"></i></a>
        //                 </li>
        //                 <li className="nav-item">
        //                 <a className="nav-link" href="mailto: russelltheprogrammer@gmail.com" target="_blank" rel="noreferrer noopener"><i className="fas fa-envelope"></i></a>
        //                 </li>
        //         </ul>
        //     </div>
        //     </div>
        // </nav>
     );
    }
    else if (!isDesktop) {
        return ( 
            <div>
            <NavbarMainLinks handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed} personalLinks={false} />
            </div>
            // <nav id="container-navbar" className="navbar fixed-top navbar-expand-md">
            //     <div className="container-fluid">
            //      <button 
            //      className="navbar-toggler" 
            //      type="button" 
            //      data-bs-toggle="collapse" 
            //      data-bs-target="#navbarTogglerMenu" 
            //      aria-controls="navbarTogglerMenu" 
            //      aria-expanded={!isNavCollapsed ? true : false} 
            //      aria-label="Toggle navigation"
            //      onClick={handleNavCollapse}
            //      >
            //     <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{fontSize: "20px"}}></i></span>
            //     </button>
    
            //      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerMenu">
            //         <ul id="site-links" className="navbar-nav mx-auto">
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#about">About</a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#skills">Skills</a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#projects">Projects</a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#contact">Contact</a>
            //             </li>
            //         </ul>
            //     </div>
            //     </div>
            // </nav>
         );
        }
}
 
export default Navbar;