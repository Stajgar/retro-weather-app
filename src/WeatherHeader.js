import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherHeader(props) {
  return (
    <div className="city-main-info">
      <h1 className="City">{props.city}</h1>
      <ul>
        <li className="Date">
          <FormattedDate date={props.date} />
        </li>
        <li className="WeatherDescription">{props.description}</li>
      </ul>
    </div>
  );
}
