import React from 'react';
import {NavLink} from "react-router-dom";


function Footer(props) {
    return (
        <ul>
            <li>
                <NavLink to="/"  >main page</NavLink>
            </li>
            <li>
                <NavLink to="/users"> users page</NavLink>
            </li>
        </ul>
    );
}

export default Footer;
