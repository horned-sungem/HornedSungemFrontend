import React from 'react';
import { Nav, Sidebar } from 'grommet';
import { BladesHorizontal, Chat, Home } from 'grommet-icons';
import { NavbarItem } from './NavbarItem';

export const Navbar = () => (
    <Sidebar background='brand'>
        <Nav gap='small'>
            <NavbarItem to='/'>
                <Home />
            </NavbarItem>
            <NavbarItem to='/modules/'>
                <BladesHorizontal />
            </NavbarItem>
            <NavbarItem to='/temp/'>
                <Chat />
            </NavbarItem>
        </Nav>
    </Sidebar>
);
