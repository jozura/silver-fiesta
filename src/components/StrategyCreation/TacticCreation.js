import React from 'react'

export default function TacticCreation({ index, deleteSelf }) {
    console.log(deleteSelf)
    return (
        <div>
            <p>Hello from TacticCreation tab {index}</p>
            <button onClick = {deleteSelf}>Delete</button>
        </div>
    )
}
