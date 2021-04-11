import { Box } from 'grommet';
import React from 'react';
import { CPTag, SemesterTag } from '../common/Tag';

export const DetailsTagHeader = ({ module }) => (
    <Box direction='row' justify='center' gap='small' height={{min: 'auto'}} wrap={true}>
        <SemesterTag>{module.cycle}</SemesterTag>
        <CPTag>{module.cp}</CPTag>
    </Box>
)