import React from 'react';
import { Nav, Sidebar } from 'grommet';
import { FormatListBulleted, HomeOutlined, AssistantOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { NavbarItem } from './NavbarItem';
import { LRElement } from './LRElement';
import { LogoutElement } from './LogoutElement';
import { useCookies } from 'react-cookie';

export const Navbar = () => {
    const [cookies] = useCookies(['user']);

    return (
        <Sidebar
            className='navbar'
            background='accent-1'
            footer={'user' in cookies ? <LogoutElement /> : <LRElement />}>
            <Nav gap='small'>
                <NavbarItem to='/'>
                    <HomeOutlined sx={{ fontSize: 30 }} />
                </NavbarItem>
                <NavbarItem to='/modules/'>
                    <FormatListBulleted sx={{ fontSize: 30 }} />
                </NavbarItem>
                {'user' in cookies && (
                    <NavbarItem to='/recommender/'>
                        <AssistantOutlined sx={{ fontSize: 30 }} />
                    </NavbarItem>
                )}
                {'user' in cookies && (
                    <NavbarItem to='/user/'>
                        <AccountCircleOutlined sx={{ fontSize: 30 }} />
                    </NavbarItem>
                )}
            </Nav>
        </Sidebar>
    );
};
