import { Box } from 'grommet';
import React from 'react';

export const ModulesTag = ({children, color}) => (
    <Box background={color} round pad='xsmall' alignSelf='start'>
        {children}
    </Box>
)