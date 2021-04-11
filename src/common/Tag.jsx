import { Box, Text } from 'grommet';
import React from 'react';

export const Tag = ({ children, label }) => (
    <Box round align='center' direction='column' pad='xsmall' alignSelf='start'>
        <Text weight='bold' color='brand' size='large'>
            {children}
        </Text>
        <Text color='brand' size='small'>
            {label}
        </Text>
    </Box>
);

export const CPTag = ({ children }) => {
    return <Tag label='CP'>{children}</Tag>;
};

export const SemesterTag = ({ children }) => {
    return <Tag label='Semester'>{children}</Tag>;
};
