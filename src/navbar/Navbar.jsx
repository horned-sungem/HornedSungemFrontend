import React from 'react';
import { Button, Nav, Sidebar } from 'grommet';
import { BladesHorizontal, Chat, Home } from 'grommet-icons';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <Sidebar background='brand'>
        <Nav gap='small'>
            <Button as={NavLink} to='/' icon={<Home />} />
            <Button as={NavLink} to='/modules/' icon={<BladesHorizontal />} />
            <Button as={NavLink} to='/modules/' icon={<Chat />} />
        </Nav>
    </Sidebar>
);
