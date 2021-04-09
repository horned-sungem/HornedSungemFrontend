import { Accordion, AccordionPanel, Box } from 'grommet';
import React from 'react';
import { DetailsAccordion } from './DetailsAccordion';
import { DetailsExtendedHeader } from './DetailsExtendedHeader';
import { DetailsHorizontalElement } from './DetailsHorizontalElement';
import { DetailsTagHeader } from './DetailsTagHeader';

export const DetailsInformation = ({ module }) => (
    <>{
        module !== null ? 
        <Box direction='column' border='between' gap='small' pad='small' basis='1/2' height={{min: 'auto'}}>
            <DetailsTagHeader module={module} />
            <DetailsExtendedHeader module={module} />
            <DetailsAccordion module={module} />
        </Box> 
        : <></>
    }</>
    
)