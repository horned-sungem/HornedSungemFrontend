import { Box, Heading } from 'grommet'
import React, { useContext } from 'react'
import { useCookies } from 'react-cookie'
import { VotesContext } from '../common/VotesContext'
import { DetailsRate } from '../details/DetailsRate'

export const UserPage = () => {

    //const [votes, setVotes] = useState([])
    const [cookies] = useCookies(['user'])
    const { votes } = useContext(VotesContext)
    
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
                                <DetailsRate module_id={m[0].id} />
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