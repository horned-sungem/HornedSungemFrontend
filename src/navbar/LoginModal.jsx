import { Box, Heading } from 'grommet';
import React, { useState } from 'react';
import { LoginForm } from './LoginForm';

export const LoginModal = ({ setLayerOpen }) => {

    const [error, setError] = useState(false)
    
    return (
        <Box width='medium' gap='small' animation={{type: error ? 'jiggle' : 'none', duration: 200}} className='login-modal' >
            <Box background='brand' pad={{horizontal: 'medium', top: 'medium'}}>
                <Heading background='brand'>Login</Heading>
            </Box>
            <Box pad='medium'>
                
                <LoginForm setError={setError} setLayerOpen={setLayerOpen}/>
                
            </Box>
        </Box>
    )

}