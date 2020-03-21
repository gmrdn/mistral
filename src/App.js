import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [windDirection, setDirection] = useState(0);
  const [windSpeed, setSpeed] = useState(1);

  return (
    <div>
      <button id='btn_forecast' className='button' onClick={() =>
        axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=13100,fr&APPID=f4e38397f380af9bab3b4dc73fab548a')
          .then(response => {
            setSpeed(response.data.list[0].wind.speed)
            setDirection(response.data.list[0].wind.deg)
          })}>Forecast</button>
      <div>
          <p id='speed_today'>{windSpeed}</p>
          <p id='deg_today'>{windDirection}</p>
      </div>
    </div>
  );

}

export default App