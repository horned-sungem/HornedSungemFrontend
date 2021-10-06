import { Box, Main } from 'grommet';
import React, { useEffect, useMemo, useState } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { PageModules } from '../modules/PageModules';
import { PageIndex } from '../index/PageIndex';

import '../styles/main.sass'

import { Details } from '../details/Details';
import { Navbar } from '../navbar/Navbar';
import { ModuleContext } from './ModulesContext';
import { RecommenderPage } from '../recommender/RecommenderPage';
import Config from './Config';
import { UserPage } from '../user/UserPage';
import { VotesContext } from './VotesContext';
import { useCookies } from 'react-cookie';
import { getModulesRequest, getVotesRequest } from './requests';

export default function App() {
    const [modules, setModules] = useState(null)
    const [cookies] = useCookies(['user'])

    const [votes, setVotes] = useState([])
    const voteValue = useMemo(() => ({ votes, setVotes }), [votes, setVotes])

    useEffect(() => {
        getModulesRequest().then(r => r.json()).then(setModules)
    }, [])

    useEffect(() => {
        if (!('user' in cookies)) {
            setVotes([]);
            return;
        }
        getVotesRequest().then(r => r.json()).then(setVotes)
    }, [cookies])

    return (
        <Main overflow="hidden">
            <ModuleContext.Provider value={modules}>
                <VotesContext.Provider value={voteValue}>
                    <Box direction='row' basis='full'>
                        <Router basename={import.meta.env.BASE_URL}>
                        <Navbar />
                            <Switch>
                                <Route component={PageModules} path='/modules/' />
                                <Route component={Details} path='/module/:module_id' />
                                <Route component={RecommenderPage} path='/recommender/' />
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
