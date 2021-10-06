import { Box, Grid, Heading } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ModuleBox } from '../common/ModuleBox';
import { getRecommendsRequest } from '../common/requests';

export const ReacommenderPage = () => {

    const [cookies] = useCookies(['user']);
    const [recommendedModules, setRecommendedModules] = useState([]);

    useEffect(() => {
        if (!('user' in cookies)) return;
        getRecommendsRequest()
            .then(r => r.json())
            .then(setRecommendedModules)
    }, [cookies])

    return (
        <>
        {'user' in cookies ?
            <Box direction='column' basis='full'>
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
            </Box> :
            <Box justify='center' width='full' align='center'>
                You need to log in to access this resource.
            </Box>}
        </>
    )
}