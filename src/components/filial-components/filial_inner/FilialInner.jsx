import React from "react";
import "./filialinner.scss";
import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import { ApiFuncsContext } from "../../../anyFunc/apiFuncs";
import { useParams } from "react-router-dom";

const FilialInner = ({ match }) => {
  const { filials } = React.useContext(ApiFuncsContext);
  const { id } = useParams();
  const filial = filials.find((filial) => filial.id == id);

  return (
    <>
      <Navbar />
      <div key={id} className="filial-inner-container">
        <div
          className="filial-inner-card my-5"
          style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
        >
          <div className="filial-inner-left-div">
            <h1>{filial?.name}</h1>
            <div className="filial-inner-left-div-linkers my-4">
              <div className="address">{filial?.address}</div>
              <div className="worktime">Часы работы: {filial?.work_time}</div>
              <div className="phone">
                Номер телефона: <a href="tel:+998712445445">{filial?.phone}</a>
              </div>
              <div className="location">Ориентир: San Farm</div>
            </div>
          </div>
          <div className="filial-inner-right-div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.10922419401896!2d69.25442865812578!3d41.32330762633482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b036f632131%3A0x35a1d62811fbf156!2sBDDDY%20BURGER!5e0!3m2!1sru!2s!4v1656020834641!5m2!1sru!2s"
              width="100%"
              height="446"
              className="border-0"
              style={{ borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FilialInner;
