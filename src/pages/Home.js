import React from "react";

import NProgress from "nprogress";

import Burgers from "../components/burgers/Burgers";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="mt-5">
        <Categories />
        <Burgers />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
