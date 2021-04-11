import { Box } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Config from '../common/Config';
import { ModuleBox } from '../common/ModuleBox';
import { ModuleContext } from '../common/ModulesContext';
import { DetailsRate } from './DetailsRate';

export const DetailsRecommender = ({ module_id }) => {
    const [similarModules, setSimilarModules] = useState([]);
    const modules = useContext(ModuleContext);
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        setSimilarModules([]);
        fetch(Config.url + 'api/similar/' + module_id + '/')
            .then((r) => r.json())
            .then((r) => setSimilarModules(r));
    }, [module_id]);

    return (
        <>
            {modules.length > 0 && (
                <Box direction='column' border='between' gap='small'>
                    {cookies.user != null && (
                        <DetailsRate module_id={module_id} />
                    )}
                    <Box gap='small' style={{ marginTop: '0.5rem' }}>
                        {similarModules
                            .filter(
                                (module) =>
                                    modules[module].id.replace('/', '_') !==
                                    module_id
                            )
                            .map((module, idx) => (
                                <ModuleBox key={idx} module={modules[module]} />
                            ))}
                    </Box>
                </Box>
            )}{' '}
        </>
    );
};
