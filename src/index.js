import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { CartProvider } from "react-use-cart";
import "./nprogress.css";
import NProgress from "nprogress";
import "react-phone-input-2/lib/style.css";
import { ApiFuncsContextProvider } from "./anyFunc/apiFuncs";
import { SliderSetContextProvider } from "./anyFunc/sliderSet";
import { DopFuncsContextProvider } from "./anyFunc/dopFuncs";
import { ApiReqContextProvider } from "./anyFunc/apiReq";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/owl.carousel";

NProgress.configure({ showSpinner: false });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <React.StrictMode>
        <ApiFuncsContextProvider>
          <SliderSetContextProvider>
            <DopFuncsContextProvider>
              <ApiReqContextProvider>
                <App />
              </ApiReqContextProvider>
            </DopFuncsContextProvider>
          </SliderSetContextProvider>
        </ApiFuncsContextProvider>
      </React.StrictMode>
    </BrowserRouter>
  </CartProvider>
);
