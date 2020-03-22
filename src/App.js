import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function isMistral(degrees) {
  console.log("is mistral")
  if (degrees > 280 && degrees < 360) {
    return true
  } else {
    return false
  }
}

function isStrong(speed) {
  if (speed > 5) {
    return true
  } else {
    return false
  }
}



function App() {
  const [windDirection, setDirection] = useState(0);
  const [windSpeed, setSpeed] = useState(0);
  const [mistral, setIsMistral] = useState(false);
  const [strong, setIsStrong] = useState(false);
  
  function getForecast() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=13100,fr&APPID=f4e38397f380af9bab3b4dc73fab548a')
      .then(response => {
        setSpeed(response.data.list[0].wind.speed)
        setDirection(response.data.list[0].wind.deg)
        setIsMistral(isMistral(response.data.list[0].wind.deg))
        setIsStrong(isStrong(response.data.list[0].wind.speed))
  
      })
  }


  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">      
        <div className="card" style={{"width" : "18rem"}}>
          <h5 class="card-header">Aix en Provence</h5>
          <div className="card-body">
            <h5 className="card-title" id='is_mistral'>{mistral ? "Y'a du mistral" : "Y'a pas de mistral"}</h5>
            <p className="card-text" id='deg_today'>{windDirection} degrés</p>
            <h5 className="card-title" id='is_strong'>{strong ? "Ca souffle fort" : "Ca souffle pas fort"}</h5>
            <p className="card-text" id='speed_today'>{Math.floor(windSpeed * 3600 / 1000)} km/h</p>
            <button id='btn_forecast' className="btn btn-primary" onClick={() => getForecast()}>Forecast</button>
          </div>
        </div>
      </div>
    </div> 
  );

}

export default App