import React from 'react'


const Demain = (props) => {
    return (
        <div className="card shadow mx-auto" style={{ "width": "18rem" }}>
            <h5 className="card-header">Demain</h5>
            <div className="card-body">
                <h5 className="card-title" id='is_mistral'>{props.mistral ? "Y'a du mistral" : "Y'a pas de mistral"}</h5>
                <p className="card-text" id='deg_today'>{props.windDirection} degrés</p>
                <h5 className="card-title" id='is_strong'>{props.strong ? "Ca souffle fort" : "Ca souffle pas fort"}</h5>
                <p className="card-text" id='speed_today'>{Math.floor(props.windSpeed * 3600 / 1000)} km/h</p>
            </div>
        </div>
    )
}

export default Demain