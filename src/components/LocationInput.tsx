import LocationOptions from "./LocationOptions";
import { useContext } from "react";
import { ForecastContext } from "./context/ForecastContextProvider";

const LocationInput = (): JSX.Element => {
  const { locationsApi, fetchOptions, isOptionsShow } =
    useContext(ForecastContext);

  return (
    <>
      <div className="input-field">
        <input
          type="text"
          placeholder="city name..."
          autoComplete="off"
          onChange={(e) => {
            fetchOptions(e);
          }}
        ></input>
      </div>
      <div className="list-options">
        {isOptionsShow && <LocationOptions locationsApi={locationsApi} />}
      </div>
      {console.log("isOptionsShow:", isOptionsShow)}
    </>
  );
};

export default LocationInput;
