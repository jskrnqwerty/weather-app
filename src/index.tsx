import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ForecastCOntextProvider from "./components/context/ForecastContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ForecastCOntextProvider>
    <App />
  </ForecastCOntextProvider>
);
