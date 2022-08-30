import "./filial.scss";
import React from "react";

import { Link } from "react-router-dom";
import { ApiFuncsContext } from "../../../anyFunc/apiFuncs";

const Filial = () => {
  const { filials } = React.useContext(ApiFuncsContext);

  return (
    <>
      {filials.map((filial) => {
        return (
          <Link
            key={filial.id}
            to={`/filials/${filial.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div
              className="filial-card"
              style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
            >
              <div className="filial-card-left">
                <h4>{filial.name}</h4>
                <span>{filial.address}</span>
              </div>
              <div className="filial-card-medium">
                <span style={{ color: "rgba(0,0,0,.5)" }}>Часы работы</span>
                <span>Ежедневно: {filial.work_time}</span>
              </div>
              <div className="filial-card-right">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="#e0e0e0"
                  width="18"
                  height="18"
                >
                  <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>
                </svg>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Filial;
