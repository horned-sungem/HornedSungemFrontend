/* eslint-disable no-unused-vars */
import { Box, Grid, List } from 'grommet';
import React, { useEffect, useState } from 'react';

export const Modules = () => {
    const [modules, setModules] = useState([]);
    const [chosenModule, setChosenModule] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/modules/')
            .then((r) => r.json())
            .then((r) => setModules(r))
    }, 
    [])

    return (
        <>
        <Grid
            rows={['auto']}
            columns={['large', 'small']}
            gap='small'
            areas={[
                { name: 'modules', start: [0,0], end: [0,0]},
                { name: 'description', start: [1,0], end: [1,0]}
            ]}
            >
                <Box gridArea='modules'>
                    <List
                    primaryKey='name'
                    secondaryKey='cp'
                    data={modules}>
                        {module => <div onMouseOver={() => setChosenModule(module)}>{module.name} with {module.cp} CP</div>}    
                    </List>
                </Box>
                <Box gridArea='description'>
                    <>
                    {chosenModule !== null ? <>
                    <h2>{chosenModule.name}</h2>
                    <p>{chosenModule.self_study}</p>
                    </> : <div/>}
                    </>
                </Box>



            </Grid>
        </>
    );
};