import React, {useState, useEffect} from 'react'
import TabSwitchButton from './TabSwitchButton'

export default function TabSwitch({children}) {
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        setActiveTab(children.length - 1)
    }, [children.length])

    const tabButtons = []
    for(let tabindex = 0; tabindex < children.length; ++tabindex){
        tabButtons.push (
            <TabSwitchButton
                key = { tabindex }
                onSelect = { () => setActiveTab(tabindex) }
                selected = { tabindex === activeTab }>
                { tabindex + 1 }
            </TabSwitchButton>
        )
    }

    return (
        <div style={{marginTop: "10px"}}>
            { tabButtons }
            { children[activeTab] }
        </div>
    )
}