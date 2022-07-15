import React from "react";
import { ApiFuncsContext } from "../../../anyFunc/apiFuncs";
import { ApiReqContext } from "../../../anyFunc/apiReq";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addproduct.scss";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    nameuz,
    nameen,
    nameru,
    definitionuz,
    definitionen,
    definitionru,
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
            placeholder="Name Uz"
            value={nameuz}
            onChange={(e) => setnameuz(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Name En"
            value={nameen}
            onChange={(e) => setnameen(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Name Ru"
            value={nameru}
            onChange={(e) => setnameru(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Definition Uz"
            value={definitionuz}
            onChange={(e) => setdefinitionuz(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Definition En"
            value={definitionen}
            onChange={(e) => setdefinitionen(e.target.value)}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Definition Ru"
            value={definitionru}
            onChange={(e) => setdefinitionru(e.target.value)}
          />
          <input
            type="file"
            className="form-control shadow-none"
            placeholder="Image"
            onChange={(e) => setimage(e.target.files[0])}
          />
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            className="form-control shadow-none"
          >
            <option value="">Select category</option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name_ru}
                </option>
              );
            })}
          </select>
          <button className="btn btn-primary" onClick={addProduct}>
            Add New Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
