import React from 'react';
import { Nav, Sidebar } from 'grommet';
import { BladesVertical, Home, Resources } from 'grommet-icons';
import { NavbarItem } from './NavbarItem';
import { LoginElement } from './LoginElement';
import { LogoutElement } from './LogoutElement';
import { useCookies } from 'react-cookie';

export const Navbar = () => {
    const [cookies] = useCookies(['user']);

    return (
        <Sidebar
            className='navbar'
            background='accent-1'
            footer={'user' in cookies ? <LogoutElement /> : <LoginElement />}>
            <Nav gap='small'>
                <NavbarItem to='/'>
                    <Home />
                </NavbarItem>
                <NavbarItem to='/modules/'>
                    <BladesVertical />
                </NavbarItem>
                {'user' in cookies && (
                    <NavbarItem to='/recommender/'>
                        <Resources />
                    </NavbarItem>
                )}
            </Nav>
        </Sidebar>
    );
};
