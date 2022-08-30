import "./regdialogcon.scss";
import React from "react";

import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ApiReqContext } from "../../../anyFunc/apiReq";
import { DopFuncsContext } from "../../../anyFunc/dopFuncs";

import PhoneInput from "react-phone-input-2";

const RegConfirmDialog = () => {
  const { t } = useTranslation();

  const {
    setRegConOpen,
    regSwitcher,
    regsms,
    setRegSms,
    regphone,
    setRegPhone,
    handleRegisterConfirmRequest,
  } = React.useContext(ApiReqContext);
  const { loading, setLoading } = React.useContext(DopFuncsContext);

  const enterKey = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      handleRegisterConfirmRequest();
    }
  };

  return (
    <div className="reg-dialog">
      <div className="reg-dialog-header">
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="24"
          height="24"
          onClick={() => setRegConOpen(false)}
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
      <div className="reg-dialog-body">
        <h3>{t("dialog.registration.des")}</h3>
        <div className="reg-dialog-body-forms my-4">
          <PhoneInput
            inputClass="shadow-none"
            country="uz"
            prefix=""
            value={regphone}
            onChange={setRegPhone}
            placeholder={`${t("dialog.registration.phone")}`}
            disabled
          />
          <input
            type="text"
            placeholder={`${t("dialog.login.code")}`}
            className="name-inp"
            value={regsms}
            onChange={(e) => setRegSms(e.target.value)}
            onKeyDown={regsms.length >= 6 ? enterKey : null}
            minLength={6}
            maxLength={6}
          />
          <button
            className="d-flex justify-content-center align-items-center"
            onClick={handleRegisterConfirmRequest}
          >
            {loading ? (
              <CircularProgress
                style={{ color: "white", width: "20px", height: "20px" }}
              />
            ) : (
              t("dialog.registration.reg")
            )}
          </button>
        </div>
      </div>
      <div className="reg-dialog-footer">
        <p>
          {t("dialog.registration.acc")}{" "}
          <span style={{ color: "#ff6124" }} onClick={regSwitcher}>
            {t("dialog.registration.log")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegConfirmDialog;
