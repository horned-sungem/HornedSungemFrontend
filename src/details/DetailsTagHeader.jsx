import { Box } from 'grommet';
import React from 'react';
import { Tag } from '../common/Tag';

export const DetailsTagHeader = ({ module }) => (
    <Box direction='row' justify='center' gap='small'  height={{min: 'auto'}}>
        <Tag color='brand'>{module.cycle}</Tag>
        <Tag color='neutral-1'>{module.cp} CP</Tag>
        <Tag color='neutral-2'>{module.id}</Tag>
    </Box>
)