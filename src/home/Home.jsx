import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherByCity } from "../redux/weatherSlice";
import Card from "../Card/Card";
import TemperatureCard from "../TemperatureCard/TemperatureCard"
import "./Home.css"

function Home({searchTerm}){
    
    const weatherData = useSelector((state) => state.dataCollector.weather);

    const dispatch = useDispatch();
    console.log(weatherData);

 useEffect(()=>{
    const weatherData =getWeather(searchTerm);
    console.log("weather data:" ,weatherData);
},[searchTerm])

// console.log("weather data:" ,weatherData);
console.log(searchTerm);

async function getWeather(searchTerm) {
    const apiKey = process.env.REACT_APP_API_KEY
    
try {

    await dispatch(fetchWeatherByCity({searchTerm,apiKey}));
   
}

catch (error) {
    console.log("Error:", error.message)
}
  }
 
    return(
    <div className="card">
    <TemperatureCard city={weatherData.city} temp={weatherData.temp} description={weatherData.weatherDescription}/>
    <Card variable={weatherData.humidity} variableText={"humidity"}/>
    <Card  variable={weatherData.windSpeed} variableText={"wind speed"}/>
    </div>
    )
}

     

export default Home;

