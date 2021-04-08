import { Box } from 'grommet';
import React from 'react';

export const ModulesDescription = (props) => (

    <Box width='medium'>
        <>
            {props.chosenModule !== null ? <>
            <h2>{props.chosenModule.name}</h2>
            <p>{props.chosenModule.self_study}</p>
            </> : <div/>}
        </>
    </Box>
)
