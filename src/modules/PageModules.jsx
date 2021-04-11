import React, { useContext, useState } from 'react';
import { Box } from 'grommet';
import { ModuleContext } from '../common/ModulesContext';
import { ModulesDescription } from './ModulesDescription';
import { ModulesList } from './ModulesList';
import { ModulesSelector } from './ModulesSelector';

export const PageModules = () => {
    const [chosenModule, setChosenModule] = useState(null);
    const modules = useContext(ModuleContext);
    const [moduleFilter, setModuleFilter] = useState(() => (() => true));

    return (
        <Box direction='row' border='between' gap='small' margin='small'>
            <Box>
                <ModulesSelector setModuleFilter={setModuleFilter}/>
                <ModulesList
                    modules={modules.filter(moduleFilter)}
                    setChosenModule={setChosenModule}
                />
            </Box>

            <ModulesDescription chosenModule={chosenModule} />
        </Box>
    );
};
