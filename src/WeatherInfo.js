import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
          <div className="city-info">
        <div className="city-main-info">
          <h1 className="City">{props.data.city}</h1>
          <ul>
            <li className="Date"><FormattedDate date={props.data.date} /></li>
            <li className="WeatherDescription">{props.data.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="clearfix weather-temperature">
              <img
                className="float-left icon"
                src={props.data.imgUrl}
                alt={props.data.description}
              />
              <div className="float-left">
                <span className="temperature">{props.data.temperature}</span>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="more-info">
              <ul>
                <li>Chance of rain: %</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
            <div className="row weather-forecast">
              <div className="col-2">
                  <h3>{props.data.time}</h3>
                  <img src={props.data.imgUrl} alt="icon" />
                  <div className="weather-forecast-temperature temperature">
                      <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
                  </div>
              </div>
              <div className="col-2">
                  <h3>{props.data.time}</h3>
                  <img src={props.data.imgUrl} alt="icon" />
                  <div className="weather-forecast-temperature temperature">
                      <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
                  </div>
              </div>
              <div className="col-2">
                  <h3>{props.data.time}</h3>
                  <img src={props.data.imgUrl} alt="icon" />
                  <div className="weather-forecast-temperature temperature">
                      <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
                  </div>
              </div>
              <div className="col-2">
                  <h3>{props.data.time}</h3>
                  <img src={props.data.imgUrl} alt="icon" />
                  <div className="weather-forecast-temperature temperature">
                      <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
                  </div>
              </div>
              <div className="col-2">
                  <h3>{props.data.time}</h3>
                  <img src={props.data.imgUrl} alt="icon" />
                  <div className="weather-forecast-temperature temperature">
                      <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
                  </div>
              </div>
              <div className="col-2">
                  <h3>{props.data.time}</h3>
                  <img src={props.data.imgUrl} alt="icon" />
                  <div className="weather-forecast-temperature temperature">
                      <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
                  </div>
            </div>
        </div>
      </div>
        </div>
    );
}