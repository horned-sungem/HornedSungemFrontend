import { Grommet } from 'grommet'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './common/App'

ReactDOM.render(
    <React.StrictMode>
        <Grommet full>
            <App />
        </Grommet>    
    </React.StrictMode>,
  document.getElementById('root')
)
