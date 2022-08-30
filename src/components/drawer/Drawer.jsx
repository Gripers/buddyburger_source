import "./drawer.scss";
import React from "react";

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import i18n from "i18next";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../img/logo.png";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className="drawer-opener"
        transitionDuration={1000}
        style={{ zIndex: "9999999" }}
      >
        <div className="drawer-header">
          <img src={logo} alt="" className="logo" />
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            onClick={() => setOpenDrawer(false)}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
        <List
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className="drawer-nav-link">
                {t("navigation.home")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/filials" className="drawer-nav-link">
                {t("navigation.filials")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/aboutus" className="drawer-nav-link">
                {t("navigation.aboutus")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contacts" className="drawer-nav-link">
                {t("navigation.contacts")}
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        <div className="drawer-footer my-3 mx-3">
          <div className="dropdown">
            <button
              className="selector-btn btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ background: "rgba(255, 71, 0)", color: "white" }}
            >
              {t("selector")}
            </button>
            <ul
              className="drop-list dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li
                onClick={() => changeLanguage("ru")}
                style={{ cursor: "pointer" }}
              >
                <a className="dropdown-item">Русский</a>
              </li>
              <li
                onClick={() => changeLanguage("uz")}
                style={{ cursor: "pointer" }}
              >
                <a className="dropdown-item">O'zbekcha</a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className="burger-icon"
        style={{ order: "-1" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
