// import { useContext } from "react";d
import { locationsApiType } from "./types/types";
// import { LocationsApiContext } from "./context/LocationsApiContextProvider";
// import { WeatherApiContext } from "./context/WeatherApiContextProvider";
// import { locationApiType } from "./types/types";

type LocationOptionsPropsType = {
  locationsApi: locationsApiType[];
};

const LocationOptions = ({
  locationsApi,
}: LocationOptionsPropsType): JSX.Element => {
  // const { locationsApi, selectedCityForecast, setSelectedCityForecast } =
  //   useContext(LocationsApiContext);

  // const { fetchForecast } = useContext(WeatherApiContext);

  // const selectCity = (selectedLocationApidata: locationsApiType): void => {
  //   setSelectedCityForecast(selectedLocationApidata);
  //   fetchForecast();
  //   console.log(selectedCityForecast);
  // };

  const selectLocation = (locationsApiItem: locationsApiType) => {};

  return (
    <ul className="ul">
      {locationsApi.map((locationsApiItem: locationsApiType, index: number) => (
        <li key={index}>
          <button
            className="dropdown-btn"
            onClick={() => selectLocation(locationsApiItem)}
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
