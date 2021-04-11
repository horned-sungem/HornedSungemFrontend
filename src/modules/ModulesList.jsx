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

    const vote_ids = votes.map(vote => vote[0].id)

    return (
        <Box width='large' overflow='auto'>
            <InfiniteScroll items={Object.values(props.modules)} step={10}>
                {(module, idx) => (
                    <Box
                        key={idx}
                        flex={false}
                        onMouseOver={() => props.setChosenModule(module)}
                        height='xsmall'
                        className={'list__item' + (vote_ids.includes(module.id) ? ' list__item--voted' : '')}
                        justify='center'
                        border='bottom'
                        onClick={() =>
                            history.push(
                                '/module/' + module.id.replace('/', '_')
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
