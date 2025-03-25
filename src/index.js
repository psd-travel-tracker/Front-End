import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/common.css";
import "./Style/trip.css";
import "./Style/form.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);