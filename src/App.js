import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Demain from './components/Demain.js'
import Prochain from './components/Prochain.js'

function isMistral(degrees) {
  if (degrees > 280 && degrees < 360) {
    return true
  } else {
    return false
  }
}

function isStrong(speed) {
  if (speed > 4.5) {
    return true
  } else {
    return false
  }
}

const joursDeMistral = (forecast) => {
  return forecast.data.list.filter(function (jour) {
    return (isMistral(jour.wind.deg) && isStrong(jour.wind.speed))
  })
}


function App() {
  const [windDirection, setDirection] = useState(0);
  const [windSpeed, setSpeed] = useState(0);
  const [mistral, setIsMistral] = useState(false);
  const [strong, setIsStrong] = useState(false);
  const [prochainsJours, setProchainsJours] = useState([]);

  useEffect(() => {
    getForecast()
  }, [])

  function getForecast() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=13100,fr&APPID=f4e38397f380af9bab3b4dc73fab548a')
      .then(response => {
        setSpeed(response.data.list[0].wind.speed)
        setDirection(response.data.list[0].wind.deg)
        setIsMistral(isMistral(response.data.list[0].wind.deg))
        setIsStrong(isStrong(response.data.list[0].wind.speed))
        setProchainsJours(joursDeMistral(response))
      })
  }


  return (
    <>
      <h1 className="m-3">Gare au mistral !</h1>
      <div className="bg-light p-4">
        <div className="container">
          <div className="row">
            <div className="col py-md-3 mb-3">
              <Demain mistral={mistral} windDirection={windDirection} strong={strong} windSpeed={windSpeed} />
            </div>
            <div className="col py-md-3 mb-3">
              <Prochain prochainsJours={prochainsJours} />
            </div>
          </div>
        </div>
      </div>
      <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        Une app pour apprendre React et éviter d'être surpris par le mistral
    </footer>
    </>
  );

}

export default App