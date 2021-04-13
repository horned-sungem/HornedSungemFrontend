import { Box, Text } from 'grommet';
import React from 'react';

export const ModulesListEntry = ({ children, module }) => (
    <Box
        pad='small'
        round='medium'
        background='#F2F2F2'
        direction='row'
        gap='none'
        justify='between'>
        <Box width='medium' justify='center'>
            <Text color='brand' weight='bold'>
                {module.name}
            </Text>
        </Box>
        <Box>{children}</Box>
    </Box>
);
