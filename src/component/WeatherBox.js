import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      <div className="city">{weather?.name}</div>
      <div className="temp">
        {weather?.main.temp} °C / {(weather?.main.temp * 1.8 + 32).toFixed(2)}{" "}
        °F
      </div>
      <div className="weather-status">
        {(weather?.weather[0].description).toUpperCase()}
      </div>
    </div>
  );
};

export default WeatherBox;
