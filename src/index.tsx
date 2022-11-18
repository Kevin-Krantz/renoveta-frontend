import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
