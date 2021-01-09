import React, {useState, useRef} from 'react'
import {useStrategyDataStore} from './StrategyDataStore'

export default function BaseInstructionElement({text}) {
    const [mode, setMode] = useState("view")
    const [textInput, setTextInput] = useState(text)
    const {tactic, setTactic} = useStrategyDataStore()
    if (mode === "view") {
        return (
                <div>
                    <p>{text}</p>
                    <button onClick={() => {setMode("edit")}}>Edit</button>
                    <button>Add Element</button>
                    <button>Remove element</button>
                </div>
            )
    }
    
    const Ok = () => {
        setMode("view")
    }
    return (
            <div>
                <input value={textInput} onChange={event => setTextInput(event.target.value)}></input>
                <button onClick={() => {setMode("view")}}>Ok</button>
            </div>
            )
}
