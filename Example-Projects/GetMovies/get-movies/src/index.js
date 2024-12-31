import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://61c1f1dedbb1d98fd618b0fc3c3866b3@o4509916611739648.ingest.de.sentry.io/4509916723544144",
  sendDefaultPii: true,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
