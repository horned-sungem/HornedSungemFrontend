import { Box } from 'grommet';
import React from 'react';
import { ModuleTags } from '../common/ModuleTags';
import { DetailsAccordion } from './DetailsAccordion';
import { DetailsExtendedHeader } from './DetailsExtendedHeader';

export const DetailsInformation = ({ module }) => (
    <>{
        module !== null ? 
        <Box direction='column' border='between' gap='small' pad='small' basis='1/2' height={{min: 'auto'}}>
            <ModuleTags module={module} />
            <DetailsExtendedHeader module={module} />
            <DetailsAccordion module={module} />
        </Box> 
        : <></>
    }</>
)