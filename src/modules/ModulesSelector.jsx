import React, { useEffect, useState } from 'react';
import { Box, Button, TextInput, Text } from 'grommet';

import './styles/ModulesSelector.sass'

export const ModulesSelector = ({ setModuleFilter }) => {
    const [minCp, setMinCp] = useState(null);
    const [maxCp, setMaxCp] = useState(null);

    const [searchString, setSearchString] = useState('');
    const [nrString, setNrString] = useState('');
    const [turnus, setTurnus] = useState({ws: false, ss: false})

    useEffect(() => {

        const filters = [
            module => (!minCp) || module.cp >= parseInt(minCp),
            module => (!maxCp) || module.cp <= parseInt(maxCp),
            module => module.name.toLowerCase().includes(searchString.toLowerCase()),
            module => module.id.toLowerCase().includes(nrString.toLowerCase()),
            module => (!turnus.ws) || module.cycle.toLowerCase().includes('wintersemester'),
            module => (!turnus.ss) || module.cycle.toLowerCase().includes('sommersemester')
        ]

        const moduleFilter = (module) => !(filters.map((filt) => filt(module)).includes(false))

        setModuleFilter(() => moduleFilter)

    }, [minCp, maxCp, searchString, nrString, turnus])

    return (
        <Box height={{min: 'auto'}} gap='small'>
            <Box className='module-selector__box-top' direction='row' align='center' justify='between' gap='small'>
                <Box width={{min: 'small'}} direction='row' align='center' gap='small'>
                    Name <TextInput placeholder='z.B. Digitaltechnik' onChange={event => setSearchString(event.target.value)} />
                </Box>
                <Box direction='row' align='center' gap='small'>
                    Turnus:
                    <Box className='turnus-button-group' direction='row' align='center' justify='center'>
                        <Button className={`button-ws ${(turnus.ws ? 'button--active' : '')}`} onClick={() => setTurnus((prevState) => {return {ws: !prevState.ws, ss: prevState.ss}})}>
                            <Text>WS</Text>
                        </Button>
                        <Button className={`button-ss ${(turnus.ss ? 'button--active' : '')}`} onClick={() => setTurnus((prevState) => {return {ws: prevState.ws, ss: !prevState.ss}})}>
                            <Text>SS</Text>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box direction='row' align='center' justify='between' gap='large'>
                <Box width={{max: 'small'}} direction='row' align='center' gap='small'>
                    CP from <TextInput placeholder='0' size='small' onChange={event => setMinCp(event.target.value)} />
                    to <TextInput placeholder='30' size='small' onChange={event => setMaxCp(event.target.value)} />
                </Box>
                <Box width='medium' direction='row' align='center' gap='small'>
                    Nr. <TextInput placeholder='z.B. 20-00-0004' onChange={event => setNrString(event.target.value)} />
                </Box>
            </Box>
            <div className='horizontal-line' />
        </Box>
    )
}