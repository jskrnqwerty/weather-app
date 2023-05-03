import "./css/style.css";
import { useContext } from "react";
import { DataContext } from "./components/context/DataContextProvider";
import DisplayForecast from "./components/display-data/DisplayData";
import Home from "./components/Home";

const App = () => {
  const { showWeather, weather } = useContext(DataContext);
  console.log("we are in APP");
  console.log("weather:", weather);
  console.log("isWeather:", showWeather);

  return (
    <>
      <div className="App">{showWeather ? <DisplayForecast /> : <Home />}</div>
    </>
  );
};

export default App;
