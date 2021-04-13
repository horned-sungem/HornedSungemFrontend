import React from 'react';
import { Box, Header } from 'grommet';
import { DetailsInformation } from '../details/DetailsInformation';

export const ModulesDescription = (props) => {
    return (
        <Box flex overflow='auto'>
            <Header background='brand' pad='small'>
                <h3 style={{ margin: '1rem 0' }}>
                    {props.chosenModule.name} - {props.chosenModule.id}
                </h3>
            </Header>
            <DetailsInformation module={props.chosenModule} />
        </Box>
    );
};
