import { Box } from 'grommet';
import React from 'react';
import { DetailsHorizontalElement } from './DetailsHorizontalElement';

export const DetailsExtendedHeader = ({ module }) => (
    <Box direction='row' border='between' gap='small'  height={{min: 'auto'}} justify='center'>
        <DetailsHorizontalElement top='Arbeitsaufwand' value={module.workload} bottom='Stunden' />
        <DetailsHorizontalElement top='Selbststudium' value={module.self_study} bottom='Stunden' />
        <DetailsHorizontalElement top='Moduldauer' value={module.duration} bottom='Semester' />
        <DetailsHorizontalElement top='Sprache' value={module.language} />
    </Box>
)