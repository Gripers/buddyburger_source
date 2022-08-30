import "./logindialog.scss";
import React from "react";

import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DopFuncsContext } from "../../../anyFunc/dopFuncs";
import { ApiReqContext } from "../../../anyFunc/apiReq";

import PhoneInput from "react-phone-input-2";

const LoginDialog = () => {
  const { t } = useTranslation();

  const { loginSwitcher, setLoginOpen, loading, setLoading } =
    React.useContext(DopFuncsContext);
  const { phone, setPhone, handleLoginRequest } =
    React.useContext(ApiReqContext);

  const enterKey = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      handleLoginRequest();
    }
  };

  return (
    <div className="login-dialog">
      <div className="login-dialog-header">
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="24"
          height="24"
          onClick={() => setLoginOpen(false)}
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
      <div className="login-dialog-body">
        <h3>{t("dialog.login.tosite")}</h3>
        <span style={{ color: "#6e6e6e" }}>{t("dialog.login.number")}</span>
        <div className="login-dialog-body-forms my-4">
          <PhoneInput
            inputClass="shadow-none"
            country="uz"
            prefix=""
            value={phone}
            onChange={setPhone}
            onKeyDown={phone.length >= 12 ? enterKey : null}
          />
          {phone.length >= 12 ? (
            <button
              className="d-flex justify-content-center align-items-center"
              onClick={() => {
                setLoading(true);
                handleLoginRequest();
              }}
            >
              {loading ? (
                <CircularProgress
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              ) : (
                t("dialog.login.sign")
              )}
            </button>
          ) : (
            <button
              disabled
              className="d-flex justify-content-center align-items-center"
              onClick={() => {
                setLoading(true);
                handleLoginRequest();
              }}
            >
              {loading ? (
                <CircularProgress
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              ) : (
                t("dialog.login.sign")
              )}
            </button>
          )}
        </div>
      </div>
      <div className="login-dialog-footer">
        <p>
          {t("dialog.login.acc")}{" "}
          <span style={{ color: "#ff6124" }} onClick={loginSwitcher}>
            {t("dialog.login.reg")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginDialog;
