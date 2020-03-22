import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Demain from './components/Demain.js'

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
  
      })
  }


  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">   
        <Demain mistral={mistral} windDirection={windDirection} strong={strong} windSpeed={windSpeed} />
      </div>
    </div> 
  );

}

export default App