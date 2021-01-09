import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded ] = useState(false);
  const [forecast, setForeacast] = useState(null);

  function handleForecastResponse(response) {
    setForeacast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row" >
        <WeatherForecastPreview data={forecast.list[0]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[1]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[2]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[3]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[4]} unit={props.unit} />
      </div>
      
    );
  } else {
    let apiKey = "922c46ab82d8163152e55bf43505a833";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}