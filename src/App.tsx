import { useContext } from "react";
import ForecastCOntextProvider, {
  ForecastContext,
} from "./components/context/ForecastContextProvider";
import "./components/css/style.css";
import Home from "./components/Home";

const App = () => {
  const { forecast } = useContext(ForecastContext);
  console.log("we are in APP");
  console.log(forecast);

  return (
    <ForecastCOntextProvider>
      <div className="App">
        <Home />
      </div>
    </ForecastCOntextProvider>
  );
};

export default App;
