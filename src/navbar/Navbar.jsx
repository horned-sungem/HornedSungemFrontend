import React from 'react';
import { Nav, Sidebar } from 'grommet';
import { BladesHorizontal, Chat, Home } from 'grommet-icons';
import { NavbarItem } from './NavbarItem';
import { LoginElement } from './LoginElement';
import { LogoutElement } from './LogoutElement';
import { useCookies } from 'react-cookie';

export const Navbar = () => {

    const [cookies] = useCookies(['user'])

    return (
        <Sidebar className='navbar' background='brand' footer={('user' in cookies) ? <LogoutElement /> : <LoginElement />}>
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
}
