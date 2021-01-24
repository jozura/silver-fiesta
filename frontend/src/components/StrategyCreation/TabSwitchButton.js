import React from 'react'
import styled from 'styled-components';
import { GiNinjaMask } from 'react-icons/gi'

function BaseTabSwitchButton({onSelect = f => f, children, ...props}) {
    return (
        <button onClick={onSelect} className = {props.className}>
            <GiNinjaMask style={{width: "70px", height: "70px"}}></GiNinjaMask>
        </button>
    )
}

const TabSwitchButton = styled(BaseTabSwitchButton)`
    width: 75px;
    height: 75px;
    margin-right: 10px;
    background-color: ${props => props.selected ? "#0d8f8f" : "white"};
`;

export default TabSwitchButton