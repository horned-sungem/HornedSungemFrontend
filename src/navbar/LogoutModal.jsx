import { Box, Button, Heading } from 'grommet';
import React from 'react';
import { useCookies } from 'react-cookie';

export const LogoutModal = ({ setLayerOpen }) => {

    const [,, removeCookies] = useCookies(['user'])

    return (
        <Box width='medium' gap='small' className='login-modal' >
            <Box background='brand' pad={{horizontal: 'medium', top: 'medium'}}>
                <Heading background='brand'>Logout?</Heading>
            </Box>
            <Box pad='medium'>
                
                <Box direction='row' gap='medium' justify='center'>
                    <Button type='submit' primary label='Confirm' onClick={() => {removeCookies('user'); setLayerOpen(false)}}/>
                    <Button type='button' label='Cancel' onClick={() => setLayerOpen(false)} />
                </Box>
                
            </Box>
        </Box>
    )
}