import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherByCity } from "../redux/weatherSlice";
import "./Home.css";

function Home({ searchTerm }) {
  const weatherData = useSelector((state) => state.dataCollector.weather);
  const loading = useSelector((state) => state.dataCollector.loading);
  const error = useSelector((state) => state.dataCollector.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchTerm) return;

    const apiKey = process.env.REACT_APP_API_KEY;

    const debounceTimer = setTimeout(() => {
      dispatch(fetchWeatherByCity({ searchTerm, apiKey }));
    }, 600);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, dispatch]);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="weather-grid">
      <div className="temp-card">
        <h1>{weatherData.temp}</h1>
        <p>{weatherData.city}</p>
        <p>{weatherData.weatherDescription}</p>
      </div>

      <div className="info-card">
        <span>Humidity</span>
        <h2>{weatherData.humidity}</h2>
      </div>

      <div className="info-card">
        <span>Wind Speed</span>
        <h2>{weatherData.windSpeed}</h2>
      </div>
    </div>
  );
}

export default Home;
