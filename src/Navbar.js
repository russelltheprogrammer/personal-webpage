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
     );
    }
    else if (!isDesktop) {
        return ( 
            <div>
                <NavbarMainLinks handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed} personalLinks={false} />
            </div>
         );
        }
}
 
export default Navbar;