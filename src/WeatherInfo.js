import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import WeatherHeader from "./WeatherHeader";
import WeatherDetails from "./WeatherDetails";

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

  function fahrenheitTemperature(celsius_temperature) {
    return Math.round((celsius_temperature * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherInfo">
        <div className="city-info">
          <WeatherHeader
            city={props.data.city}
            date={props.data.date}
            description={props.data.description}
          />

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
                </div>
              </div>
            </div>
            <WeatherDetails
              feels={props.data.feels}
              humidity={props.data.humidity}
              wind={props.data.wind}
              unit={unit}
            />
          </div>
        </div>
        <WeatherForecast unit={unit} city={props.data.city} />
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <div className="city-info">
          <WeatherHeader
            city={props.data.city}
            date={props.data.date}
            description={props.data.description}
          />
          <div className="row">
            <div className="col-8">
              <div className="clearfix weather-temperature">
                <div className="float-left icon">
                  <WeatherIcon code={props.data.icon} />
                </div>
                <div className="float-left">
                  <div className="WeatherTemperature">
                    <span className="temperature">
                      {fahrenheitTemperature(props.data.temperature)}
                    </span>
                    <span className="units">
                      <a href="/" onClick={showCelsius}>
                        °C
                      </a>{" "}
                      | °F
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <WeatherDetails
              feels={fahrenheitTemperature(props.data.feels)}
              humidity={props.data.humidity}
              wind={props.data.wind}
              unit={unit}
            />
          </div>
        </div>
        <WeatherForecast unit={unit} city={props.data.city} />
      </div>
    );
  }
}
