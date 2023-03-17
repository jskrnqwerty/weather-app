import { createContext, useState } from "react";
import { locationsApiType, weatherApiType, unitsType } from "../types/types";

export const ForecastContext = createContext(
  {} as ForecastCOntextProviderValuesType
);

type ForecastCOntextProviderPropsType = { children: React.ReactNode };
type ForecastCOntextProviderValuesType = {
  locationsApi: locationsApiType[];
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  fetchOptions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchForecast: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    locationsApiItem: locationsApiType
  ) => void;
  forecast: weatherApiType;
  isForecast: boolean;
};

const ForecastCOntextProvider = ({
  children,
}: ForecastCOntextProviderPropsType): JSX.Element => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [locationsApi, setLocationsApi] = useState<locationsApiType[]>([]);
  const [isForecast, setIsForecast] = useState<boolean>(false);
  const [forecast, setForecast] = useState<weatherApiType>(
    {} as weatherApiType
  );

  const fetchOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currInput = e.target.value.trim();
    console.log("currInput: ", currInput);
    if (currInput.length === 0) {
      setShowOptions(false);
    } else if (currInput.length > 0) {
      setShowOptions(true);
      fetchLocationsApi(currInput);
    }
  };

  const fetchLocationsApi = (currInput: string) => {
    const numOfOptions: number = 5;
    const apiUrl: string = `http://api.openweathermap.org/geo/1.0/direct?q=${currInput}&limit=${numOfOptions}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(setLocationsApi);
    // setIs;
  };
  console.log("Locations API:", locationsApi);

  const fetchForecast = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    locationsApiItem: locationsApiType
  ) => {
    e.preventDefault();
    setIsForecast(true);
    setShowOptions(false);
    console.log("showOptions: ", showOptions);
    const units: unitsType = "metric";
    const lat = locationsApiItem.lat;
    const lon = locationsApiItem.lon;
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setForecast(data));
    console.log("Forecast: ", forecast);
    console.log(isForecast);
  };
  return (
    <ForecastContext.Provider
      value={{
        locationsApi,
        showOptions,
        setShowOptions,
        fetchOptions,
        fetchForecast,
        forecast,
        isForecast,
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

export default ForecastCOntextProvider;
