import { Grommet } from 'grommet'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './common/App'

ReactDOM.render(
    <React.StrictMode>
        <Grommet>
            <App />
        </Grommet>    
    </React.StrictMode>,
  document.getElementById('root')
)
