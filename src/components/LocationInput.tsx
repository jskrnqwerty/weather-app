import { useState } from "react";
// import { LocationsApiContext } from "./context/LocationsApiContextProvider";
import LocationOptions from "./LocationOptions";
import { locationsApiType } from "./types/types";

const LocationInput = (): JSX.Element => {
  const [isOptionsShow, setIsOptionsShow] = useState<boolean>(false);
  const [locationsApi, setLocationsApi] = useState<locationsApiType[]>([]);
  // const locationRef = useRef(null);

  const fetchOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currInput = e.target.value.trim();
    console.log("currInput: ", currInput);
    if (currInput.length === 0) {
      setIsOptionsShow(false);
    } else if (currInput.length > 0) {
      setIsOptionsShow(true);
      fetchApi(currInput);
    }
  };

  const fetchApi = (currInput: string) => {
    const numOfOptions: number = 5;
    const apiUrl: string = `http://api.openweathermap.org/geo/1.0/direct?q=${currInput}&limit=${numOfOptions}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(setLocationsApi);
  };
  console.log("Locations API:", locationsApi);

  return (
    <>
      <div className="input-field">
        <input
          type="text"
          // ref={locationRef}
          placeholder="Toronto"
          onChange={(e) => {
            fetchOptions(e);
          }}
        ></input>
      </div>
      <div className="list-options">
        {isOptionsShow && <LocationOptions locationsApi={locationsApi} />}
      </div>
    </>
  );
};

export default LocationInput;
