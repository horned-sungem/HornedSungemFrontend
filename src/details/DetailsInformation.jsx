import { Box } from 'grommet';
import React from 'react';

export const DetailsInformation = ({ module }) => (
    <>{
        module !== null ? <Box direction='column' border='between'>
        <Box direction='row'>
            {module.cycle}, {module.cp}, {module.id}
        </Box>
        <Box direction='row' border='between'>
            <Box direction='column' justify='center'>
                Test
            </Box>
        </Box>
    </Box> : <></>
    }</>
    
)