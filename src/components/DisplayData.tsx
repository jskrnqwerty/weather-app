import "./css/style.css";
import { useContext } from "react";
import { DataContext } from "./context/DataContextProvider";

const DisplayData = () => {
  const { weather, selectedLocation } = useContext(DataContext);
  console.log("weather for ", weather.name, weather);

  const city: string = selectedLocation.name;
  const country: string = selectedLocation.country;
  const weatherCity: string = weather.name;
  const weatherCountry: string = weather.sys.country;
  const temp: number = weather.main.temp;
  const feelsLike: number = weather.main.feels_like;
  const tempMin: number = weather.main.temp_min;
  const tempMax: number = weather.main.temp_max;
  const humidity: number = weather.main.humidity;
  const weatherDescription: string = weather?.weather[0].description;
  const weatherType: string = weather?.weather[0].main;
  const windSpeed: number = weather.wind.speed;
  const windGust: number = weather.wind.gust;
  // name
  // sys:
  //   ?country
  // main:
  //   temp
  //   feels_like
  //   temp_min
  //   temp_max
  //   humidity
  // weather:
  //   description: "broken ckouds"
  //   main: "Clouds"
  // wind:
  //   speed
  //   gust

  return (
    <div className="display-container">
      <div>
        {city}, {country}
      </div>

      <div>
        <div>{weatherCity}</div>
        <div>{weatherCountry}</div>
        <div>
          Temp: {temp} <sup>o</sup> C
        </div>
        <div>
          Feels Like: {feelsLike} <sup>o</sup>C
        </div>
        <div>
          Min Temp: {tempMin} <sup>o</sup>C
        </div>
        <div>
          {" "}
          Max Temp: {tempMax} <sup>o</sup>C
        </div>
        <div>Humidity: {humidity}%</div>
        <div>Description: {weatherDescription}</div>
        <div>Main: {weatherType}</div>
        <div>Wind Speed: {windSpeed} kmph</div>
        <div>Wind Gust: {windGust} kmph</div>
      </div>
    </div>
  );
};
export default DisplayData;
