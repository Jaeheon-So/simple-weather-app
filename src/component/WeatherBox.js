import React from "react";

const WeatherBox = ({ weatherInfo }) => {
  return (
    <div className="weather-box">
      <div className="city">{weatherInfo?.name}</div>
      <div className="temp">
        {weatherInfo?.main.temp} °C /{" "}
        {(weatherInfo?.main.temp * 1.8 + 32).toFixed(2)} °F
      </div>
      <div className="weather-status">
        {weatherInfo?.weather[0]?.description.replace(/\b[a-z]/g, (char) =>
          char.toUpperCase()
        )}
      </div>
    </div>
  );
};

export default WeatherBox;
