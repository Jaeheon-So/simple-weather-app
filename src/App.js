import { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭하면 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 클릭하면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 가져오는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Current Location");
  const cities = ["Current Location", "Paris", "New York", "Tokyo", "Seoul"];
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=306661f7f056ef621f2fb068cbe76406&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setWeather(data);
  };

  const getWeatherByCity = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=306661f7f056ef621f2fb068cbe76406&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
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
    <>
      <div className="container">
        <WeatherBox weatherInfo={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </>
  );
}

export default App;
