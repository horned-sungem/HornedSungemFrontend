import { Box, Button, Layer } from 'grommet';
import { Logout } from '@mui/icons-material';
import React, { useState } from 'react';
import { LogoutModal } from './LogoutModal';

export const LogoutElement = () => {

    const [layerOpen, setLayerOpen] = useState(false);

    return (
        <Box>
            <Button 
                className='navbar__item' 
                activeClassName='navbar__item--active' 
                onClick={() => {setLayerOpen(true)}}>
                <Logout sx={{ fontSize: 30 }} />

            </Button>

            <Box background='light-1'>
                {layerOpen && <Layer
                    onEsc={() => setLayerOpen(false)}
                    onClickOutside={() => setLayerOpen(false)}
                    position='center'
                    modal
                    className='login-modal-parent'
                >

                   <LogoutModal setLayerOpen={setLayerOpen} /> 
                </Layer> }
            </Box>
        </Box>
    );

}