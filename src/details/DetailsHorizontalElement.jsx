import { Box } from 'grommet';
import React from 'react';

export const DetailsHorizontalElement = ({ top, value, bottom }) => (
    <Box direction='column' justify='start' alignContent='center'>
        <Box align='center'>{top}</Box>
        <Box align='center'>{value!==null ? value : '-'}</Box>
        <Box align='center'>{bottom}</Box>
    </Box>
)