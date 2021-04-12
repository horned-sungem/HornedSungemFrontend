import { Box, Heading } from 'grommet';
import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const LoginModal = ({ setLayerOpen }) => {

    const [error, setError] = useState(false);
    
    // TODO: Change the jiggle on the first box to another type of animation since Box animations are forced to be controlled (I mean it works but I don't like that warning :( )

    return (
        
            
        <Box direction='column' gap='small'>
                <Box width='medium' gap='small' animation={error ? {type: 'jiggle', duration: 200} : {type: 'pulse', duration: -1}} className='login-modal' >
                    <Box background='brand' pad={{horizontal: 'medium', top: 'medium'}}>
                        <Heading background='brand'>Login</Heading>
                    </Box>
                    <Box pad='medium'>
                        {
                            <LoginForm setError={setError} setLayerOpen={setLayerOpen}/>
                        }
                    </Box>
                </Box> 
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
        </Box>
            
    )

}