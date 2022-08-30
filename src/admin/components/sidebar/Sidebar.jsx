import "./sidebar.scss";
import React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">buddyburger</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">ГЛАВНАЯ</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Панель</span>
            </li>
          </Link>
          <p className="title">СПИСКИ</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Пользователи</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Продукты</span>
            </li>
            <Link to="/categories" style={{ textDecoration: "none" }}>
              <li>
                <CategoryIcon className="icon" />
                <span>Категории</span>
              </li>
            </Link>
          </Link>
          <p className="title">ПОЛЬЗОВАТЕЛЬ</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Профиль</span>
          </li>
          <li
            onClick={() => {
              localStorage.removeItem("admin");
              window.location.href = "/";
            }}
            style={{ cursor: "pointer" }}
          >
            <ExitToAppIcon className="icon" />
            <span>Выйти</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
