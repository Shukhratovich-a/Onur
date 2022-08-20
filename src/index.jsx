import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as LocalizationProvider } from "./Context/Localization";
import { Provider as BurgerProvider } from "./Context/Burger";
import { Provider as ContactModalProvider } from "./Context/ContactModal";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider>
        <BurgerProvider>
          <ContactModalProvider>
            <App />
          </ContactModalProvider>
        </BurgerProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
