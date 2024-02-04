import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/ImageCaption">
                        ImageCaption
                    </NavLink>
                    <NavLink to="/AfterMatch">
                        AfterMatch
                    </NavLink>
                    <NavLink to="/chatbot">
                        ChatBot
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;