import React, {useState} from 'react'
import CreationStartForm from '../components/StrategyCreation/CreationStartForm'
import TabSwitch from '../components/StrategyCreation/TabSwitch'
import TacticCreation from '../components/StrategyCreation/TacticCreation'

const MAX_NUMBER_OF_TABS = 5

function StrategyCreation() {
    const [tabs, setTabs] = useState([0])

    const tabElements = tabs.map((tabindex) => 
        <TacticCreation 
            index = {tabindex} 
            key = {tabindex} 
            deleteSelf = { () => { setTabs(tabs.filter(tab => tab !== tabindex)) } }
        />)

    const addTab = () => {
        // Find a free index between (0, MAX_NUMBER_OF_TABS)
        for (const i of [...Array(MAX_NUMBER_OF_TABS).keys()]) {
            if (!tabs.includes(i)){
                setTabs([...tabs, i])
                break
            }
        }
    }

    return (
            <div style={{
                height: "50rem"
            }}>
                <CreationStartForm/>

                <TabSwitch>
                    {tabElements}
                </TabSwitch>
                <button
                    onClick = {addTab}
                    disabled={tabs.length === MAX_NUMBER_OF_TABS}>
                    Add tab
                </button> 
                <button>Send</button>
            </div>
    )
}

export default StrategyCreation

