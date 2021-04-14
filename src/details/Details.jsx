import { Box, Header } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Config from '../common/Config';
import { DetailsInformation } from './DetailsInformation';
import { DetailsRecommender } from './DetailsRecommender';

export const Details = () => {
    let { module_id } = useParams();

    const [loadedModule, setLoadedModule] = useState(null);

    useEffect(() => {
        fetch(Config.url + 'api/module/' + module_id + '/')
            .then((r) => r.json())
            .then((r) => setLoadedModule(r));
    }, [module_id]);

    return (
        <Box direction='column' basis='full'>
            <Header background='brand' pad='small'>
                {loadedModule !== null ? (
                    <h3 style={{ margin: '1rem 0' }}>
                        {loadedModule.name} - {loadedModule.nr}
                    </h3>
                ) : (
                    <h3 style={{ margin: '1rem 0' }}>Loading</h3>
                )}
            </Header>
            <Box direction='row' border='between' gap='small' basis='full'>
                <DetailsInformation module={loadedModule} />
                <DetailsRecommender module_id={module_id} />
            </Box>
        </Box>
    );
};
