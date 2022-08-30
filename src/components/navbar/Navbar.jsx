import "./navbar.scss";
import React from "react";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import DrawerComponent from "../drawer/Drawer";
import Cart from "../cart/Cart";
import ProfileDrop from "../profile_drop/ProfileDrop";

import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { DopFuncsContext } from "../../anyFunc/dopFuncs";

import { Dialog } from "@mui/material";

import LoginDialog from "../dialogs/login_dialog/LoginDialog";
import LoginConfirmDialog from "../dialogs/login_confirm_dialog/LoginConfirmDialog";
import RegDialog from "../dialogs/reg_dialog/RegDialog";
import RegConfirmDialog from "../dialogs/reg_confirm_dialog/RegConfirmDialog";

import logo from "../../img/logo.png";
import cart from "../../img/cart.png";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("910"));
  const { t, i18n } = useTranslation();
  const { items } = useCart();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const {
    homeClick,
    filialsClick,
    aboutusClick,
    contactsClick,
    handleLoginOpen,
    loginOpen,
    setLoginOpen,
    regOpen,
    setRegOpen,
    loginConfirmOpen,
    setLoginConfirmOpen,
    regConOpen,
    setRegConOpen,
  } = React.useContext(DopFuncsContext);

  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "white", boxShadow: "none" }}
      >
        <CssBaseline />
        <Toolbar className="nav-tool-bar justify-content-between">
          <div className="d-flex align-items-center">
            <div className="logo-div">
              <img src={logo} alt="" className="logo" />
            </div>
            <div style={{ display: isMobile ? "none" : "block" }}>
              <div className="nav-links">
                <a className="nav-link" onClick={homeClick}>
                  {t("navigation.home")}
                </a>
                <a className="nav-link" onClick={filialsClick}>
                  {t("navigation.filials")}
                </a>
                <a className="nav-link" onClick={aboutusClick}>
                  {t("navigation.aboutus")}
                </a>
                <a className="nav-link" onClick={contactsClick}>
                  {t("navigation.contacts")}
                </a>
              </div>
            </div>
          </div>
          <div style={{ display: isMobile ? "block" : "none" }}>
            {localStorage.getItem("user") || localStorage.getItem("admin") ? (
              <ProfileDrop />
            ) : (
              <button className="mobile-sign-btn" onClick={handleLoginOpen}>
                {t("btns.sign")}
              </button>
            )}
          </div>
          <div style={{ display: isMobile ? "none" : "block" }}>
            <div className="btns-div">
              <div className="nav-drop-down">
                <div className="dropdown">
                  <button
                    className="cart-btn"
                    type="button"
                    id="dropdownMenu2"
                    aria-expanded="false"
                  >
                    <img src={cart} alt="" />
                    <p>{t("btns.cart")}</p>
                    <span>{items.length}</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{ boxShadow: "0 4px 25px rgb(0 0 0 / 25%)" }}
                  >
                    <Cart />
                  </ul>
                </div>
              </div>
              {localStorage.getItem("user") || localStorage.getItem("admin") ? (
                <ProfileDrop />
              ) : (
                <button className="sign-btn" onClick={handleLoginOpen}>
                  {t("btns.sign")}
                </button>
              )}
              <div className="dropdown">
                <button
                  className="selector-btn btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("selector")}
                </button>
                <ul
                  className="drop-list dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li onClick={() => changeLanguage("ru")}>
                    <a className="dropdown-item">Русский</a>
                  </li>
                  <li onClick={() => changeLanguage("uz")}>
                    <a className="dropdown-item">O'zbekcha</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {isMobile ? <DrawerComponent /> : <></>}
        </Toolbar>
      </AppBar>

      <Dialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        className="login-dialog-glav"
      >
        <LoginDialog />
      </Dialog>
      <Dialog
        open={regOpen}
        onClose={() => setRegOpen(false)}
        className="reg-dialog-glav"
      >
        <RegDialog />
      </Dialog>
      <Dialog
        open={loginConfirmOpen}
        onClose={() => setLoginConfirmOpen(false)}
        className="login-confirm-dialog-glav"
      >
        <LoginConfirmDialog />
      </Dialog>
      <Dialog
        open={regConOpen}
        onClose={() => setRegConOpen(false)}
        className="reg-confirm-dialog-glav"
      >
        <RegConfirmDialog />
      </Dialog>
    </div>
  );
}

export default Navbar;
