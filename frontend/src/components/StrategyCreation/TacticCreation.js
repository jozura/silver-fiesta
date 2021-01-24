import React from 'react'

export default function TacticCreation({ index, deleteSelf }) {
    return (
        <div style= {{
            border: "2px solid"
        }}>
            <p>Hello from TacticCreation tab {index}</p>
            <button onClick = {deleteSelf}>Delete</button>
        </div>
    )
}
