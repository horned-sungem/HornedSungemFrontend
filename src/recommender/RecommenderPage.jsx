import { Box, Grid, Heading } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ModuleBox } from '../common/ModuleBox';

export const ReacommenderPage = () => {

    const [cookies] = useCookies(['user']);
    const [recommendedModules, setRecommendedModules] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/recommend/', {
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Token '+cookies.user.token,
                'Content-Type': 'application/json'
            })
        })
        .then(r => r.json())
        .then(setRecommendedModules)
    })

    return (
        <>
        {'user' in cookies ?
            <Box direction='column' basis='full'>
                <Box background='brand' pad='small'>
                    <Heading>Recommended modules for <i>{cookies.user.username}</i></Heading>
                </Box>
                <Box direction='row'>
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
            <div>User not logged in</div>}
        </>
    )
}