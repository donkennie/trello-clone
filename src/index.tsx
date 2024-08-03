import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import { AppStateProvider } from "./state/AppStateContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    <AppStateProvider/>
  </React.StrictMode>
);