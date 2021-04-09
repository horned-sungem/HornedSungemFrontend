import { Box, Main } from 'grommet';
import React, { useMemo, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Modules } from '../modules/Modules';
import { PageIndex } from '../index/PageIndex';
import { UserContext } from './UserContext';

import '../styles/main.sass'

import { Details } from '../details/Details';
import { Navbar } from '../navbar/Navbar';

export default function App() {
    const [user, setUser] = useState(null);
    const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <Main>
            <UserContext.Provider value={contextValue}>
                <Box direction='row' basis='full'>
                    <Router>
                    <Navbar />
                        <Switch>
                            <Route component={Modules} path='/modules/' />
                            <Route component={Details} path='/module/:module_id' />
                            <Route component={PageIndex} path='/' />
                        </Switch>
                    </Router>
                </Box>
            </UserContext.Provider>
        </Main>
       
    );
}
