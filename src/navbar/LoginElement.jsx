import { Box, Button, Layer } from 'grommet';
import { Login } from 'grommet-icons';
import React, { useState } from 'react';
import { LoginModal } from './LoginModal';

export const LoginElement = () => {

    const [layerOpen, setLayerOpen] = useState(false);

    // @Lene alda räum diese scheiß Datei auf uff

    return (
        <Box>
            <Button 
                className='navbar__item' 
                activeClassName='navbar__item--active' 
                onClick={() => {setLayerOpen(true)}}>
                <Login />

            </Button>

            <Box background='light-1'>
                {layerOpen && <Layer
                    onEsc={() => setLayerOpen(false)}
                    onClickOutside={() => setLayerOpen(false)}
                    position='center'
                    modal
                    className='login-modal-parent'
                >

                    <LoginModal setLayerOpen={setLayerOpen}/>
                </Layer> }
            </Box>
        </Box>
    );

}