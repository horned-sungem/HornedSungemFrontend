import { Box } from 'grommet';
import React from 'react';
import { useHistory } from 'react-router';
import { ModuleTags } from './ModuleTags';

export const ModuleBox = ({ module }) => {

    const history = useHistory();

    return (<Box 
        direction='column' 
        background='light-3' 
        round 
        align='center' 
        gap='xsmall' 
        height={{min: '5em'}} 
        width='medium'
        justify='center' 
        pad='small'
        onClick={() => history.push('/module/' + module.id)}
        elevation='small'
        style={{minHeight: 'auto'}}
        >
        <Box><div style={{textAlign: 'center'}}>{module.name}</div></Box>
        <ModuleTags module={module}/>
    </Box>)
}
    