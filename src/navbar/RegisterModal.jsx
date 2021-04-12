import { Box, Heading } from 'grommet';
import React from 'react';
import { RegisterForm } from './RegisterForm';

export const RegisterModal = ({ setLayerOpen }) => (
    <Box width='medium' gap='small' className='login-modal' >
        <Box background='brand' pad={{horizontal: 'medium', top: 'medium'}}>
            <Heading background='brand'>Register</Heading>
        </Box>
        <Box pad='medium'>
            {
                <RegisterForm setLayerOpen={setLayerOpen}/>
            }
        </Box>
    </Box> 
)