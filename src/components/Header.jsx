import React from "react";
import { SliderSetContext } from "../anyFunc/sliderSet";
import header_first from "../img/header-1.jpg";
import header_second from "../img/header-2.jpg";
import header_third from "../img/header-3.jpg";
import "../styles/header.scss";
import OwlCarousel from "react-owl-carousel";

const Header = () => {
  const { headersettings } = React.useContext(SliderSetContext);

  return (
    <div>
      <OwlCarousel {...headersettings}>
        <div className="slider-item">
          <img src={header_first} alt="" />
        </div>
        <div className="slider-item">
          <img src={header_second} alt="" />
        </div>
        <div className="slider-item">
          <img src={header_third} alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Header;
