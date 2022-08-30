import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NProgress from "nprogress";

import "./i18n";

import { ApiFuncsContextProvider } from "./anyFunc/apiFuncs";
import { SliderSetContextProvider } from "./anyFunc/sliderSet";
import { DopFuncsContextProvider } from "./anyFunc/dopFuncs";
import { ApiReqContextProvider } from "./anyFunc/apiReq";
import { CartProvider } from "react-use-cart";

import "./index.css";
import "./nprogress.css";
import "react-phone-input-2/lib/style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

NProgress.configure({ showSpinner: false });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <BrowserRouter>
      <ApiFuncsContextProvider>
        <SliderSetContextProvider>
          <DopFuncsContextProvider>
            <ApiReqContextProvider>
              <App />
            </ApiReqContextProvider>
          </DopFuncsContextProvider>
        </SliderSetContextProvider>
      </ApiFuncsContextProvider>
    </BrowserRouter>
  </CartProvider>
);
