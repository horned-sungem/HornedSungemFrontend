import { Box } from 'grommet';
import React from 'react';

export const ModulesListEntry = ({ children, module }) => (
    <Box direction='row' gap='large' justify='between'>
        <Box>
            {module.name}
        </Box>
        <Box>
            {children}
        </Box>
    </Box>
);