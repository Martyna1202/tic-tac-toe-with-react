import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlayContextProvider } from "./useContext/useContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayContextProvider>
      <App />
    </PlayContextProvider>
  </React.StrictMode>
);
