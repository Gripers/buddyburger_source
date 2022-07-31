import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/categories.scss";
import { SliderSetContext } from "../anyFunc/sliderSet";
import { DopFuncsContext } from "../anyFunc/dopFuncs";
import { ApiFuncsContext } from "../anyFunc/apiFuncs";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-scroll";
import cart from "../img/cart.png";
import Cart from "./Cart";
import { useCart } from "react-use-cart";

const Categories = () => {
  const { t } = useTranslation();
  const { catsettings } = React.useContext(SliderSetContext);
  const { categories } = React.useContext(ApiFuncsContext);
  const { drop } = React.useContext(DopFuncsContext);
  const { totalItems } = useCart();
  let num = 0;

  return (
    <div className="categories-container">
      <h1 className="categories-head-h1">{t("categories")}</h1>
      <div id="dropdi">
        <OwlCarousel {...catsettings} className="mt-4 categories-slider">
          {categories.map((cat) => {
            return (
              <a key={cat.id} href={`#${cat.name_ru}`}>
                <div className="cat-slider-item">{cat.name_ru}</div>
              </a>
            );
          })}
        </OwlCarousel>
      </div>
      <div
        className="dropped-slider"
        style={{
          transform: drop ? "translateY(0px)" : "translateY(-200px)",
          zIndex: "9999999",
        }}
        id="dropped-slider-id"
      >
        <OwlCarousel {...catsettings} className="hidden-categories-slider">
          {categories.map((cat) => {
            return (
              <div key={cat.id} data-position={num++}>
                <Link
                  activeClass="active-cat-slider-item"
                  spy
                  to={`${cat.name_ru}`}
                >
                  {cat.name_ru}
                </Link>
              </div>
            );
          })}
        </OwlCarousel>
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
                <span>{totalItems}</span>
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
