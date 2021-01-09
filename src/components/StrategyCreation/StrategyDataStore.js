import React, {createContext, useState, useContext, useRef, useEffect} from 'react'

const StrategyContext = createContext()

export const useStrategyDataStore = () => useContext(StrategyContext)

export default function StrategyDataStore ({children}) {
    const strategyData = useRef({
        0: []
    })
    // This gets rendered on tab change 
    const [tactic, setTactic] = useState([])
    const tacticIndex = useRef(0)

    const setTacticIndex = (i) => {
        console.log(i)
        tacticIndex.current = i
        console.log(strategyData.current)
        setTactic(strategyData.current[tacticIndex.current])
    }

    const initTactic = (i) => {
        strategyData.current[i] = []
    }

    const removeTactic = (i) => {
        delete strategyData.current[i]
    }

    useEffect(() => {
        strategyData.current[tacticIndex.current] = tactic
    }, [tactic])

    return (
        <StrategyContext.Provider value= {{ tactic, setTactic, initTactic, removeTactic, setTacticIndex}}>
            {children}
        </StrategyContext.Provider>
    )
}