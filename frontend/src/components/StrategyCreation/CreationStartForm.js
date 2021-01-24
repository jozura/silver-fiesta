import React from 'react'

export default function CreationStartForm({gatherData}) {

    const maps = ["Mirage", "Inferno", "Nuke", "Dust2"]
    const mapOptions = maps.map((mapName) =>
        <option key={mapName} value={mapName}>
            {mapName}
        </option> 
    )

    return (
        <form>
            <input type="text" placeholder="Tactic Name"/>
            <label htmlFor="map">Select map</label>
            <select id="map" name="map">
                {mapOptions}
            </select>
       </form>
    )
}
