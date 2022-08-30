import "./profile.scss";
import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import user_ico from "../../img/user.png";

const ProfileDrop = () => {
  const { t } = useTranslation();

  return (
    <div className="profile-drop">
      <div className="dropdown">
        <button
          className="btn p-0"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={user_ico} alt="" width="24px" height="24px" />
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={{ boxShadow: "rgb(0 0 0 / 7%) 0px 4px 30px" }}
        >
          <li>
            {localStorage.getItem("user") ? (
              <Link to="/" className="dropdown-item">
                User
              </Link>
            ) : localStorage.getItem("admin") ? (
              <Link to="/admin" className="dropdown-item">
                Admin
              </Link>
            ) : null}
          </li>
          <li
            onClick={() => {
              localStorage.removeItem("user") ||
                localStorage.removeItem("admin") ||
                localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            <a className="dropdown-item">{t("profile.out")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDrop;
