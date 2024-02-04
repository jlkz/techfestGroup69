import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/ImageCaption" activeStyle>
                        ImageCaption
                    </NavLink>
                    <NavLink to="/AfterMatch" activeStyle>
                        AfterMatch
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;