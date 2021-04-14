import React, { useContext  } from 'react';
import { Box, InfiniteScroll } from 'grommet';
import { useHistory } from 'react-router';
import { ModulesListEntry } from './ModulesListEntry';
import { ModuleTags } from '../common/ModuleTags';
import { VotesContext } from '../common/VotesContext';
import './styles/Modules.sass'

export const ModulesList = (props) => {

    let history = useHistory();

    const { votes } = useContext(VotesContext);

    const vote_ids = votes.map(vote => vote[0].nr)

    return (
        <Box width='full' overflow='auto'>
            <InfiniteScroll items={Object.values(props.modules)} step={10}>
                {(module, idx) => (
                    <Box
                        key={idx}
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
                )}
            </InfiniteScroll>
        </Box>
    );
};
