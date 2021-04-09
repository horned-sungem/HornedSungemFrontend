import { Accordion, AccordionPanel, Box } from 'grommet';
import React from 'react';

export const DetailsAccordion = ({ module }) => (
    <Box>
        <Accordion multiple>
            <AccordionPanel label='Lerninhalt'>
                {module.content}
            </AccordionPanel>
            <AccordionPanel label='Qualifikationsziele / Lernergebnisse'>
                {module.results}
            </AccordionPanel>
            <AccordionPanel label='Voraussetzungen für die Teilnahme'>
                {module.requirements}
            </AccordionPanel>
            <AccordionPanel label='Prüfungsform'>
                {module.exam_form}
            </AccordionPanel>
        </Accordion>
    </Box>
)