import React from 'react'

const getDirection = (degrees) => {
    if (degrees < 11.25) { return "Nord Est" } else 
    if (degrees < 56.25) { return "Nord Est" } else 
    if (degrees < 101.25) { return "Est"} else
    if (degrees < 146.25) { return "Sud Est"} else
    if (degrees < 191.25) { return "Sud"} else
    if (degrees < 236.25) { return "Sud Ouest"} else
    if (degrees < 281.25) { return "Ouest"} else
    if (degrees < 326.25) { return "Nord Ouest"} else
    if (degrees <= 360) { return "Nord" } 
}


const Demain = (props) => {
    return (
        <div className="card shadow-sm mx-auto" style={{ "width": "20rem" }}>
            <h5 className="card-header">Dans les 3 prochaines heures</h5>
            <div className="card-body">
                <h5 className="card-title" id='is_mistral'>{props.mistral ? "Y'a du mistral" : "Y'a pas de mistral"}</h5>
                <p className="card-text" id='deg_today'>{props.windDirection} degrés ({getDirection(props.windDirection)})</p>
                <h5 className="card-title" id='is_strong'>{props.strong ? "Ca souffle fort" : "Ca souffle pas fort"}</h5>
                <p className="card-text" id='speed_today'>{Math.floor(props.windSpeed * 3600 / 1000)} km/h</p>
            </div>
        </div>
    )
}

export default Demain