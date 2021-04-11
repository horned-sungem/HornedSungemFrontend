import { Box, Heading } from 'grommet'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Config from '../common/Config'
import { DetailsRate } from '../details/DetailsRate'

export const UserPage = () => {

    const [votes, setVotes] = useState([])
    const [cookies] = useCookies(['user'])

    useEffect(() => {
        if (!('user' in cookies)) return;
        fetch(Config.url + 'api/votes/', {
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Token '+cookies.user.token,
                'Content-Type': 'application/json'
            })
        })
        .then(r => r.json())
        .then(setVotes)
    }, [cookies])
    
    return (
        <>
        {'user' in cookies ?
            <Box direction='column' basis='full'>
                <Box background='brand' pad='small'>
                    <Heading>Recommended modules for <i>{cookies.user.username}</i></Heading>
                </Box>
                    <Box width='full' gap='small' direction='column'>
                            {votes.map((m, idx) => 
                            <Box key={idx} direction='row'>
                                <Box width='large'>{m[0].name}</Box>
                                <Box width='medium'>
                                <DetailsRate module_id={m[0].id} initial_rating={m[1]} />
                                </Box>
                            </Box>)}
                    </Box>
            </Box> :
            <Box justify='center' width='full' align='center'>
                You need to log in to access this resource.
            </Box>}
        </>
    )

}