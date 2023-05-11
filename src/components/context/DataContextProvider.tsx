import { createContext, useState } from "react";
import { changeEventInType, setBoolen } from "../../types/DataContextTypes";
import {
  locationsDataType,
  weatherDataType,
  forecast5DataType,
  unitsType,
  locationType,
  weatherOrForecastType,
} from "../../types/Types";

export const DataContext = createContext({} as DataContextProviderValuesType);

type DataContextProviderPropsType = { children: React.ReactNode };
type DataContextProviderValuesType = {
  showHome: boolean;
  setShowHome: setBoolen;
  locationsData: locationsDataType[];
  showOptions: boolean;
  setShowOptions: setBoolen;
  fetchOptions: (e: changeEventInType) => void;
  fetchData: (
    locationsDataItem: locationsDataType,
    weatherOrForecast: weatherOrForecastType,
    units: unitsType
  ) => void;
  weather: weatherDataType;
  showWeather: boolean;
  setShowWeather: setBoolen;
  forecast: forecast5DataType;
  showForecast: boolean;
  selectedLocation: locationType;
};

const DataContextProvider = ({
  children,
}: DataContextProviderPropsType): JSX.Element => {
  const [showHome, setShowHome] = useState<boolean>(true);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [locationsData, setLocationsData] = useState<locationsDataType[]>([]);
  const [weather, setWeather] = useState<weatherDataType>(
    {} as weatherDataType
  );
  const [showWeather, setShowWeather] = useState<boolean>(false);
  const [forecast, setForecast] = useState<forecast5DataType>(
    {} as forecast5DataType
  );
  const [showForecast, setShowForecast] = useState<boolean>(false);
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
    // const apiUrl: string = `http://api.openweathermap.org/geo/1.0/direct?q=${currInput}&limit=${numOfOptions}&appid=${process.env.REACT_APP_API_KEY}`;
    const apiUrl: string = `http://api.openweathermap.org/geo/1.0/direct?q=${currInput}&limit=${numOfOptions}&appid=8d3b81e8ecfdf1ec8d175500301831aa`;
    console.log(apiUrl);
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
    console.log(apiUrl);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        switch (weatherOrForecast) {
          case "weather":
            setWeather(data);
            setShowWeather(true);
            setShowForecast(false);
            setShowOptions(false);
            break;
          case "forecast":
            setForecast(data);
            setShowForecast(true);
            setShowWeather(false);
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
        showHome,
        setShowHome,
        locationsData,
        showOptions,
        setShowOptions,
        fetchOptions,
        fetchData,
        weather,
        showWeather,
        setShowWeather,
        forecast,
        showForecast,
        selectedLocation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
