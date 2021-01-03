import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <div className="float-left icon">
              <WeatherIcon code={props.data.icon} />
              </div>
              <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
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
}