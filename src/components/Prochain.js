import React from 'react'


const Prochain = (props) => {
    return (
        <div className="card shadow mx-auto" style={{ "width": "18rem" }}>
            <h5 className="card-header">Prochain Mistral</h5>
            <div className="card-body">
                <h5 className="card-title" id='mistral_bientot'>{props.mistralBientot ? "Mistral bientôt" : "Pas de mistral en vue"}</h5>
                <p className="card-text" id='prochain_jour'>{props.prochainJour}</p>
            </div>
        </div>
    )
}

export default Prochain