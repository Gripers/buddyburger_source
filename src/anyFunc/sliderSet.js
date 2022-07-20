import React from "react";
import prev from "../img/prev.svg";
import next from "../img/next.svg";
import $ from "jquery";

const SliderSetContext = React.createContext();

const SliderSetContextProvider = ({ children }) => {
  const headersettings = {
    nav: false,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  const catsettings = {
    dots: false,
    items: 6,
    autoWidth: false,
    loop: false,
    margin: 10,
    nav: true,
    center: false,
    navText: [`<img src=${prev} >`, `<img src=${next} >`],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      300: {
        items: 2,
        nav: false,
      },
      650: {
        items: 3,
        nav: false,
      },
      850: { items: 4 },
      1060: { items: 5 },
      1260: { items: 6 },
    },
  };

  return (
    <div>
      <SliderSetContext.Provider
        value={{
          headersettings,
          catsettings,
        }}
      >
        {children}
      </SliderSetContext.Provider>
    </div>
  );
};

export { SliderSetContext, SliderSetContextProvider };
