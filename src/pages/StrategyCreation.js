import React from 'react'
import CreationStartForm from '../components/StrategyCreation/CreationStartForm'
import PlayerTacticTabControls from '../components/StrategyCreation/PlayerTacticTabControls'
import StrategyDataStore from '../components/StrategyCreation/StrategyDataStore'
import BaseInstructionElement from '../components/StrategyCreation/InstructionElement'
import TacticCreation from '../components/StrategyCreation/TacticCreation'
function StrategyCreation() {
    return (
            <StrategyDataStore>           
                <CreationStartForm/> 
                <PlayerTacticTabControls/>
                <BaseInstructionElement text={"AAAAAAAAAAAAAAAAAAAAAAAAAAAA"}/>
                <TacticCreation/>
            </StrategyDataStore>
    )
}

export default StrategyCreation

