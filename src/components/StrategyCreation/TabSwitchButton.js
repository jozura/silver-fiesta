import React from 'react'
import styled from 'styled-components';

function BaseTabSwitchButton({onSelect = f => f, children, ...props}) {
    return (
        <button onClick={onSelect} className = {props.className}>
           {children}
        </button>
    )
}

const TabSwitchButton = styled(BaseTabSwitchButton)`
    background-color: ${props => props.selected ? "green" : "white"};
`;

export default TabSwitchButton