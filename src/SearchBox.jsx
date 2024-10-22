import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error ,setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a265733c4a9d989c05d90433cf87bd98";

  let weatherInfo = async () => {
  try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonresp = await response.json();
    console.log(jsonresp);
    let result = {
      city: city,
      temp: jsonresp.main.temp,
      tempMax: jsonresp.main.temp_max,
      tempMin: jsonresp.main.temp_min,
      humidity: jsonresp.main.humidity,
      feelsLike: jsonresp.main.feels_like,
      weather: jsonresp.weather[0].description,
    };
    console.log(result);
      return result;
  } catch(error){
    throw error;
  }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async(event) => {
    try {
      event.preventDefault();
    console.log(city);
    setCity("");
   let newInfo = await weatherInfo();
   updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="city name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <Button variant="contained" type="submit">
            Search
          </Button>
        {error && <p>No such place exists</p>}
        </form>
      </div>
    </>
  );
}
