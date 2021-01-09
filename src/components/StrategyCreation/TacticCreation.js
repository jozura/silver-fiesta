import React, {useState} from 'react'
import {useStrategyDataStore} from './StrategyDataStore'
import BaseInstructionElement from './InstructionElement'


// Tactic = Array of step objects
// step object = {text: "text"
//                  }


// Unique keys for instruction objs

export default function TacticCreation() {
    const {tactic, setTactic} = useStrategyDataStore()

    const instructions = tactic.map((instructionObj, i) => {<BaseInstructionElement
                                                                key={instructionObj.text}
                                                                index={i}
                                                                text={instructionObj.text}>
                                                            </BaseInstructionElement>})
    if (instructions.length === 0) {
        return (
            <button onClick={() => setTactic([...tactic, {text: ""}])}>Add element</button>
        )
    }
    return (
        <div>
           {instructions} 
        </div>
    )
}
