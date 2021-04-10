import { Box } from 'grommet';
import React from 'react';

export const ModulesListEntry = ({ children, module }) => (
    <Box direction='row' gap='none' justify='between'>
        <Box width='medium'>
            {module.name}
        </Box>
        <Box>
            {children}
        </Box>
    </Box>
);