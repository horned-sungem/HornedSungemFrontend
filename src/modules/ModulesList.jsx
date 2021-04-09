import { Box, List } from 'grommet';
import React from 'react';
import { useHistory } from 'react-router';
import { ModulesListEntry } from './ModulesListEntry';
import { ModulesTag } from './ModulesTag';

export const ModulesList = (props) => {

    let history = useHistory();

    return ( 
        <Box width='large'>
            <List
                primaryKey='name'
                secondaryKey='cp'
                data={props.modules}
                paginate
                step={12}>
                    {module => 
                        <ModulesListEntry module={module} onMouseOver={() => props.setChosenModule(module)} onClick={() => history.push('/module/' + module.id)}>
                            <ModulesTag color='#00FF00'>{module.cp} CP</ModulesTag> 
                        </ModulesListEntry>}    
            </List>
        </Box>
    );
};