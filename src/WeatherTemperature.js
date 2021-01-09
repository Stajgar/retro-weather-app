import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitTemperature() {
    return (Math.round(props.data.temperature * 9/5 + 32));
  }

  if (unit === "celsius") {
    return (
      <div>
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.data.temperature)}</span>
        <span className="units">
          °C |{" "}<a href="/" onClick={showFahrenheit}>°F</a>
        </span>
      </div>
        <div className="Weather col">
          <WeatherForecast unit={unit} city={props.data.city} />
        </div>
      </div>
    );
    } else {
     return (
       <div>
        <div className="WeatherTemperature">
          <span className="temperature">{fahrenheitTemperature()}</span>
          <span className="units">
            <a href="/" onClick={showCelsius}>°C</a>{" "}| °F
          </span>
        </div>
          <div className="Weather col" >
            <WeatherForecast unit={unit} city={props.data.city} />
          </div>
        </div>
      );
    }
}
