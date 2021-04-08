import React from 'react';
import { Button, Nav, Sidebar } from "grommet";
import { BladesHorizontal, Chat, Home } from 'grommet-icons';

export const Navbar = () => (
    <Sidebar background='brand'>
        <Nav gap='small'>
            <Button icon={<Home />} />
            <Button icon={<BladesHorizontal />} />
            <Button icon={<Chat />} />
        </Nav>
    </Sidebar>
)
