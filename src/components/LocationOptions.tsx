import { useState } from "react";
import { locationsApiType, weatherApiType, unitsType } from "./types/types";

type LocationOptionsPropsType = {
  locationsApi: locationsApiType[];
};

const LocationOptions = ({
  locationsApi,
}: LocationOptionsPropsType): JSX.Element => {
  const [forecast, setForecast] = useState<weatherApiType>(
    {} as weatherApiType
  );

  const fetchForecast = (locationsApiItem: locationsApiType) => {
    const units: unitsType = "metric";
    const lat = locationsApiItem.lat;
    const lon = locationsApiItem.lon;
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(setForecast);
    console.log("Forecast: ", forecast);
  };

  return (
    <ul className="ul">
      {locationsApi.map((locationsApiItem: locationsApiType, index: number) => (
        <li key={index}>
          <button
            className="dropdown-btn"
            onClick={() => fetchForecast(locationsApiItem)}
          >
            {locationsApiItem.name}, {locationsApiItem.state},{" "}
            {locationsApiItem.country}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LocationOptions;
