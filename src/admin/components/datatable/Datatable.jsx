import "./datatable.scss";
import React from "react";

import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";

import { ApiFuncsContext } from "../../../anyFunc/apiFuncs";
import { ApiReqContext } from "../../../anyFunc/apiReq";

const Datatable = () => {
  const { burgers, categories } = React.useContext(ApiFuncsContext);
  const {
    deleteProduct,
    prodOpen,
    productClose,
    productOpen,
    ednameuz,
    ednameen,
    ednameru,
    eddefinitionuz,
    eddefinitionen,
    eddefinitionru,
    edprice,
    edcategory,
    setednameuz,
    setednameen,
    setednameru,
    seteddefinitionuz,
    seteddefinitionen,
    seteddefinitionru,
    setedimage,
    setedprice,
    setedcategory,
    editProduct,
    productModalData,
  } = React.useContext(ApiReqContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "755px",
    height: "auto",
    bgcolor: "background.paper",
    border: "0",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  return (
    <>
      <div className="mt-4">
        <div
          className="d-flex justify-content-between"
          style={{ width: "95%" }}
        >
          <div></div>
          <Link to="/products/new">
            <button className="btn btn-primary">Добавить продукт</button>
          </Link>
        </div>
        <div className="table-parent">
          <table
            class="taible table mx-auto mt-3 bg-white"
            style={{
              width: "95%",
              borderRadius: "8px",
            }}
          >
            <thead>
              <tr className="trs">
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: "0" }}>
              {burgers.map((burger) => {
                return (
                  <tr key={burger.id} className="tr">
                    <td className="align-middle">
                      <img
                        src={burger.image}
                        alt=""
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td className="align-middle">{burger.name_ru}</td>
                    <td className="align-middle">{burger.price} UZS</td>
                    <td className="align-middle">{burger.category?.name_ru}</td>
                    <td className="align-middle">
                      <button
                        className="edit-btn btn"
                        style={{ marginRight: "20px" }}
                        onClick={() => productOpen(burger)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>
                      <button
                        className="delete-btn btn"
                        onClick={() => {
                          if (window.confirm("Вы уверены?"))
                            deleteProduct(burger.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={prodOpen} onClose={productClose}>
        <Box sx={style}>
          <div className="products-edit-form">
            <input
              className="form-control shadow-none"
              type="text"
              value={ednameuz}
              onChange={(e) => setednameuz(e.target.value)}
              placeholder="Name Uz"
            />
            <input
              className="form-control shadow-none"
              type="text"
              value={ednameen}
              onChange={(e) => setednameen(e.target.value)}
              placeholder="Name En"
            />
            <input
              className="form-control shadow-none"
              type="text"
              value={ednameru}
              onChange={(e) => setednameru(e.target.value)}
              placeholder="Name Ru"
            />
            <input
              className="form-control shadow-none"
              type="text"
              value={eddefinitionuz}
              onChange={(e) => seteddefinitionuz(e.target.value)}
              placeholder="Definition Uz"
            />
            <input
              className="form-control shadow-none"
              type="text"
              value={eddefinitionen}
              onChange={(e) => seteddefinitionen(e.target.value)}
              placeholder="Definition En"
            />
            <input
              className="form-control shadow-none"
              type="text"
              value={eddefinitionru}
              onChange={(e) => seteddefinitionru(e.target.value)}
              placeholder="Definition Ru"
            />
            <input
              className="form-control shadow-none"
              type="file"
              onChange={(e) => setedimage(e.target.files[0])}
            />
            <input
              className="form-control shadow-none"
              type="text"
              value={edprice ? edprice : "Price"}
              onChange={(e) => setedprice(e.target.value)}
            />
            <select
              value={edcategory}
              onChange={(e) => setedcategory(e.target.value)}
              className="form-control shadow-none"
              placeholder="Выберите категорию"
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
            <button
              className="btn btn-primary"
              onClick={() => editProduct(productModalData?.id)}
            >
              Изменить продукт
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Datatable;
