import "./components/css/style.css";
import { useContext } from "react";
import { DataContext } from "./components/context/DataContextProvider";
import DisplayForecast from "./components/DisplayData";
import Home from "./components/Home";

const App = () => {
  const { isWeather, weather } = useContext(DataContext);
  console.log("we are in APP");
  console.log("weather:", weather);
  console.log("isWeather:", isWeather);

  return (
    <>
      <div className="App">{isWeather ? <DisplayForecast /> : <Home />}</div>
    </>
  );
};

export default App;
