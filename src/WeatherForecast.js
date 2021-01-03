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
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row" >
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "922c46ab82d8163152e55bf43505a833";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
//   <div className="row weather-forecast">
//     <div className="col-2">
//       <h3>{props.data.time}</h3>
//       <img src={props.data.imgUrl} alt="icon" />
//         <div className="weather-forecast-temperature temperature">
//           <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
//         </div>
//     </div>
//     <div className="col-2">
//       <h3>{props.data.time}</h3>
//       <img src={props.data.imgUrl} alt="icon" />
//       <div className="weather-forecast-temperature temperature">
//         <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
//       </div>
//     </div>
//     <div className="col-2">
//       <h3>{props.data.time}</h3>
//         <img src={props.data.imgUrl} alt="icon" />
//         <div className="weather-forecast-temperature temperature">
//           <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
//         </div>
//     </div>
//     <div className="col-2">
//       <h3>{props.data.time}</h3>
//       <img src={props.data.imgUrl} alt="icon" />
//       <div className="weather-forecast-temperature temperature">
//         <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
//       </div>
//     </div>
//     <div className="col-2">
//       <h3>{props.data.time}</h3>
//       <img src={props.data.imgUrl} alt="icon" />
//       <div className="weather-forecast-temperature temperature">
//         <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
//       </div>
//     </div>
//     <div className="col-2">
//       <h3>{props.data.time}</h3>
//       <img src={props.data.imgUrl} alt="icon" />
//       <div className="weather-forecast-temperature temperature">
//         <strong>{props.data.tempMax}°C</strong>{" "}{props.data.tempMin}°C
//       </div>
//     </div>
// </div>
    
