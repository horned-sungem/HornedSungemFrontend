import { Box, Header } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DetailsInformation } from './DetailsInformation';
import { DetailsRecommender } from './DetailsRecommender';

export const Details = () => {
    let { module_id } = useParams();

    const [loadedModule, setLoadedModule] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/module/' + module_id + '/')
            .then((r) => r.json())
            .then((r) => setLoadedModule(r))
    }, [])

    return (
        <Box direction='column' basis='full'>
            <Header background='brand'>
                {loadedModule!==null ? <h3>{ loadedModule.name } - {loadedModule.id}</h3> : <h3>Loading</h3>}
            </Header>
            <Box direction='row' border='between' gap='small' basis='full'>
                <DetailsInformation module={loadedModule} />
                <DetailsRecommender module_id={module_id} />
            </Box>
        </Box>
    )
}