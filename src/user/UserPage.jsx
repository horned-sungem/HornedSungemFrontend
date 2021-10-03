import { Box, Heading, InfiniteScroll } from 'grommet'
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
                <Box background='brand' pad='small' style={{flexShrink: "0"}}>
                    <Heading style={{flexShrink: "0"}}>Recommended modules for <i>{cookies.user.username}</i></Heading>
                </Box>
                <Box width='full' overflow='auto' style={{padding: "1em", boxSizing: "border-box"}}>
                    <InfiniteScroll items={[...votes].sort((a, b) => a[0].name.localeCompare(b[0].name))} width='full'>
                        {(m) => (
                            <Box key={m[0].nr} direction='row' height={{min: "2em"}}>
                                <Box width='large'>{m[0].name}</Box>
                                <Box width='medium'>
                                <DetailsRate module_id={m[0].nr} />
                            </Box>
                        </Box>)}
                    </InfiniteScroll>
                </Box>
            </Box> :
            <Box justify='center' width='full' align='center'>
                You need to log in to access this resource.
            </Box>}
        </>
    )

}