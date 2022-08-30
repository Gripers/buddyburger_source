import "./aboutus.scss";
import React from "react";

import { useTranslation } from "react-i18next";
import NProgress from "nprogress";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import about_pic from "../../img/about.png";

const About = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="aboutus-container my-5">
        <div
          className="aboutus-card"
          style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
        >
          <div className="aboutus-card-head">
            <img src={about_pic} alt="" />
          </div>
          <div className="aboutus-card-body mt-4">
            <h3>{t("aboutus.company")}</h3>
            <p>
              {t("aboutus.title.0")}{" "}
              <a href="https://t.me/buddyburgeruzbot" target={"_blank"}>
                {t("aboutus.title.1")}
              </a>{" "}
              <p>{t("aboutus.title.2")}</p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
