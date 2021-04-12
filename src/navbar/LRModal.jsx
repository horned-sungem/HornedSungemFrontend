import { Box } from 'grommet';
import React from 'react';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';

export const LRModal = ({ setLayerOpen }) => (
        
    <Box direction='column' gap='small'>
        <LoginModal setLayerOpen={setLayerOpen}/>
        <RegisterModal setLayerOpen={setLayerOpen}/>
    </Box>
        
)
