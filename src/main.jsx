import { Grommet } from 'grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './common/App';
import sungemTheme from './styles/theme.json';

ReactDOM.render(
    <React.StrictMode>
        <Grommet full theme={sungemTheme}>
            <App />
        </Grommet>
    </React.StrictMode>,
    document.getElementById('root')
);
