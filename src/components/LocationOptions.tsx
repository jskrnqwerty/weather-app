import { useContext } from "react";
import { DataContext } from "./context/DataContextProvider";
import { locationsDataType } from "./types/Types";

type LocationOptionsPropsType = {
  locationsData: locationsDataType[];
};

const LocationOptions = ({
  locationsData,
}: LocationOptionsPropsType): JSX.Element => {
  const { fetchData } = useContext(DataContext);

  return (
    <div className="generated-list">
      <ul>
        {locationsData.map((locationsDataItem, index) => (
          <li key={index}>
            <button
              onClick={() => fetchData(locationsDataItem, "weather", "metric")}
            >
              {locationsDataItem.name + ", "}
              {locationsDataItem.state ? locationsDataItem.state + " " : ""}
              {locationsDataItem.country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationOptions;
