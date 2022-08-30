import "./categories.scss";
import React from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { ApiReqContext } from "../../../anyFunc/apiReq";

const AddCategory = () => {
  const {
    catnameuz,
    catnameen,
    catnameru,
    setcatnameuz,
    setcatnameen,
    setcatnameru,
    addCategory,
  } = React.useContext(ApiReqContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    } else if (!localStorage.getItem("admin")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="categories-home">
      <Sidebar />
      <div className="categories-homeContainer">
        <Navbar />
        <div className="add-category-form mt-4">
          <input
            className="form-control shadow-none"
            type="text"
            value={catnameuz}
            onChange={(e) => setcatnameuz(e.target.value)}
            placeholder="Name Uz (Обязательно)"
          />
          <input
            className="form-control shadow-none"
            type="text"
            value={catnameen}
            onChange={(e) => setcatnameen(e.target.value)}
            placeholder="Name En (По желанию)"
          />
          <input
            className="form-control shadow-none"
            type="text"
            value={catnameru}
            onChange={(e) => setcatnameru(e.target.value)}
            placeholder="Name Ru (Обязательно)"
          />
          <button
            className="btn btn-primary"
            onClick={addCategory}
            disabled={!catnameuz || !catnameru}
          >
            Добавить новую категорию
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
