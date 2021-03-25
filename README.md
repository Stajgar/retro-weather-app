# retro-weather-app

## Description

The goal of this project was to rebuild an application implemented in [Pixel Weather App](https://github.com/Stajgar/pixel-weather-app) using React. Main features:
* search for weather data from desired city or web browser geolocation
* Fahrenheit to Celsius unit conversion
* display current weather (wind speed, precipitation, weather description)
* display weather forecast

## Approach

Retro Weather App utilises OpenWeather API to provide real time data about weather in searched places. Frontend layer was built mainly using React and Bootstrap - a full list of technology and tools used to create this project from design to implementation can be found below.

## Design

Retro Weather App is inspired by vintage-looking, 90's Windows themed background and animated weather icons giving it retro vibe.

## Live demo

[Retro Weather App](https://clever-easley-a5d809.netlify.app/)

## Tech stack & tools
  * React 17.0.1
  * Bootstrap 4.5.3
  * Prettier 2.2.1
  * Axios
  * OpenWeather API
  * Font Awesome
  * GitHub
  * Netlify
  * Invision
  * Adobe XD

## Running instructions

Clone the repository:

`$ git clone https://github.com/Stajgar/retro-weather-app.git`

To run this project locally, start the server using npm: 

`$ npm start`

Head to [localhost:3000](localhost:3000) in your browser to open the application.

Type in the search bar your desired city and click the magnifier button. Then you’ll find out what the weather is there today. 

Click the geolocation button to check what the weather is in your current area. 

You can also change the temperature displayed in Celsius to Fahrenheits - it will work both on the current weather and the forecast.

## Acknowledgments

This application was created as part of SheCodes workshops which are a great way to start learning frontend development.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).