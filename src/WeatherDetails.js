import React from "react";

export default function WeatherDetail(props) {
  const unitMapping = {
    celsius: `°C`,
    fahrenheit: `°F`,
  };
  return (
    <div className="col-4">
      <div className="more-info">
        <ul>
          <li>
            Feels like: {props.feels}
            {unitMapping[props.unit]}
          </li>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind: {props.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
