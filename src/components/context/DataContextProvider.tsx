import { createContext, useState } from "react";
import {
  locationsDataType,
  weatherDataType,
  forecast5DataType,
  unitsType,
  locationType,
  weatherOrForecastType,
} from "../types/types";

export const DataContext = createContext({} as DataContextProviderValuesType);

type DataContextProviderPropsType = { children: React.ReactNode };
type DataContextProviderValuesType = {
  locationsData: locationsDataType[];
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  fetchOptions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchData: (
    locationsDataItem: locationsDataType,
    weatherOrForecast: weatherOrForecastType,
    units: unitsType
  ) => void;
  weather: weatherDataType;
  isWeather: boolean;
  forecast: forecast5DataType;
  isForecast: boolean;
  selectedLocation: locationType;
};

const DataContextProvider = ({
  children,
}: DataContextProviderPropsType): JSX.Element => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [locationsData, setLocationsData] = useState<locationsDataType[]>([]);
  const [weather, setWeather] = useState<weatherDataType>(
    {} as weatherDataType
  );
  const [isWeather, setIsWeather] = useState<boolean>(false);
  const [forecast, setForecast] = useState<forecast5DataType>(
    {} as forecast5DataType
  );
  const [isForecast, setIsForecast] = useState<boolean>(false);
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

  const fetchData = async (
    locationsDataItem: locationsDataType,
    weatherOrForecast: weatherOrForecastType,
    units: unitsType
  ) => {
    console.log("Option clicked!!!");
    const lat = locationsDataItem.lat;
    const lon = locationsDataItem.lon;
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/${weatherOrForecast}?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        switch (weatherOrForecast) {
          case "weather":
            setWeather(data);
            setIsWeather(true);
            setShowOptions(false);
            break;
          case "forecast":
            setForecast(data);
            setIsForecast(true);
            setShowOptions(false);
            break;
        }
      });
    console.log("Weather: ", weather);
    console.log("Forecast 5: ", forecast);
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
        fetchData,
        weather,
        isWeather,
        forecast,
        isForecast,
        selectedLocation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
