import { Box, Text } from 'grommet';
import React from 'react';

export const Tag = ({ children, suffix, prefix }) => (
    <Box round align='center' direction='column' pad='xsmall' alignSelf='start'>
        {prefix && (
            <Text color='brand' size='small'>
                {prefix}
            </Text>
        )}
        <Text textAlign='center' weight='bold' color='brand' size='large'>
            {children}
        </Text>
        {suffix && (
            <Text color='brand' size='small'>
                {suffix}
            </Text>
        )}
    </Box>
);

export const CPTag = ({ children }) => {
    return <Tag suffix='CP'>{children}</Tag>;
};

export const SemesterTag = ({ children }) => {
    return <Tag suffix='Semester'>{children}</Tag>;
};
