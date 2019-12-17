import React from 'react';
import { NavLink, useParams } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
            <NavLink to="/aboutMe" activeClassName="selected">About Me</NavLink>
        </nav>
    );
}

export default Nav;