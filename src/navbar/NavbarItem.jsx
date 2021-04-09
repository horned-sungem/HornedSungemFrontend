import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.sass'

export const NavbarItem = ({to, children, ...props}) => (
    <NavLink exact to={to} className='navbar__item' activeClassName='navbar__item--active' {...props}>
        {children}
    </NavLink>
);
