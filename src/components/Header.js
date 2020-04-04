import React from "react";
import { NavLink } from "react-router-dom";

import morty from "../images/morty.png";
import rick from "../images/rick.png";

export default function Header() {
    return (
        <nav>
            <NavLink to="/">
                <img src={morty} alt="" />
                Home
            </NavLink>
            <NavLink to="/characters">
                <img src={rick} alt="" /> Characters
            </NavLink>
        </nav>
    );
}
