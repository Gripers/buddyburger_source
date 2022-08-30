import "./burgers.scss";
import React from "react";

import { useCart } from "react-use-cart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ApiFuncsContext } from "../../anyFunc/apiFuncs";

import "react-lazy-load-image-component/src/effects/blur.css";

const Burgers = () => {
  const { categories } = React.useContext(ApiFuncsContext);
  const { addItem, getItem, removeItem } = useCart();

  return (
    <div className="mt-5">
      {categories.map((cat) => {
        return (
          <section key={cat.id} id={cat.name_ru}>
            <div className="cats-container my-5">
              <h2>{cat.name_ru}</h2>
              <div className="burgers-container mt-4">
                {cat.burgers.map((burger) => {
                  return (
                    <div
                      key={burger.id}
                      className="burger-card"
                      style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
                    >
                      <div className="burger-card-header">
                        <LazyLoadImage
                          src={burger.image}
                          alt=""
                          effect="blur"
                        />
                      </div>
                      <div className="burger-card-body">
                        <h4>{burger.name_ru}</h4>
                        <p className="dessser">{burger.definition_ru}</p>
                        <p className="pricon">{burger.price} UZS</p>
                        <div className="burger-card-body-foot">
                          {burger.price ? (
                            <span>{burger.price} UZS</span>
                          ) : (
                            <span>null</span>
                          )}
                          {getItem(burger.id) ? (
                            <button onClick={() => removeItem(burger.id)}>
                              Отменить
                            </button>
                          ) : (
                            <button onClick={() => addItem(burger)}>
                              Выбрать
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Burgers;
