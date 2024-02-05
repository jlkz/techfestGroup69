import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/SignIn">
                        Sign In
                    </NavLink>
                    <NavLink to="/SignUp">
                        Sign Up
                    </NavLink>
                    <NavLink to="/ImageCaption">
                        ImageCaption
                    </NavLink>
                    <NavLink to="/AfterMatch">
                        AfterMatch
                    </NavLink>
                    <NavLink to="/FoodDiscount">
                        Food Discount
                    </NavLink>
                    <NavLink to="/chatbot">
                        ChatBot
                    </NavLink>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;