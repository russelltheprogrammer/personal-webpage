import React, { useState, useEffect } from "react";
import NavbarMainLinks from "./NavbarMainLinks";

const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia)
    });

    useEffect(() => {
        window.addEventListener("scroll", handleShowNavbar);
        return () => window.removeEventListener("scroll", handleShowNavbar)
    }, []);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 770)
    };

    const handleShowNavbar = () => window.scrollY > 100 ? setShowNavbar(false) : setShowNavbar(true);

    if(isDesktop) {
        return ( 
            <div>
                {showNavbar ? <NavbarMainLinks handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed} personalLinks={true} /> : <div></div>}
            </div>
     );
    }
    else if (!isDesktop) {
        return ( 
            <div>
                {showNavbar ? <NavbarMainLinks handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed} personalLinks={false} /> : <div></div>}
            </div>
         );
        }
}
 
export default Navbar;