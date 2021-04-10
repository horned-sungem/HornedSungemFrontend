import { Box } from 'grommet';
import React, { useContext, useState } from 'react';
import { ModuleContext } from '../common/ModulesContext';
import { ModulesDescription } from './ModulesDescription';
import { ModulesList } from './ModulesList';
import { ModulesSelector } from './ModulesSelector';

export const PageModules = () => {
    const [chosenModule, setChosenModule] = useState(null);
    const modules = useContext(ModuleContext)

    return (
        <Box
            direction='row'
            border='between'
            gap='small'
            margin='small'
        >
            <Box direction='column'>
                <ModulesSelector />
                <ModulesList modules={modules} setChosenModule={setChosenModule} />
            </Box>
            
            <ModulesDescription chosenModule={chosenModule}/>

        </Box>
    );
};