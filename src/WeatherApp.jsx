import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "mumbai",
    feelsLike: 33.47,
    humidity: 74,
    temp: 28.99,
    tempMax: 28.99,
    tempMin: 28.99,
    weather: "haze",
  });
  let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <br></br>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
