import { Box, Button, Layer } from 'grommet';
import { Login } from 'grommet-icons';
import React, { useState } from 'react';
import { LRModal } from './LRModal';

export const LRElement = () => {

    const [layerOpen, setLayerOpen] = useState(false);

    return (
        <Box>
            <Button 
                className='navbar__item' 
                activeClassName='navbar__item--active' 
                onClick={() => {setLayerOpen(true)}}>
                <Login />

            </Button>

            <Box background='light-1'> {/* Background is set to light as otherwise Elements inside the modal choose weird color contrasts */}
                {layerOpen && <Layer
                    onEsc={() => setLayerOpen(false)}
                    onClickOutside={() => setLayerOpen(false)}
                    position='center'
                    modal
                    className='login-modal-parent'
                >

                    <LRModal setLayerOpen={setLayerOpen}/>
                </Layer> }
            </Box>
        </Box>
    );

}