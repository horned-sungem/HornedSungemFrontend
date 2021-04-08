import { Box } from 'grommet';
import React, { useEffect, useState } from 'react';
import { ModulesDescription } from './ModulesDescription';
import { ModulesList } from './ModulesList';
import { ModulesSelector } from './ModulesSelector';

export const Modules = () => {
    const [modules, setModules] = useState([]);
    const [chosenModule, setChosenModule] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/modules/')
            .then((r) => r.json())
            .then((r) => setModules(r))
    }, [])

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