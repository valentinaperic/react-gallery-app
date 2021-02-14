import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/search/tree">Tree</NavLink></li>
            <li><NavLink to="/search/lake">Lake</NavLink></li>
            <li><NavLink to="/search/ocean">Ocean</NavLink></li>
        </ul>
    </nav>
);

export default Nav;