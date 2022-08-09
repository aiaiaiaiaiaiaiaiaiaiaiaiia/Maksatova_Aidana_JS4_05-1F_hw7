import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./footer.module.css"

function Footer(props) {
    return (
        <ul>
            <li>
                <NavLink to="/"  className={classes.link}>main page</NavLink>
            </li>
            <li>
                <NavLink to="/users" className={classes.link}> users page</NavLink>
            </li>
        </ul>
    );
}

export default Footer;