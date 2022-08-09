import React from 'react';
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <ul>
            <li>
                <NavLink to="/about">about page</NavLink>
            </li>
            <li>
                <NavLink to="/information" >information page</NavLink>
            </li>
        </ul>
    );
}

export default Header;
