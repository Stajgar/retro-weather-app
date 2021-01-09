import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
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
    return Math.round((props.data.temperature * 9) / 5 + 32);
  }

  function fahrenheitFeelsLike() {
    return Math.round((props.data.feels * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherInfo">
        <div className="city-info">
          <div className="city-main-info">
            <h1 className="City">{props.data.city}</h1>
            <ul>
              <li className="Date">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="WeatherDescription">{props.data.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="clearfix weather-temperature">
                <div className="float-left icon">
                  <WeatherIcon code={props.data.icon} />
                </div>
                <div className="float-left">
                  <div className="WeatherTemperature">
                    <span className="temperature">
                      {Math.round(props.data.temperature)}
                    </span>
                    <span className="units">
                      °C |{" "}
                      <a href="/" onClick={showFahrenheit}>
                        °F
                      </a>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col">
                      <WeatherForecast unit={unit} city={props.data.city} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="more-info">
                <ul>
                  <li>Feels like: {props.data.feels}°C</li>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {props.data.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <div className="city-info">
          <div className="city-main-info">
            <h1 className="City">{props.data.city}</h1>
            <ul>
              <li className="Date">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="WeatherDescription">{props.data.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="clearfix weather-temperature">
                <div className="float-left icon">
                  <WeatherIcon code={props.data.icon} />
                </div>
                <div className="float-left">
                  <div className="WeatherTemperature">
                    <span className="temperature">
                      {fahrenheitTemperature()}
                    </span>
                    <span className="units">
                      <a href="/" onClick={showCelsius}>
                        °C
                      </a>{" "}
                      | °F
                    </span>
                  </div>
                  <div className="row">
                    <div className="col">
                      <WeatherForecast unit={unit} city={props.data.city} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="more-info">
                <ul>
                  <li>Feels like: {fahrenheitFeelsLike()}°F</li>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {props.data.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
