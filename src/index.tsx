import ReactDOM from "react-dom/client";
import "./css/style.css";
import App from "./App";
import ForecastCOntextProvider from "./components/context/DataContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ForecastCOntextProvider>
    <App />
  </ForecastCOntextProvider>
);
