import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logger from "./services/logService";

logger.init();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
