import { useContext } from "react";
import { DataContext } from "./context/DataContextProvider";
import { locationsDataType } from "./types/types";

type LocationOptionsPropsType = {
  locationsData: locationsDataType[];
};

const LocationOptions = ({
  locationsData,
}: LocationOptionsPropsType): JSX.Element => {
  const { fetchWeather } = useContext(DataContext);

  return (
    <ul className="ul">
      {locationsData.map((locationsDataItem, index) => (
        <li key={index}>
          <button
            className="dropdown-btn"
            onClick={(e) => fetchWeather(e, locationsDataItem)}
          >
            {locationsDataItem.name}, {locationsDataItem.state},{" "}
            {locationsDataItem.country}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LocationOptions;
