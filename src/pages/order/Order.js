import "./order.scss";
import React from "react";

import NProgress from "nprogress";
import axios from "axios";
import toast from "react-hot-toast";

import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { url } from "../../utilities";
import { ApiFuncsContext } from "../../anyFunc/apiFuncs";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import som_pic from "../../img/cash.png";
import click_pic from "../../img/click.png";
import payme_pic from "../../img/payme.png";
import order_pic from "../../img/delivery.svg";
import samovivoz_pic from "../../img/box.svg";

const Order = () => {
  const { items } = useCart();
  const { filials } = React.useContext(ApiFuncsContext);

  const [som, setSom] = React.useState(false);
  const [click, setClick] = React.useState(false);
  const [payme, setPayme] = React.useState(false);
  const [order, setOrder] = React.useState(false);
  const [samovivoz, setSamovivoz] = React.useState(false);
  const [paymentType, setPaymentType] = React.useState("");
  const [orderType, setOrderType] = React.useState("");
  const [addressValue, setAddressValue] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [filialsShow, setFilialsShow] = React.useState(false);
  const [addressState, setAddressState] = React.useState();
  const [phoneState, setPhoneState] = React.useState();
  const [filialAppend, setFilialAppend] = React.useState();

  let total = 0;
  const navigate = useNavigate();

  function somFunc() {
    setSom(true);
    setClick(false);
    setPayme(false);
    setPaymentType("nalichniy");
  }

  function clickFunc() {
    setSom(false);
    setClick(true);
    setPayme(false);
    setPaymentType("click");
  }

  function paymeFunc() {
    setSom(false);
    setClick(false);
    setPayme(true);
    setPaymentType("payme");
  }

  function orderFunc() {
    setOrder(true);
    setSamovivoz(false);
    setFilialsShow(false);
    setOrderType("dostavka");
  }

  function samovivozFunc() {
    setOrder(false);
    setSamovivoz(true);
    setFilialsShow(true);
    setOrderType("samovizov");
  }

  const orderPoint = () => {
    const formData = new FormData();

    formData.append("delivery", orderType);
    formData.append("payment_type", paymentType);
    formData.append("address", addressValue);
    formData.append("comment", comment);
    formData.append("user", localStorage.getItem("user_id"));
    formData.append("filial", filialAppend);
    formData.append("order_details", JSON.stringify(items));

    try {
      console.log(formData);
      axios({
        method: "post",
        url: `${url}/order/`,
        headers: {
          Authorization: `Token ${
            localStorage.getItem("user_token") || localStorage.getItem("token")
          }`,
        },
        data: formData,
      }).then((res) => {
        toast.success("Ваш заказ принят");
        navigate("/");
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const address =
      event.target.options[event.target.selectedIndex].dataset.valueone;
    const phone =
      event.target.options[event.target.selectedIndex].dataset.valuetwo;
    const filial = event.target.value;

    setAddressState(address);
    setPhoneState(phone);
    setFilialAppend(filial);
  };

  React.useEffect(() => {
    setSom(true);
    setOrder(true);
    setPaymentType("nalichniy");
    setOrderType("dostavka");
  }, []);

  React.useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="order-container my-5">
        <div className="left-order-box">
          <div className="title">
            <h4>Оформление заказа</h4>
          </div>
          <hr />
          <div className="fields-up">
            <div className="name">
              <p>Имя</p>
              <input
                type="text"
                defaultValue={localStorage.getItem("username")}
                disabled={true}
              />
            </div>
            <div className="number">
              <p>Телефон номер</p>
              <input
                type="text"
                defaultValue={localStorage.getItem("phone_number")}
                disabled={true}
              />
            </div>
          </div>
          <div className="fields-down">
            <div className="payment-type">
              <p>Тип оплаты</p>
              <div className="payments">
                <div
                  className={som == true ? "active-payment" : ""}
                  onClick={somFunc}
                >
                  <img src={som_pic} alt="" />
                  <p>Наличные</p>
                </div>
                <div
                  className={click == true ? "active-payment" : ""}
                  onClick={clickFunc}
                >
                  <img src={click_pic} alt="" />
                  <p>Click</p>
                </div>
                <div
                  className={payme == true ? "active-payment" : ""}
                  onClick={paymeFunc}
                >
                  <img src={payme_pic} alt="" />
                  <p>Payme</p>
                </div>
              </div>
            </div>
            <div className="order-type">
              <p>Метод доставки</p>
              <div className="orders">
                <div
                  className={`order ${order == true ? "active-order" : ""}`}
                  onClick={orderFunc}
                >
                  <img src={order_pic} alt="" />
                  <p>Доставка</p>
                </div>
                <div
                  className={`order ${samovivoz == true ? "active-order" : ""}`}
                  onClick={samovivozFunc}
                >
                  <img src={samovivoz_pic} alt="" />
                  <p>Самовывоз</p>
                </div>
              </div>
            </div>
            {filialsShow ? (
              <div className="filial">
                <p>Ближайший филиал</p>
                <div className="filial-box">
                  <div className="box">
                    <select onChange={handleChange}>
                      <option value="">Выберите ближайший филиал</option>
                      {filials.map((filial) => {
                        return (
                          <option
                            key={filial.id}
                            value={filial.id}
                            data-valueone={filial.address}
                            data-valuetwo={filial.phone}
                          >
                            {filial.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {/*<div className="box d-flex justify-content-between align-items-center">*/}
                  {/*  <p>Адрес:</p>*/}
                  {/*  <p>{addressState}</p>*/}
                  {/*</div>*/}
                  <div className="box">
                    <p>Телефон:</p>
                    <p>{phoneState}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="address">
                <p>Адрес</p>
                <input
                  type="text"
                  value={addressValue}
                  onChange={(e) => setAddressValue(e.target.value)}
                  placeholder="Введите ваш адрес"
                />
              </div>
            )}
          </div>
          <div className="comments">
            <p>Коментария</p>
            <textarea
              cols="30"
              rows="8"
              style={{ resize: "none" }}
              placeholder="Коментария"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="order-btn">
            <button onClick={orderPoint}>Подтвердить заказ</button>
          </div>
        </div>
        <div className="right-order-box">
          <div className="title">
            <h4>Ваш заказ</h4>
          </div>
          <hr />
          <div className="lists">
            {items.map((item) => {
              const priceCount = item.count * item.price;
              total += priceCount;

              return (
                <div key={item.id} className="list">
                  <p>{item.name_ru}</p>
                  <p>{priceCount} UZS</p>
                </div>
              );
            })}
            <div className="list">
              <p>Доставка</p>
              <p>9000 UZS</p>
            </div>
          </div>
          <hr />
          <div className="all">
            <h4>Всего</h4>
            <h4>{total + 9000} UZS</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
