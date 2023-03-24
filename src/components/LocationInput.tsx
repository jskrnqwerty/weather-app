import { useContext } from "react";
import { DataContext } from "./context/DataContextProvider";
import LocationOptions from "./LocationOptions";

const LocationInput = (): JSX.Element => {
  const { locationsData, fetchOptions, showOptions } = useContext(DataContext);

  return (
    <>
      {/* <div className="input-field"> */}
      <input
        type="text"
        placeholder="city..."
        autoComplete="off"
        onChange={(e) => {
          fetchOptions(e);
        }}
      ></input>
      {/* </div> */}
      <div className="list-container">
        {showOptions && <LocationOptions locationsData={locationsData} />}
      </div>
    </>
  );
};

export default LocationInput;
