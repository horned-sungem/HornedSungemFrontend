import { Box, Main } from 'grommet';
import React, { useEffect, useMemo, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { PageModules } from '../modules/PageModules';
import { PageIndex } from '../index/PageIndex';
import { UserContext } from './UserContext';

import '../styles/main.sass'

import { Details } from '../details/Details';
import { Navbar } from '../navbar/Navbar';
import { ModuleContext } from './ModulesContext';

export default function App() {
    const [user, setUser] = useState(null);
    const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);
    const [modules, setModules] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/modules/')
            .then((r) => r.json())
            .then((r) => setModules(r))
    }, [])

    return (
        <Main>
            <UserContext.Provider value={contextValue}>
                <ModuleContext.Provider value={modules}>
                    <Box direction='row' basis='full'>
                        <Router>
                        <Navbar />
                            <Switch>
                                <Route component={PageModules} path='/modules/' />
                                <Route component={Details} path='/module/:module_id' />
                                <Route component={PageIndex} path='/' />
                            </Switch>
                        </Router>
                    </Box>
                </ModuleContext.Provider>
            </UserContext.Provider>
        </Main>
       
    );
}
