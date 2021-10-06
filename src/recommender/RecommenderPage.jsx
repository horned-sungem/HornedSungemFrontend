import { Box, Grid, Heading } from 'grommet';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Config from '../common/Config';
import { LoadingScreen } from '../common/LoadingScreen';
import { ModuleBox } from '../common/ModuleBox';
import { ModuleContext } from '../common/ModulesContext';

export const RecommenderPage = () => {

    const [cookies] = useCookies(['user']);
    const modules = useContext(ModuleContext);
    const [recommendedModules, setRecommendedModules] = useState([]);

    useEffect(() => {
        if (!('user' in cookies)) return;
        fetch(Config.url + 'api/recommend/', {
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Token '+cookies.user.token,
                'Content-Type': 'application/json'
            })
        })
        .then(r => r.json())
        .then(setRecommendedModules)
    }, [cookies])

    return (
        <>
        {!('user' in cookies) ? <Box justify='center' width='full' align='center'>
                You need to log in to access this resource.
            </Box>
        : (modules === null) ?
            <Box width='full' align='center'>
                <LoadingScreen />
            </Box>
        : <Box direction='column' basis='full'>
                <Box background='brand' pad='small' style={{flexShrink: "0"}}>
                    <Heading style={{flexShrink: "0"}}>Recommended modules for <i>{cookies.user.username}</i></Heading>
                </Box>
                <Box direction='row' overflow='auto' style={{padding: "1em", boxSizing: "border-box"}}>
                    <Box width='large'>
                        <Grid gap='small' columns='small'>
                            {recommendedModules.map((m, idx) => <ModuleBox module={m} key={idx}/>)}
                        </Grid>
                    </Box>
                    <Box>
                        Hier so Details later
                    </Box>
                </Box>
            </Box>}
        </>
    )
}