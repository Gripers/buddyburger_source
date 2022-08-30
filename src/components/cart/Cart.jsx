import "./cart.scss";
import React from "react";

import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

import NProgress from "nprogress";
import toast from "react-hot-toast";
import axios from "axios";

import { DopFuncsContext } from "../../anyFunc/dopFuncs";
import { bot_url } from "../../utilities";

import empty_cart_pic from "../../img/empty_cart.png";

const Cart = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, emptyCart } =
    useCart();
  const { t } = useTranslation();
  const { handleLoginOpen } = React.useContext(DopFuncsContext);
  const navigate = useNavigate();
  let total = 0;
  const notify = () => toast.success("Успешно");

  const toGroup = () => {
    axios
      .post(
        `${bot_url}/sendMessage?chat_id=-1001694192631&text=${encodeURIComponent(
          `<b>Заказ:</b> ${(Math.floor(Math.random() * 10000) + 10000)
            .toString()
            .substring(1)}
<b>Имя:</b> ${localStorage.getItem("username")}
<b>Телефон:</b> +${localStorage.getItem("phone_number")}
${items
  .map((item) => {
    return `
<b>${item.name_ru}</b>
${item.count} x ${item.price} = ${item.count * item.price} UZS`;
  })
  .join("\n")}

<b>Сумма:</b> ${total} UZS`
        )}&parse_mode=html`
      )
      .then((res) => {
        if (res.status === 200) {
          notify();
        }
      });
  };

  const toOrderPage = () => {
    NProgress.start();
    setTimeout(() => {
      navigate("/order");
    }, 1000);
  };

  const funcs = () => {
    toGroup();
    emptyCart();
  };

  const funcss = () => {
    window.scrollTo(0, 0);
    handleLoginOpen();
  };

  return (
    <div>
      {isEmpty ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src={empty_cart_pic}
            alt=""
          />
          <h4 style={{ fontFamily: "Proxima-Nova Semibold", fontSize: "20px" }}>
            {t("empty")}
          </h4>
        </div>
      ) : (
        <></>
      )}
      <div className="cart-items-container">
        {items.map((item) => {
          if (item.count >= 1) {
            const priceCount = item.count * item.price;
            total += priceCount;

            return (
              <>
                <div key={item.id} className="cart-items-item">
                  <div className="cart-items-item-left">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-items-item-medium mx-4">
                    <span className="des">{item.name_ru}</span>
                    <div className="flexer mt-2">
                      <div className="cart-items-counter-div">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.count--)
                          }
                        >
                          -
                        </button>
                        <span>{item.count}</span>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.count++)
                          }
                        >
                          +
                        </button>
                      </div>
                      {item.price ? (
                        <span style={{ color: "rgb(255, 71, 0)" }}>
                          {priceCount} UZS
                        </span>
                      ) : (
                        <span style={{ color: "rgb(255, 71, 0)" }}>null</span>
                      )}
                    </div>
                  </div>
                  <div className="cart-items-item-right">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="18"
                      height="18"
                      onClick={() => removeItem(item.id)}
                    >
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                  </div>
                </div>
                <hr className="cart-hr" />
              </>
            );
          } else {
            removeItem(item.id);
          }
        })}
      </div>
      <div
        className="cart-order-btn-div"
        style={{ display: isEmpty ? "none" : "block" }}
        onClick={() =>
          localStorage.getItem("user") || localStorage.getItem("admin")
            ? funcs()
            : funcss()
        }
      >
        <button>
          {t("order")}
          <p>{total} UZS</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
