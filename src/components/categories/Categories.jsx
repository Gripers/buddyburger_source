import "./categories.scss";
import React from "react";

import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { SliderSetContext } from "../../anyFunc/sliderSet";
import { DopFuncsContext } from "../../anyFunc/dopFuncs";
import { ApiFuncsContext } from "../../anyFunc/apiFuncs";
import { Link } from "react-scroll";

import ReactOwlCarousel from "react-owl-carousel";

import Cart from "../cart/Cart";
import cart from "../../img/cart.png";

const Categories = () => {
  const { catsettings } = React.useContext(SliderSetContext);
  const { categories } = React.useContext(ApiFuncsContext);
  const { drop } = React.useContext(DopFuncsContext);

  const { t } = useTranslation();
  const { items } = useCart();

  const sliderRef = React.useRef(null);

  let num = 0;

  function goTo(index) {
    sliderRef.current.to(index, 200);
  }

  return (
    <div className="categories-container">
      <h1 className="categories-head-h1">{t("categories")}</h1>
      <div id="dropdi">
        <ReactOwlCarousel {...catsettings} className="mt-4 categories-slider">
          {categories.map((cat) => {
            return (
              <a key={cat.id} href={`#${cat.name_ru}`}>
                <div className="cat-slider-item">{cat.name_ru}</div>
              </a>
            );
          })}
        </ReactOwlCarousel>
      </div>
      <div
        className="dropped-slider"
        style={{
          transform: drop ? "translateY(0px)" : "translateY(-200px)",
          zIndex: "9999999",
        }}
        id="dropped-slider-id"
      >
        <ReactOwlCarousel
          {...catsettings}
          className="hidden-categories-slider"
          ref={sliderRef}
        >
          {categories.map((cat, index) => {
            return (
              <div key={cat.id} data-position={num++}>
                <Link
                  activeClass="active-cat-slider-item"
                  spy
                  to={`${cat.name_ru}`}
                  onClick={() => goTo(index)}
                >
                  {cat.name_ru}
                </Link>
              </div>
            );
          })}
        </ReactOwlCarousel>
        <div className="dropped-slider-cart-btn-div d-flex justify-content-end">
          <div className="nav-drop-down">
            <div className="dropdown">
              <button
                className="cart-btn mt-4"
                type="button"
                id="dropdownMenu2"
                aria-expanded="false"
              >
                <img src={cart} alt="" />
                <span>{items.length}</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenu2"
                style={{ boxShadow: "0 4px 25px rgb(0 0 0 / 25%)" }}
              >
                <Cart />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
