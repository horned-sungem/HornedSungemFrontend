import React, { useContext } from 'react';
import { Nav, Sidebar } from 'grommet';
import { BladesHorizontal, Chat, Home } from 'grommet-icons';
import { NavbarItem } from './NavbarItem';
import { LoginElement } from './LoginElement';
import { LogoutElement } from './LogoutElement';
import { UserContext } from '../common/UserContext';

export const Navbar = () => {

    const { user } = useContext(UserContext);

    return (
        <Sidebar className='navbar' background='brand' footer={('token' in user) ? <LogoutElement /> : <LoginElement />}>
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
