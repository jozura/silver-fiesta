import React, {useState} from 'react'
import CreationStartForm from '../components/StrategyCreation/CreationStartForm'
import TabSwitch from '../components/StrategyCreation/TabSwitch'
import TacticCreation from '../components/StrategyCreation/TacticCreation'
function StrategyCreation() {
    const [tabs, setTabs] = useState([1])

    const deleteTab = (tabindex) => {
       return () => {
           setTabs(tabs.filter(tab => tab !== tabindex))
       } 
    }
    const tabElements = tabs.map((tabindex) => <TacticCreation index = {tabindex} key = {tabindex} 
        deleteSelf = {() => {setTabs(tabs.filter(tab => tab !== tabindex))}}/>)

    console.log(tabElements)
    return (
            <div>
                <CreationStartForm/>
                <button onClick = {() => setTabs([...tabs, tabs.length + 1])}>Add tab</button> 
                <TabSwitch>
                    {tabElements}
                </TabSwitch>
                <button>Send</button>
            </div>
    )
}

export default StrategyCreation

