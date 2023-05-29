import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("app");
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
