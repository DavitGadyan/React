import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataLayer from "./store/DataLayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataLayer>
    <App />
  </DataLayer>
);
