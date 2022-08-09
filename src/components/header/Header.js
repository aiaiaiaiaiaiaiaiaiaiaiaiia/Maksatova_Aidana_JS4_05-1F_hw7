import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./header.module.css"

function Header() {
    return (
        <ul>
            <li>
                <NavLink to="/about" className={classes.linki}>about page</NavLink>
            </li>
            <li>
                <NavLink to="/information" className={classes.linki}>information page</NavLink>
            </li>
        </ul>
    );
}

export default Header;