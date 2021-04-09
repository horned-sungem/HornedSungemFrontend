import { Box, List } from 'grommet';
import React from 'react';
import { useHistory } from 'react-router';

export const ModulesList = (props) => {

    let history = useHistory();

    return ( 
        <Box width='large'>
            <List
                primaryKey='name'
                secondaryKey='cp'
                data={props.modules}
                paginate
                step={15}>
                    {module => <div onMouseOver={() => props.setChosenModule(module)} onClick={() => history.push('/module/' + module.id)}>{module.name} with {module.cp} CP</div>}    
            </List>
        </Box>
    );
};