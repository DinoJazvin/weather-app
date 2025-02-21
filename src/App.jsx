import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherDisplay from './WeatherDisplay'

function App() {

  // const openWeatherApiKey = "0c6471427b01b0fa84d9320f7f3cbdd9"
  const weatherApiApiKey = "75d6344ee1c24bbcb35215837252102"

  const [weatherData, setWeatherData] = useState(0)
  const [city, setCity] = useState("")

  // const displayWeather = () => {
  //   console.log(weatherData ? weatherData : "no data available")
  // }

  const getWeatherData = () => {
    async function getWeather() {
      try {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=burien,usa&appid=${openWeatherApiKey}`)
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherApiApiKey}&q=${city}`)
        if(!response.ok) throw new Error("City not found")
        const data = await response.json()
        // console.log(data)
        setWeatherData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getWeather()
  }

  const getCity = (e) => {
    setCity(e.target.value)
  } 
  
  return (
    <>
      <h1>Weather App</h1>
      <input placeholder='Enter City...' onChange={(e)=> getCity(e)}></input>
      <button onClick={() => getWeatherData()}>Show weather</button>
      {/* {weatherData ? <h3>{`Current Temp: ${weatherData.current.temp_f}°F`}</h3> : <p></p>} */}
      <WeatherDisplay weatherData={weatherData}/>
    </>
  )
}

export default App
