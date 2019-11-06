import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutMe">About Me</Link>
        </nav>
    );
}

export default Nav;