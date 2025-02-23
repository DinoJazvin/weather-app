
import { useEffect, useState } from "react"
import "./WeatherDisplay.css"
import "./index.css"
// import weatherImages from "/data/weatherData.js"


export default function WeatherDisplay({weatherData}) {

    // const [weatherGif, setWeatherGif] = useState("")
    // // console.log(weatherGif)

    // useEffect(()=> {
    //     if (weatherData){
    //         const gif = weatherImages.find((condition) => weatherData.current.condition.text === condition.id)
    //         setWeatherGif(gif)
    //     }
    // }, [weatherData])

    return (
        <div style={{marginTop: "50px"}}>
            { weatherData ?
            <div className="weather-card glassmorphism" >
                <h2>{`${weatherData.location.name}, ${weatherData.location.region}`}</h2>
                {/* <div className="metrics-container" style={{backgroundImage: `url("public/images/${weatherGif}.gif")`}}> */}
                 <div className="metrics-container">
                     <h3>{`Temperature: ${weatherData.current.temp_f}° F`}</h3>
                     <h3>{`Wind: ${weatherData.current.wind_mph} mph`}</h3>
                </div>
            </div>
             : <p></p> }
        </div>
    )
}