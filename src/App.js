import { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Current Location");
  const [loadingStatus, setLoadingStatus] = useState(true);
  const cities = ["Current Location", "Paris", "New York", "Tokyo", "Seoul"];
  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoadingStatus(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=306661f7f056ef621f2fb068cbe76406&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setLoadingStatus(false);
    setWeather(data);
  };

  const getWeatherByCity = async (city) => {
    setLoadingStatus(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=306661f7f056ef621f2fb068cbe76406&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setLoadingStatus(false);
    setWeather(data);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  useEffect(() => {
    if (city === "Current Location") getCurrentLocation();
    else getWeatherByCity(city);
  }, [city]);

  return (
    <div className="container">
      <WeatherBox weatherInfo={weather} loadingStatus={loadingStatus} />
      <WeatherButton cities={cities} setCity={setCity} />
    </div>
  );
}

export default App;
