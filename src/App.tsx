import "./components/css/style.css";
// import WeatherApiContextProvider from "./components/context/WeatherApiContextProvider";
import Home from "./components/Home";
// import GeoApiContextProvider from "./components/context/LocationsApiContextProvider";

function App() {
  return (
    // <GeoApiContextProvider>
    //   <WeatherApiContextProvider>
    <div className="App">
      <Home />
    </div>
    //   </WeatherApiContextProvider>
    // </GeoApiContextProvider>
  );
}

export default App;
