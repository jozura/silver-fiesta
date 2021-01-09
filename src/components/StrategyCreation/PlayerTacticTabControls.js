import React, {useState, useEffect, useCallback} from 'react'
import PlayerTabButton from './PlayerTabButton'
import {useStrategyDataStore} from './StrategyDataStore'
const MAX_NUMBER_OF_TABS = 5
const MIN_NUMBER_OF_TABS = 1

export default function PlayerTacticTabControls() {
    const [tabs, setTabs] = useState([0])
    const [activeTab, setActiveTab] = useState(0)
    const {initTactic, removeTactic, setTacticIndex} = useStrategyDataStore()


    const switchTab = useCallback((tab) => {
        console.log('switch')
        setActiveTab(tab)
        setTacticIndex(tab)
    }, [setTacticIndex])

    useEffect(() => {
        switchTab(tabs[tabs.length - 1])
    }, [tabs, switchTab])

    const tabButtons = tabs.map((tab, i) =>
        <PlayerTabButton   
            key={tab} 
            onSelect = { () => { switchTab(tab) } }
            selected={ tab === activeTab }>
            {tab}
        </PlayerTabButton>)

    const addTab = () => {
        if (tabs.length >= MAX_NUMBER_OF_TABS) return
        // Find a free index for the new tab
        let newTab
        for (let i = 0; i < MAX_NUMBER_OF_TABS; ++i) {
            if (!(tabs.includes(i))) {
                newTab = i
                break
            }
        }
        initTactic(newTab)
        setTabs([...tabs, newTab])
    }

    const removeTab = () => {
        if (tabs.length <= MIN_NUMBER_OF_TABS) return
        let removedTab = tabs.filter(tab => tab === activeTab)
        removeTactic(removedTab)
        setTabs(tabs.filter(tab => tab !== activeTab))
    }

    return (
        <div>
            <button onClick = {addTab} disabled={tabs.length === MAX_NUMBER_OF_TABS}>Add Player</button>
            <button onClick = {removeTab} disabled={tabs.length === MIN_NUMBER_OF_TABS}>Remove Selected Player</button>
            {tabButtons}
        </div>
    )
}