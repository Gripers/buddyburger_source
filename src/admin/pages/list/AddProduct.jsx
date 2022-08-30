import "./addproduct.scss";
import React from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { ApiFuncsContext } from "../../../anyFunc/apiFuncs";
import { ApiReqContext } from "../../../anyFunc/apiReq";

const AddProduct = () => {
  const {
    nameuz,
    nameen,
    nameru,
    definitionuz,
    definitionen,
    definitionru,
    image,
    price,
    category,
    addProduct,
    setnameuz,
    setnameen,
    setnameru,
    setdefinitionuz,
    setdefinitionen,
    setdefinitionru,
    setimage,
    setprice,
    setcategory,
  } = React.useContext(ApiReqContext);
  const { categories } = React.useContext(ApiFuncsContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    } else if (!localStorage.getItem("admin")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="add-product-forms mt-4">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Name Uz (Обязательно)"
            value={nameuz}
            onChange={(e) => setnameuz(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Name En (По желанию)"
            value={nameen}
            onChange={(e) => setnameen(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Name Ru (Обязательно)"
            value={nameru}
            onChange={(e) => setnameru(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Definition Uz (Обязательно)"
            value={definitionuz}
            onChange={(e) => setdefinitionuz(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Definition En (По желанию)"
            value={definitionen}
            onChange={(e) => setdefinitionen(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Definition Ru (Обязательно)"
            value={definitionru}
            onChange={(e) => setdefinitionru(e.target.value)}
          />
          <input
            type="file"
            className="form-control shadow-none"
            placeholder="Image (Обязательно)"
            onChange={(e) => setimage(e.target.files[0])}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Price (Обязательно)"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            className="form-control shadow-none"
          >
            <option value="">Выберите категорию (Обязательно)</option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name_ru}
                </option>
              );
            })}
          </select>
          <button
            className="btn btn-primary"
            onClick={addProduct}
            disabled={
              !nameuz ||
              !nameru ||
              !definitionuz ||
              !definitionru ||
              !image ||
              !price ||
              !category
            }
          >
            Добавить новый продукт
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
