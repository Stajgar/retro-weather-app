import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    let temperatureFahrenheit = Math.round((temperature * 9/5) + 32);
    if (props.unit==="celsius") {
      return `${temperature}°C`; } else {
      return `${temperatureFahrenheit}°F`;
      }
  }
  
    return (
      <div className="WeatherForecastPreview col"> 
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        <div className="ForecastTemperature">
        {temperature()}
        </div>
      </div>
    );
}