import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
        <h1>Test</h1>
        <Router>
            <Switch>
                {/*<Route component={App} path='/' exact/> */}
            </Switch>
        </Router>  
    </div>
  )
}
