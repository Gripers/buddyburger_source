import "./header.scss";
import React from "react";

import { SliderSetContext } from "../../anyFunc/sliderSet";
import ReactOwlCarousel from "react-owl-carousel";

import header_first from "../../img/header-1.jpg";
import header_second from "../../img/header-2.jpg";
import header_third from "../../img/header-3.jpg";
import header_first_min from "../../img/header-1-min.jpg";
import header_second_min from "../../img/header-2-min.jpg";
import header_third_min from "../../img/header-3-min.jpg";

const Header = () => {
  const { headersettings } = React.useContext(SliderSetContext);

  return (
    <div>
      <ReactOwlCarousel {...headersettings}>
        <div className="slider-item">
          <img className="desktop-img" src={header_first} alt="" />
          <img className="mobile-img" src={header_first_min} alt="" />
        </div>
        <div className="slider-item">
          <img className="desktop-img" src={header_second} alt="" />
          <img className="mobile-img" src={header_second_min} alt="" />
        </div>
        <div className="slider-item">
          <img className="desktop-img" src={header_third} alt="" />
          <img className="mobile-img" src={header_third_min} alt="" />
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default Header;
