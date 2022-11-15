import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div className="weather-button">
      <Button variant="warning">Current Location</Button>
      <Button variant="warning">Paris</Button>
      <Button variant="warning">New york</Button>
      <Button variant="warning">Sao Paulo</Button>
      <Button variant="warning">Seoul</Button>
    </div>
  );
};

export default WeatherButton;
