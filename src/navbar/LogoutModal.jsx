import { Box, Button, Heading } from 'grommet';
import React, { useContext } from 'react';
import { UserContext } from '../common/UserContext';

export const LogoutModal = ({ setLayerOpen }) => {

    const { setUser } = useContext(UserContext);

    return (
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
    )
}