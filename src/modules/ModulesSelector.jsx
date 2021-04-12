import { Box, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';

export const ModulesSelector = ({ setModuleFilter }) => {

    const [minCp, setMinCp] = useState(null);
    const [maxCp, setMaxCp] = useState(null);

    const [searchString, setSearchString] = useState('');
    const [nrString, setNrString] = useState('');

    useEffect(() => {

        const filters = [
            module => (!minCp) || module.cp >= parseInt(minCp),
            module => (!maxCp) || module.cp <= parseInt(maxCp),
            module => module.name.toLowerCase().includes(searchString.toLowerCase()),
            module => module.id.toLowerCase().includes(nrString.toLowerCase())
        ]

        const moduleFilter = (module) => !(filters.map((filt) => filt(module)).includes(false))

        setModuleFilter(() => moduleFilter)

    }, [minCp, maxCp, searchString, nrString])

    return (
        <Box height={{min: 'auto'}}>
            <Box direction='row' align='center' gap='small'>
                CP from <TextInput onChange={event => setMinCp(event.target.value)} /> to <TextInput onChange={event => setMaxCp(event.target.value)} />
            </Box>
            <Box direction='row' align='center' gap='small'>
                Name <TextInput onChange={event => setSearchString(event.target.value)}/>
                Nr. <TextInput onChange={event => setNrString(event.target.value)}/>
            </Box>
            
        </Box>
    )
}