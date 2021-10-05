import React, { useContext  } from 'react';
import { Box } from 'grommet';
import { useHistory } from 'react-router';
import { ModulesListEntry } from './ModulesListEntry';
import { ModuleTags } from '../common/ModuleTags';
import { VotesContext } from '../common/VotesContext';
import './styles/Modules.sass'
import { Virtuoso } from 'react-virtuoso';

export const ModulesList = (props) => {

    let history = useHistory();

    const { votes } = useContext(VotesContext);

    const vote_ids = votes.map(vote => vote[0].nr);

    function module (index) {
        var module = Object.values(props.modules)[index];
        return (
            <Box
                flex={false}
                onMouseOver={() => props.setChosenModule(module)}
                height={{min: 'xsmall'}}
                className={'list__item' + (vote_ids.includes(module.nr) ? ' list__item--voted' : '')}
                justify='center'
                border='bottom'
                onClick={() =>
                    history.push(
                        '/module/' + module.nr.replace('/', '_')
                    )
                }>
                <ModulesListEntry module={module}>
                    <ModuleTags module={module} />
                </ModulesListEntry>
            </Box>
        )
    }


    return (
        <Virtuoso 
            height={'full'}
            totalCount={props.modules.length}
            itemContent={module}
        />
    );
};
