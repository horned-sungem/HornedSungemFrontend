import React, { useEffect, useState } from 'react';
import { Box, Spinner } from 'grommet';

export const LoadingScreen = () => {

    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false);
        }, 5000);
    }, []);

    return (
        showLoading 
        ? <Box fill='vertical' justify='center' alignSelf='center' alignContent='center' align='center'> 
            <Spinner/>
            <div style={{color: 'grey', textAlign: 'center'}}>
                Loading modules...<br/>
                This may take a few seconds.
                </div>
          </Box> 
        : <Box fill='vertical' justify='center' alignSelf='center' style={{color: 'grey', textAlign: 'center'}}> 
            There was an error loading the modules. <br/>
            Please try again later.
          </Box> 
    );
}