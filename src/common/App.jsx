import React, { useMemo } from 'react'
import {
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import { UserContext } from './UserContext';

export default function App() {

    const [user, setUser] = useState(null);
    const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <div className="App">
            <h1>Test</h1>
            <UserContext.Provider value={contextValue}>
                <Router>
                    <Switch>
                        {/*<Route component={App} path='/' exact/> */}
                    </Switch>
                </Router>  
            </UserContext.Provider>
        </div>
    )
}
