import React from 'react'
import styled from 'styled-components';

function BasePlayerTabButton({onSelect = f => f, children, ...props}) {
    return (
        <button onClick={onSelect} className = {props.className}>
           {children}
        </button>
    )
}

const PlayerTabButton = styled(BasePlayerTabButton)`
    background-color: ${props => props.selected ? "white" : "green"};
`;

export default PlayerTabButton