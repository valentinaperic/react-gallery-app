import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/tree">Tree</NavLink></li>
            <li><NavLink to="/lake">Lake</NavLink></li>
            <li><NavLink to="/ocean">Ocean</NavLink></li>
        </ul>
    </nav>
);

export default Nav;

/** 
 * NOTE: When your routing is setup correctly, App.js will have a Switch element, 
 * and nested inside of that, you will have separate Route tags for each of your three main topics.
 */