import { useContext } from "react";
import { ForecastContext } from "./components/context/ForecastContextProvider";
import "./components/css/style.css";
import Home from "./components/Home";

const App = () => {
  const { isForecast, forecast } = useContext(ForecastContext);
  console.log("we are in APP");
  console.log("forecast:", forecast);
  console.log("isForecast:", isForecast);

  return (
    <div className="App">
      {isForecast ? "Forecast gets displayed here" : <Home />}
    </div>
  );
};

export default App;
