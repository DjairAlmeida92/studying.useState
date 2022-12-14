import React from "react";
import ReactDOM from "react-dom/client";
import TernaryO from "./TernaryO";
import App from "./App";
import State from "./State";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TernaryO />
    <App />
    <State />
  </React.StrictMode>
);
