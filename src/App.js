import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      wind_speed: '',
      wind_deg: ''

    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick () {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=13100,fr&APPID=f4e38397f380af9bab3b4dc73fab548a')
      .then(response => this.setState({
        wind_speed: response.data.list[0].wind.speed,
        wind_deg: response.data.list[0].wind.deg
      }))
  }
  
  render() {
    return (
      <div className='button__container'>
        <button id='btn_forecast' className='button' onClick={this.handleClick}>Forecast</button>
        <p id='speed_today'>{this.state.wind_speed}</p>
        <p id='deg_today'>{this.state.wind_deg}</p>
      </div>
    )
  }
}

export default App