import React, { useMemo, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PageIndex from '../pages/PageIndex';
import { UserContext } from './UserContext';

export default function App() {
    const [user, setUser] = useState(null);
    const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <div className='App'>
            <h1>Test</h1>
            <UserContext.Provider value={contextValue}>
                <Router>
                    <Switch>
                        <Route component={PageIndex} path='/' />
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}
