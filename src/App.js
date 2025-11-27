import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("Dehli");   // default city :)
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = "b4a2544b8d089a8f12d509a5e9693b37"; // My api key from the weather site

  const fetchWeather = async (cityName) => {
    if (!cityName) return;

    setLoading(true);
    setErrorMsg("");
    setWeather(null);

    try {
      const url =
        `https://api.openweathermap.org/data/2.5/weather?q=` +
        encodeURIComponent(cityName) +
        `&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("City not found");
        } else {
          throw new Error("Error loading weather data");
        }
      }

      const data = await res.json();

      // pick only the fields we care about
      setWeather({
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  // load once and whenever city changes
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // gets called from SearchBar components, passing props
  const handleSearch = (newCity) => {
    setCity(newCity);
  };
  // yippy shows weather
  return (
    <div className="app">
      <h1>React Weather App</h1>
      
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {errorMsg && <p className="error">{errorMsg}</p>}
      
      {weather && <WeatherCard weather={weather} />} 
    </div>
  );
}

export default App;
