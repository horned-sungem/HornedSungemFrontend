import { Box } from 'grommet'
import React, { useEffect, useState } from 'react'

export const DetailsRecommender = ({ module_id }) => {

    const [similarModules, setSimilarModules] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/similar/' + module_id + '/')
            .then(r => r.json())
            .then(r => setSimilarModules(r))
    }, [])

    return (
        <Box>
           {"Test \n Test"}
        </Box>
    )
}