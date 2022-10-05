import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/styles/index.scss";
import { App } from "./components/App";
import { LaunchProvider } from "./contexts/LaunchContext/LaunchContext";

ReactDOM.render(
  <React.StrictMode>
    <LaunchProvider>
      <App />
    </LaunchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

