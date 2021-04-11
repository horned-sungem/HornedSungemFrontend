import { Box } from 'grommet';
import React from 'react';
import { Tag } from '../common/Tag';

export const DetailsExtendedHeader = ({ module }) => (
    <Box
        direction='row'
        border='between'
        gap='small'
        height={{ min: 'auto' }}
        justify='center'>
        <Tag prefix='Arbeitsaufwand' suffix='Stunden'>
            {module.workload}
        </Tag>
        <Tag prefix='Selbststudium' suffix='Stunden'>
            {module.self_study}
        </Tag>
        <Tag prefix='Moduldauer' suffix='Semester'>
            {module.duration}
        </Tag>
        <Tag prefix='Sprache'>{module.language}</Tag>
    </Box>
);
