import { Box } from 'grommet';
import React from 'react';

export const Tag = ({children, color}) => (
    <Box background={color} round pad='xsmall' alignSelf='start' style={{ whiteSpace: 'nowrap'}}>
        {children}
    </Box>
)

export const CPTag = ({ children }) => {
    const chroma = Math.max(0, Math.min(120, parseInt(children) * 12))
    const color = 'hsl(' + chroma + ', 100%, 65%)'
    return (
       <Tag color={color}>{children} CP</Tag>
    )
}

export const SemesterTag = ({ children }) => {
    let color = 'neutral-2'
    if (children.includes('Wintersemester')) {
        color = 'accent-3'
    }
    if (children.includes('Sommersemester')) {
        color = 'neutral-1'
        if (children.includes('Wintersemester')) {
            color = 'neutral-3'
        }
    }
    return (
        <Tag color={color}>{children}</Tag>
    )
}