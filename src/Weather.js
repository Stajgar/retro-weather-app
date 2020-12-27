import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Warsaw",
    date: "Mon 27 Dec 17:05",
    description: "Sunny",
    imgUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBvbHlnb24gc3R5bGU9IiIgcG9pbnRzPSI1MTIsMjExLjQ3OCA1MTIsMTc4LjA4NyA0MzQuMDg3LDE3OC4wODcgNDM0LjA4NywxNzguMDg3IDQwMC42OTYsMTc4LjA4NyA0MDAuNjk2LDE3OC4wODcgICAgNDAwLjY5NiwxNzguMDg3IDQwMC42OTYsMTQ0LjY5NiA0MDAuNjk2LDE0NC42OTYgNDAwLjY5NiwxMTEuMzA0IDMzMy45MTMsMTExLjMwNCAzMzMuOTEzLDg5LjA0MyAzMzMuOTEzLDg5LjA0MyAzMzMuOTEzLDAgICAgMzAwLjUyMiwwIDMwMC41MjIsNzcuOTEzIDIxMS40NzgsNzcuOTEzIDIxMS40NzgsMCAxNzguMDg3LDAgMTc4LjA4Nyw3Ny45MTMgMTc4LjA4Nyw3Ny45MTMgMTc4LjA4NywxMTEuMzA0IDE0NC42OTYsMTExLjMwNCAgICAxNDQuNjk2LDExMS4zMDQgMTExLjMwNCwxMTEuMzA0IDExMS4zMDQsMTQ0LjY5NiAxMTEuMzA0LDE0NC42OTYgMTExLjMwNCwxNzguMDg3IDg5LjA0MywxNzguMDg3IDg5LjA0MywxNzguMDg3IDAsMTc4LjA4NyAgICAwLDIxMS40NzggNzcuOTE5LDIxMS40NzggNzcuOTE5LDMwMC41MjIgMCwzMDAuNTIyIDAsMzMzLjkxMyA3Ny45MTksMzMzLjkxMyA3Ny45MTksMzMzLjkxMyAxMTEuMzA0LDMzMy45MTMgMTExLjMwNCwzNjcuMzA0ICAgIDExMS4zMDQsMzY3LjMwNCAxMTEuMzA0LDQwMC42OTYgMTQ0LjY5Niw0MDAuNjk2IDE0NC42OTYsNDAwLjY5NiAxNzguMDg3LDQwMC42OTYgMTc4LjA4Nyw0MzQuMDg3IDE3OC4wODcsNDM0LjA4NyAgICAxNzguMDg3LDQzNC4wODcgMTc4LjA4Nyw1MTIgMjExLjQ3OCw1MTIgMjExLjQ3OCw0MzQuMDg3IDMwMC41MjIsNDM0LjA4NyAzMDAuNTIyLDUxMiAzMzMuOTEzLDUxMiAzMzMuOTEzLDQyMi45NTcgICAgMzMzLjkxMyw0MjIuOTU3IDMzMy45MTMsNDAwLjY5NiAzNjcuMzA0LDQwMC42OTYgMzY3LjMwNCw0MDAuNjk2IDQwMC42OTYsNDAwLjY5NiA0MDAuNjk2LDM2Ny4zMDQgNDAwLjY5NiwzNjcuMzA0ICAgIDQwMC42OTYsMzMzLjkxMyA0MzQuMDkxLDMzMy45MTMgNDM0LjA5MSwzMzMuOTEzIDUxMiwzMzMuOTEzIDUxMiwzMDAuNTIyIDQzNC4wOTEsMzAwLjUyMiA0MzQuMDkxLDIxMS40NzggICIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZGE0NCIgY2xhc3M9IiI+PC9wb2x5Z29uPgoJPHJlY3QgeD0iNDAwLjY5NiIgeT0iNzcuOTEzIiBzdHlsZT0iIiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZGE0NCIgY2xhc3M9IiI+PC9yZWN0PgoJPHJlY3QgeD0iNDM0LjA4NyIgeT0iNDQuNTIyIiBzdHlsZT0iIiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZGE0NCIgY2xhc3M9IiI+PC9yZWN0PgoJPHJlY3QgeD0iNzcuOTEzIiB5PSI3Ny45MTMiIHN0eWxlPSIiIHdpZHRoPSIzMy4zOTEiIGhlaWdodD0iMzMuMzkxIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZkYTQ0IiBjbGFzcz0iIj48L3JlY3Q+Cgk8cmVjdCB4PSI0NC41MjIiIHk9IjQ0LjUyMiIgc3R5bGU9IiIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmRhNDQiIGNsYXNzPSIiPjwvcmVjdD4KCTxyZWN0IHg9Ijc3LjkxMyIgeT0iNDAwLjY5NiIgc3R5bGU9IiIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmRhNDQiIGNsYXNzPSIiPjwvcmVjdD4KCTxyZWN0IHg9IjQ0LjUyMiIgeT0iNDM0LjA4NyIgc3R5bGU9IiIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNmZmRhNDQiIGNsYXNzPSIiPjwvcmVjdD4KCTxyZWN0IHg9IjQwMC42OTYiIHk9IjQwMC42OTYiIHN0eWxlPSIiIHdpZHRoPSIzMy4zOTEiIGhlaWdodD0iMzMuMzkxIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZkYTQ0IiBjbGFzcz0iIj48L3JlY3Q+Cgk8cmVjdCB4PSI0MzQuMDg3IiB5PSI0MzQuMDg3IiBzdHlsZT0iIiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZGE0NCIgY2xhc3M9IiI+PC9yZWN0Pgo8L2c+Cjxwb2x5Z29uIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcG9pbnRzPSI1MTIsMjExLjQ3OCA1MTIsMTc4LjA4NyA0MzQuMDg3LDE3OC4wODcgNDAwLjY5NiwxNzguMDg3IDQwMC42OTYsMzMzLjkxMyA0MjIuOTU3LDMzMy45MTMgNDM0LjA4NywzMzMuOTEzICAgNTEyLDMzMy45MTMgNTEyLDMwMC41MjIgNDM0LjA4NywzMDAuNTIyIDQzNC4wODcsMjExLjQ3OCAiIGZpbGw9IiNjOTQ0YmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcG9seWdvbj4KPHJlY3QgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI0MDAuNjk2IiB5PSI3Ny45MTMiIHdpZHRoPSIzMy4zOTEiIGhlaWdodD0iMzMuMzkxIiBmaWxsPSIjYzk0NGJlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+CjxyZWN0IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iNDM0LjA4NyIgeT0iNDQuNTIyIiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIgZmlsbD0iI2M5NDRiZSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0Pgo8cmVjdCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9Ijc3LjkxMyIgeT0iNzcuOTEzIiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIgZmlsbD0iI2M5NDRiZSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0Pgo8cmVjdCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjQ0LjUyMiIgeT0iNDQuNTIyIiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIgZmlsbD0iI2M5NDRiZSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0Pgo8cmVjdCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9Ijc3LjkxMyIgeT0iNDAwLjY5NiIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiIGZpbGw9IiNjOTQ0YmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KPHJlY3QgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI0NC41MjIiIHk9IjQzNC4wODciIHdpZHRoPSIzMy4zOTEiIGhlaWdodD0iMzMuMzkxIiBmaWxsPSIjYzk0NGJlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+CjxyZWN0IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iNDAwLjY5NiIgeT0iNDAwLjY5NiIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiIGZpbGw9IiNjOTQ0YmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KPHJlY3QgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI0MzQuMDg3IiB5PSI0MzQuMDg3IiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIgZmlsbD0iI2M5NDRiZSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0Pgo8cG9seWdvbiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHBvaW50cz0iMTQ0LjY5NiwzNjcuMzA0IDE0NC42OTYsMzY3LjMwNCAxNDQuNjk2LDMzMy45MTMgMTExLjMwNCwzMzMuOTEzIDExMS4zMDQsMTc4LjA4NyAxNDQuNjk2LDE3OC4wODcgICAxNDQuNjk2LDE0NC42OTYgMTQ0LjY5NiwxNDQuNjk2IDE3OC4wODcsMTQ0LjY5NiAxNzguMDg3LDExMS4zMDQgMTQ0LjY5NiwxMTEuMzA0IDExMS4zMDQsMTExLjMwNCAxMTEuMzA0LDE0NC42OTYgICAxMTEuMzA0LDE0NC42OTYgMTExLjMwNCwxNzguMDg3IDc3LjkxMywxNzguMDg3IDAsMTc4LjA4NyAwLDIxMS40NzggNzcuOTEzLDIxMS40NzggNzcuOTEzLDMwMC41MjIgMCwzMDAuNTIyIDAsMzMzLjkxMyAgIDc3LjkxMywzMzMuOTEzIDg5LjA0MywzMzMuOTEzIDExMS4zMDQsMzMzLjkxMyAxMTEuMzA0LDM2Ny4zMDQgMTExLjMwNCwzNjcuMzA0IDExMS4zMDQsNDAwLjY5NiAxNDQuNjk2LDQwMC42OTYgMTQ0LjY5Niw0MDAuNjk2ICAgMTc4LjA4Nyw0MDAuNjk2IDE3OC4wODcsMzY3LjMwNCAiIGZpbGw9IiNjOTQ0YmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcG9seWdvbj4KPHBvbHlnb24geG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwb2ludHM9IjMzMy45MTMsODkuMDQzIDMzMy45MTMsODkuMDQzIDMzMy45MTMsMCAzMDAuNTIyLDAgMzAwLjUyMiw3Ny45MTMgMjExLjQ3OCw3Ny45MTMgMjExLjQ3OCwwIDE3OC4wODcsMCAgIDE3OC4wODcsNzcuOTEzIDE3OC4wODcsNzcuOTEzIDE3OC4wODcsMTExLjMwNCAzMzMuOTEzLDExMS4zMDQgIiBmaWxsPSIjYzk0NGJlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BvbHlnb24+Cjxwb2x5Z29uIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcG9pbnRzPSIxNzguMDg3LDQzNC4wODcgMTc4LjA4Nyw0MzQuMDg3IDE3OC4wODcsNTEyIDIxMS40NzgsNTEyIDIxMS40NzgsNDM0LjA4NyAzMDAuNTIyLDQzNC4wODcgMzAwLjUyMiw1MTIgICAzMzMuOTEzLDUxMiAzMzMuOTEzLDQyMi45NTcgMzMzLjkxMyw0MjIuOTU3IDMzMy45MTMsNDAwLjY5NiAxNzguMDg3LDQwMC42OTYgIiBmaWxsPSIjYzk0NGJlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BvbHlnb24+Cjxwb2x5Z29uIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcG9pbnRzPSIzMzMuOTEzLDE0NC42OTYgMzY3LjMwNCwxNDQuNjk2IDM2Ny4zMDQsMTc4LjA4NyA0MDAuNjk2LDE3OC4wODcgNDAwLjY5NiwxNDQuNjk2IDQwMC42OTYsMTQ0LjY5NiAgIDQwMC42OTYsMTExLjMwNCAzNjcuMzA0LDExMS4zMDQgMzY3LjMwNCwxMTEuMzA0IDMzMy45MTMsMTExLjMwNCAzMzMuOTEzLDExMS4zMDQgIiBmaWxsPSIjYzk0NGJlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BvbHlnb24+Cjxwb2x5Z29uIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcG9pbnRzPSI0MDAuNjk2LDM2Ny4zMDQgNDAwLjY5NiwzMzMuOTEzIDM2Ny4zMDQsMzMzLjkxMyAzNjcuMzA0LDM2Ny4zMDQgMzMzLjkxMywzNjcuMzA0IDMzMy45MTMsMzY3LjMwNCAgIDMzMy45MTMsNDAwLjY5NiAzMzMuOTEzLDQwMC42OTYgMzY3LjMwNCw0MDAuNjk2IDM2Ny4zMDQsNDAwLjY5NiA0MDAuNjk2LDQwMC42OTYgIiBmaWxsPSIjYzk0NGJlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BvbHlnb24+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=",
    temperature: 0,
    rain: 1,
    humidity: 66,
    wind: 23,
    time: "18:00",
    tempMax: 2,
    tempMin: -2,
  };

  return (
    <div className="Weather">
      <form className="mb-4">
        <div className="search-area">
          <div className="type-city-area">
            <input
              type="text"
              placeholder="Type City..."
              autoComplete="off"
              className="type-city-input"
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
      <div className="city-info">
        <div className="city-main-info">
          <h1 className="City">{weatherData.city}</h1>
          <ul>
            <li className="Date">{weatherData.date}</li>
            <li className="WeatherDescription">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="clearfix weather-temperature">
              <img
                className="float-left icon"
                src={weatherData.imgUrl}
                alt={weatherData.description}
              />
              <div className="float-left">
                <span className="temperature">{weatherData.temperature}</span>
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
                <li>Chance of rain: {weatherData.rain}%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
            <div className="row weather-forecast">
              <div class="col-2">
                  <h3>{weatherData.time}</h3>
                  <img src={weatherData.imgUrl} alt="icon" />
                  <div class="weather-forecast-temperature temperature">
                      <strong>{weatherData.tempMax}°C</strong>{" "}{weatherData.tempMin}°C
                  </div>
              </div>
              <div class="col-2">
                  <h3>{weatherData.time}</h3>
                  <img src={weatherData.imgUrl} alt="icon" />
                  <div class="weather-forecast-temperature temperature">
                      <strong>{weatherData.tempMax}°C</strong>{" "}{weatherData.tempMin}°C
                  </div>
              </div>
              <div class="col-2">
                  <h3>{weatherData.time}</h3>
                  <img src={weatherData.imgUrl} alt="icon" />
                  <div class="weather-forecast-temperature temperature">
                      <strong>{weatherData.tempMax}°C</strong>{" "}{weatherData.tempMin}°C
                  </div>
              </div>
              <div class="col-2">
                  <h3>{weatherData.time}</h3>
                  <img src={weatherData.imgUrl} alt="icon" />
                  <div class="weather-forecast-temperature temperature">
                      <strong>{weatherData.tempMax}°C</strong>{" "}{weatherData.tempMin}°C
                  </div>
              </div>
              <div class="col-2">
                  <h3>{weatherData.time}</h3>
                  <img src={weatherData.imgUrl} alt="icon" />
                  <div class="weather-forecast-temperature temperature">
                      <strong>{weatherData.tempMax}°C</strong>{" "}{weatherData.tempMin}°C
                  </div>
              </div>
              <div class="col-2">
                  <h3>{weatherData.time}</h3>
                  <img src={weatherData.imgUrl} alt="icon" />
                  <div class="weather-forecast-temperature temperature">
                      <strong>{weatherData.tempMax}°C</strong>{" "}{weatherData.tempMin}°C
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
}
