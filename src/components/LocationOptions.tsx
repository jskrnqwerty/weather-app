import { useContext } from "react";
import { DataContext } from "./context/DataContextProvider";
import { locationsDataType } from "./types/types";

type LocationOptionsPropsType = {
  locationsData: locationsDataType[];
};

const LocationOptions = ({
  locationsData,
}: LocationOptionsPropsType): JSX.Element => {
  const { fetchData } = useContext(DataContext);

  return (
    <ul className="ul">
      {locationsData.map((locationsDataItem, index) => (
        <li key={index}>
          <button
            className="dropdown-btn"
            onClick={() => fetchData(locationsDataItem, "weather", "metric")}
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
