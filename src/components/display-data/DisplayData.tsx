import "../../css/style.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { WiHumidity as HumidityIcon } from "react-icons/wi";
import {
  FaMapMarkerAlt as LocationIcon,
  FaWind as WindIcon,
  FaThermometerHalf as FeelsLikeIcon,
} from "react-icons/fa";
import BackArrow from "./BackArrow";
import WeatherIcon from "../icons/WeatherIcon";

const DisplayData = (): JSX.Element => {
  const { weather, selectedLocation, setShowHome, setShowWeather } =
    useContext(DataContext);

  console.log("weather for ", weather.name, weather);

  const city = selectedLocation.name;
  const country = selectedLocation.country;
  const temp = Math.floor(weather.main.temp);
  const feelsLike = Math.floor(weather.main.feels_like);
  const humidity = Math.floor(weather.main.humidity);
  const weatherDescription = weather?.weather[0].description;
  const weatherType = weather?.weather[0].main;
  const windSpeed = Math.floor(weather.wind.speed);
  const weatherCity = weather.name;
  const weatherCountry = weather.sys.country;
  const tempMin = Math.floor(weather.main.temp_min);
  const tempMax = Math.floor(weather.main.temp_max);
  const windGust = Math.floor(weather.wind.gust);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currTime = new Date(Date.now());
  const utcTime = `UTC Time: ${currTime.getUTCHours()}: ${currTime.getUTCMinutes()}`;
  const utcDate = `${currTime.getUTCDate()} ${
    months[currTime.getUTCMonth()]
  } ${currTime.getUTCFullYear()} ${currTime.getUTCHours()}:${currTime.getUTCMinutes()}:${currTime.getUTCSeconds()} GMT`;
  const utcTimeUnix = Date.parse(utcDate);
  console.log("utc Time: ", utcTimeUnix);
  const localTimeUnix = `${utcTimeUnix + weather.timezone * 1000}`;
  console.log("Local Time: ", localTimeUnix);
  const localTime = new Date(Number(localTimeUnix));
  console.log(localTime);

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
  // timezone
  // dt

  return (
    <>
      <div className="main-content">
        {/* <div className="header"> */}
        <div className="current-location">
          <div className="back-arrow">
            <BackArrow
              handleClick={() => {
                setShowHome(true);
                setShowWeather(false);
              }}
            />
          </div>
          <div className="location-icon">
            <LocationIcon size="1rem" />
          </div>
          <div className="city">{city}</div>
          <div className="country">{country}</div>
          <div className="local-time small-text light-text">
            {/* {localTimeUnix} */}
          </div>
        </div>
        {/* </div> */}
        <div className="current-weather-icon">
          <WeatherIcon
            size="15rem"
            weatherType={weatherType}
            weatherDescription={weatherDescription}
          />
          {/* <IconFacebook
            size="56"
            color="white"
          /> */}
        </div>
        {/* <div>{weatherCity}</div> */}
        {/* <div>{weatherCountry}</div> */}
        <div className="weather-summary">
          <div className="temp">
            {temp}
            <span className="degree">°</span>
          </div>
          <div className="weather-description">{weatherDescription}</div>
          <div className="weather-type feels-like small-text light-text">
            {/* {utcDate} <br></br>
            {utcTimeUnix} <br></br>
            {localTimeUnix} <br></br>
            {localTime.toLocaleString()} <br></br> */}
          </div>
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
        {/* <div>
            Min Temp: {tempMin} <sup>o</sup>C
          </div> */}
        {/* <div>            
            Max Temp: {tempMax} <sup>o</sup>C
          </div> */}
        {/* <div>Wind Gust: {windGust} kmph</div> */}
      </div>
      <div className="extra-content">
        {/* <div>{tempMin}</div>
        <div>{tempMax}</div> */}
      </div>
    </>
  );
};
export default DisplayData;
