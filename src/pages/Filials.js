import "../components/filial-components/filial/filial.scss";
import React from "react";

import NProgress from "nprogress";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Filial from "../components/filial-components/filial/Filial";

const Filials = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex min-vh-100 flex-column justify-content-between">
        <div
          className="filials-container my-5"
          style={{ display: "grid", rowGap: "30px", width: "95%" }}
        >
          <Filial />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Filials;
