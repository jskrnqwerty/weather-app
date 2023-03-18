import { createContext, useState } from "react";
import {
  locationsDataType,
  weatherDataType,
  unitsType,
  locationType,
} from "../types/types";

export const DataContext = createContext({} as DataContextProviderValuesType);

type DataContextProviderPropsType = { children: React.ReactNode };
type DataContextProviderValuesType = {
  locationsData: locationsDataType[];
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  fetchOptions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchWeather: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    locationsDataItem: locationsDataType
  ) => void;
  weather: weatherDataType;
  isWeather: boolean;
  selectedLocation: locationType;
};

const DataContextProvider = ({
  children,
}: DataContextProviderPropsType): JSX.Element => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [locationsData, setLocationsData] = useState<locationsDataType[]>([]);
  const [isWeather, setIsWeather] = useState<boolean>(false);
  const [weather, setWeather] = useState<weatherDataType>(
    {} as weatherDataType
  );
  const [selectedLocation, setSelectedLocation] = useState<locationType>(
    {} as locationType
  );

  const fetchOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currInput = e.target.value.trim();
    console.log("currInput: ", currInput);
    if (currInput.length === 0) {
      setShowOptions(false);
    } else if (currInput.length > 0) {
      setShowOptions(true);
      fetchLocationsData(currInput);
    }
  };

  const fetchLocationsData = async (currInput: string) => {
    const numOfOptions: number = 5;
    const apiUrl: string = `http://api.openweathermap.org/geo/1.0/direct?q=${currInput}&limit=${numOfOptions}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(setLocationsData)
      .then(() => console.log("Locations API:", locationsData));
  };

  const fetchWeather = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    locationsDataItem: locationsDataType
  ) => {
    console.log("Option clicked!!!");
    const units: unitsType = "metric";
    const lat = locationsDataItem.lat;
    const lon = locationsDataItem.lon;
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(setWeather)
      .then(() => {
        setIsWeather(true);
        setShowOptions(false);
      });

    console.log("Weather: ", weather);
    console.log(isWeather);
    setSelectedLocation({
      name: locationsDataItem.name,
      country: locationsDataItem.country,
    });
  };
  return (
    <DataContext.Provider
      value={{
        locationsData,
        showOptions,
        setShowOptions,
        fetchOptions,
        fetchWeather,
        weather,
        isWeather,
        selectedLocation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
