import React from "react";
import "../../styles/filialinner.scss";
import Footer from "../Footer";
import Navbar from "../Navbar";

const FilialTwoInner = () => {
  return (
    <>
      <Navbar />
      <div className="filial-inner-container">
        <div
          className="filial-inner-card my-5"
          style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
        >
          <div className="filial-inner-left-div">
            <h1>BUDDY BURGER ЮНУСАБАД</h1>
            <div className="filial-inner-left-div-linkers my-4">
              <div className="address">Адрес: Юнусабад 14 квартал</div>
              <div className="worktime">Часы работы: 11:00-3:00</div>
              <div className="phone">
                Номер телефона:{" "}
                <a href="tel:+998998490330">+998 99 849 03 30</a>
              </div>
              <div className="location">Ориентир: Otaginam kafe</div>
            </div>
          </div>
          <div className="filial-inner-right-div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.993594957766!2d69.30185561538583!3d41.374223879265394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef319d7246efd%3A0xb6995bc5af0c1177!2sBuddy%20Burger!5e0!3m2!1sru!2s!4v1656020647946!5m2!1sru!2s"
              width="100%"
              height="446"
              className="border-0"
              style={{ borderRadius: "12px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FilialTwoInner;
