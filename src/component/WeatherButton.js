import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  const [btnActive, setBtnActive] = useState("");

  const handleCity = (city, idx) => {
    setBtnActive(cities[idx]);
    setCity(city);
  };

  return (
    <div className="weather-button">
      {cities.map((city, idx) => (
        <Button
          variant={btnActive === city ? "outline-warning" : "warning"}
          key={idx}
          onClick={() => handleCity(city, idx)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
