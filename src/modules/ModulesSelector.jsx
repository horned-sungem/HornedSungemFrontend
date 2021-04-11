import { Box, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';

export const ModulesSelector = ({ setModuleFilter }) => {

    const [minCp, setMinCp] = useState(null);
    const [maxCp, setMaxCp] = useState(null);

    const [searchString, setSearchString] = useState('');

    useEffect(() => {

        const filters = [
            module => (!minCp) || module.cp >= parseInt(minCp),
            module => (!maxCp) || module.cp <= parseInt(maxCp),
            module => module.name.includes(searchString)
        ]

        const moduleFilter = (module) => !(filters.map((filt) => filt(module)).includes(false))

        setModuleFilter(() => moduleFilter)

    }, [minCp, maxCp, searchString])

    return (
        <Box height={{min: 'auto'}}>
            <Box direction='row' align='center' gap='small'>
                CP from <TextInput onChange={event => setMinCp(event.target.value)} /> to <TextInput onChange={event => setMaxCp(event.target.value)} />
            </Box>
            Name <TextInput onChange={event => setSearchString(event.target.value)}/>
        </Box>
    )
}