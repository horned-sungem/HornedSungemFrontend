import { Box, Main } from 'grommet';
import React, { useEffect, useMemo, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { PageModules } from '../modules/PageModules';
import { PageIndex } from '../index/PageIndex';

import '../styles/main.sass'

import { Details } from '../details/Details';
import { Navbar } from '../navbar/Navbar';
import { ModuleContext } from './ModulesContext';
import { ReacommenderPage } from '../recommender/RecommenderPage';
import Config from './Config';
import { UserPage } from '../user/UserPage';
import { VotesContext } from './VotesContext';
import { useCookies } from 'react-cookie';

export default function App() {
    const [modules, setModules] = useState([])
    const [cookies] = useCookies(['user'])

    const [votes, setVotes] = useState([])
    const voteValue = useMemo(() => ({ votes, setVotes }), [votes, setVotes])

    useEffect(() => {
        fetch(Config.url + 'api/modules/')
            .then((r) => r.json())
            .then((r) => setModules(r))
    }, [])

    useEffect(() => {
        if (!('user' in cookies)) {
            setVotes([])
            return;
        }
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
        <Main>
            <ModuleContext.Provider value={modules}>
                <VotesContext.Provider value={voteValue}>
                    <Box direction='row' basis='full'>
                        <Router>
                        <Navbar />
                            <Switch>
                                <Route component={PageModules} path='/modules/' />
                                <Route component={Details} path='/module/:module_id' />
                                <Route component={ReacommenderPage} path='/recommender/' />
                                <Route component={UserPage} path='/user/' />
                                <Route component={PageIndex} path='/' />
                            </Switch>
                        </Router>
                    </Box>
                </VotesContext.Provider>
            </ModuleContext.Provider>
        </Main>
       
    );
}
