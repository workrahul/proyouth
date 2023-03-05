import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppState from "./context/AppState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StrictMode>
      <AppState>
        <App />
      </AppState>
    </StrictMode>
  </BrowserRouter>
);
