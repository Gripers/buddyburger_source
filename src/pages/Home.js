import NProgress from "nprogress";
import React from "react";
import Burgers from "../components/Burgers";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
