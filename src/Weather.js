import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.main.wind),
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    const apiKey = "922c46ab82d8163152e55bf43505a833";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="search-area">
          <div className="type-city-area">
            <input
              type="text"
              placeholder="Type City..."
              autoComplete="off"
              className="type-city-input"
              onChange={handleCityChange}
            />
            <button type="submit" className="type-city-button">
              <i className="fas fa-search"></i>
            </button>
            <button className="current-location-button">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      
    </div>
  ); } else {
    search();
    return "Loading...";
  }
}
