import React from "react";

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AdminHome from "./admin/pages/home/Home";
import List from "./admin/pages/list/List";
import AddProduct from "./admin/pages/list/AddProduct";
import Categories from "./admin/pages/categories/Categories";
import AddCategory from "./admin/pages/categories/AddCategory";
import Filials from "./pages/Filials";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/Home";
import MobileShoppingCart from "./components/mobile_shopping_cart/MobileShoppingCart";
import Order from "./pages/order/Order";
import FilialInner from "./components/filial-components/filial_inner/FilialInner";
import PageNotFound from "./404/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filials" element={<Filials />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/products" element={<List />} />
        <Route path="/products/new" element={<AddProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/new" element={<AddCategory />} />
        <Route path="/order" element={<Order />} />
        <Route path="/filials/:id" element={<FilialInner />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <MobileShoppingCart />

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            zIndex: "9999999",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
