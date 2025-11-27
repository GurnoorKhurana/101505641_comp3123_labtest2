import React from "react";

function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>

      <div className="weather-main">
        <img src={iconUrl} alt={weather.desc} />
        <div className="weather-text">
          <p className="temp">{weather.temp}°C</p>
          <p className="description">{weather.desc}</p>
        </div>
      </div>

      <div className="weather-extra">
        <p>Feels like: {weather.feelsLike}°C</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
