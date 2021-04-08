import { Box, List } from 'grommet';
import React from 'react';

export const ModulesList = (props) => ( 
    <Box width='large'>
        <List
            primaryKey='name'
            secondaryKey='cp'
            data={props.modules}
            paginate
            step={15}>
                {module => <div onMouseOver={() => props.setChosenModule(module)}>{module.name} with {module.cp} CP</div>}    
        </List>
    </Box>
)