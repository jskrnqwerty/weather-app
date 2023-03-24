import "./css/style.css";
import { useContext } from "react";
import { DataContext } from "./context/DataContextProvider";
// import { MdOutlineLocationOn as LocationIcon } from "react-icons/md";
import { WiHumidity as HumidityIcon } from "react-icons/wi";
import {
  FaMapMarkerAlt as LocationIcon,
  FaCloudShowersHeavy as RainIcon,
  FaWind as WindIcon,
  FaThermometerHalf as FeelsLikeIcon,
} from "react-icons/fa";

const DisplayData = () => {
  const { weather, selectedLocation } = useContext(DataContext);
  console.log("weather for ", weather.name, weather);

  const city: string = selectedLocation.name;
  const country: string = selectedLocation.country;
  const weatherCity: string = weather.name;
  const weatherCountry: string = weather.sys.country;
  const temp: number = Math.floor(weather.main.temp);
  const feelsLike: number = Math.floor(weather.main.feels_like);
  const tempMin: number = Math.floor(weather.main.temp_min);
  const tempMax: number = Math.floor(weather.main.temp_max);
  const humidity: number = Math.floor(weather.main.humidity);
  const weatherDescription: string = weather?.weather[0].description;
  const weatherType: string = weather?.weather[0].main;
  const windSpeed: number = Math.floor(weather.wind.speed);
  const windGust: number = Math.floor(weather.wind.gust);
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
    <>
      <div className="main-content">
        <div className="current-location">
          <div className="location-icon">
            <LocationIcon size="1.3rem" />
          </div>
          <div className="city">{city}</div>
          <div className="country">{country}</div>
        </div>
        <div className="current-weather-icon">
          <RainIcon size="13rem" />
        </div>
        <div>
          {/* <div>{weatherCity}</div> */}
          {/* <div>{weatherCountry}</div> */}
          <div className="temp-degree">
            <div className="temp">{temp}</div>
            <div className="degree">°</div>
          </div>
        </div>
        <div className="weather-type">{weatherType}</div>
        <div className="feels-like light-text">
          <div>{weatherDescription}</div>
        </div>
        <div className="additional-info">
          <div className="info-piece">
            <div className="small-icon">
              <WindIcon size="1rem" />
            </div>
            <div className="small-text">{windSpeed} kmph</div>
            <div className="small-text light-text">Wind</div>
          </div>

          <div className="info-piece">
            <div className="small-icon">
              <FeelsLikeIcon size="1rem" />
            </div>
            <div className="small-text">{feelsLike}°C</div>
            <div className="small-text light-text">Feels like</div>
          </div>
          <div className="info-piece">
            <div className="small-icon">
              <HumidityIcon size="1rem" />
            </div>
            <div className="small-text">{humidity}%</div>
            <div className="small-text light-text">Humidity</div>
          </div>
        </div>
        {/* <div>{weatherDescription}</div> */}
        {/* <div>
            Min Temp: {tempMin} <sup>o</sup>C
          </div> */}
        {/* <div>            
            Max Temp: {tempMax} <sup>o</sup>C
          </div> */}
        {/* <div>Humidity: {humidity}%</div> */}
        {/* <div>Wind Speed: {windSpeed} kmph</div> */}
        {/* <div>Wind Gust: {windGust} kmph</div> */}
      </div>
      <div className="extra-content"></div>
    </>
  );
};
export default DisplayData;
