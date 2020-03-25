import React from 'react'
import * as moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const Prochain = (props) => {
    return (
        <div className="card shadow-sm mx-auto" style={{ "width": "20rem" }}>
            <h5 className="card-header">Prochain Mistral</h5>
            <div className="card-body">
                <p className="card-text" id='prochain_jour'>
                    {(props.prochainsJours.length > 0) ? moment(props.prochainsJours[0].dt_txt).format('LLLL') : "Pas de mistral en vue"}
                </p>
            </div>
        </div>
    )
}

export default Prochain