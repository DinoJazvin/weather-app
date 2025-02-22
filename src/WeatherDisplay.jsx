
import { useState } from "react"
import "./WeatherDisplay.css"


export default function WeatherDisplay({weatherData}) {

    return (
        <div style={{marginTop: "50px"}}>
            { weatherData ?
            <div className="weather-card" >
                <h2>{`${weatherData.location.name}, ${weatherData.location.region}`}</h2>
                <h3>{`Current temp is ${weatherData.current.temp_f}° F`}</h3>
            </div>
             : <p></p> }
        </div>
    )
}