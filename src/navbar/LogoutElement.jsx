import { Box, Button, Heading, Layer } from 'grommet';
import { Logout } from 'grommet-icons';
import React, { useContext, useState } from 'react';
import { UserContext } from '../common/UserContext';

export const LogoutElement = () => {

    const [layerOpen, setLayerOpen] = useState(false);
    const { setUser } = useContext(UserContext);

    return (
        <Box>
            <Button 
                className='navbar__item' 
                activeClassName='navbar__item--active' 
                onClick={() => {setLayerOpen(true)}}>
                <Logout />

            </Button>

            <Box background='light-1'>
                {layerOpen && <Layer
                    onEsc={() => setLayerOpen(false)}
                    onClickOutside={() => setLayerOpen(false)}
                    position='center'
                    modal
                    className='login-modal-parent'
                >

                    <Box width='medium' gap='small' className='login-modal' >
                        <Box background='brand' pad={{horizontal: 'medium', top: 'medium'}}>
                            <Heading background='brand'>Logout?</Heading>
                        </Box>
                        <Box pad='medium'>
                            
                            <Box direction='row' gap='medium' justify='center'>
                                <Button type='submit' primary label='Confirm' onClick={() => {setUser({}); setLayerOpen(false)}}/>
                                <Button type='button' label='Cancel' onClick={() => setLayerOpen(false)} />
                            </Box>
                            
                        </Box>
                    </Box>
                </Layer> }
            </Box>
        </Box>
    );

}