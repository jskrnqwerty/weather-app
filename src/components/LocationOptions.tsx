import { useContext } from "react";
import { ForecastContext } from "./context/ForecastContextProvider";
import { locationsApiType } from "./types/types";

type LocationOptionsPropsType = {
  locationsApi: locationsApiType[];
};

const LocationOptions = ({
  locationsApi,
}: LocationOptionsPropsType): JSX.Element => {
  const { fetchForecast } = useContext(ForecastContext);

  return (
    <ul className="ul">
      {locationsApi.map((locationsApiItem, index) => (
        <li key={index}>
          <button
            className="dropdown-btn"
            onClick={(e) => fetchForecast(e, locationsApiItem)}
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
