import React from "react";
import ReactDOM from "react-dom/client";
import TernaryO from "./TernaryO";
import App from "./App";
import State from "./State";
import Crud from "./Crud";
import Lifecycle from "./Lifecycle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TernaryO />
    <App />
    <State />
    <Crud />
    <Lifecycle />
  </React.StrictMode>
);
