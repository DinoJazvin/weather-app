import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ""
import WeatherDisplay from './WeatherDisplay'

function App() {

  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
  const pexelsAPIKEY = import.meta.env.VITE_PEXELS_API_KEY
 
  const [bgImage, setBgImage] = useState("")
  const [weatherData, setWeatherData] = useState(0)
  const [city, setCity] = useState("")

  const getWeatherData = async () => {
    try {
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=burien,usa&appid=${openWeatherApiKey}`)
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`)
      if(!response.ok) throw new Error("City not found")
      const data = await response.json()
      // console.log(data)
      setWeatherData(data)
      setBackgoundImage(data.location.name)
      } catch (error) {
        console.log(error)
      }
  }

  const setBackgoundImage = async (city) => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${city}&per_page=1`, {
        headers: {Authorization: pexelsAPIKEY},
      })
      if(!response.ok) throw new Error("Image not found")
      const data = await response.json()
      console.log(data.photos[0].src.landscape)
      setBgImage(data.photos[0].src.landscape)
    } catch (error) {
      console.log(error)
    }
  }

  const getCity = (e) => {
    setCity(e.target.value)
  } 

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
  }, [bgImage])
  
  return (
    <div className='main-container'>
      <h1>Weather App</h1>
      <input placeholder='Enter City...' onChange={(e)=> getCity(e)}></input>
      <button onClick={() => getWeatherData()}>Show weather</button>
      <WeatherDisplay weatherData={weatherData}/>
    </div>
  )
}

export default App
