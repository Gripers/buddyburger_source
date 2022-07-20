import React from "react";
import axios from "axios";
import { DopFuncsContext } from "./dopFuncs";
import { url } from "../Utilities";

const ApiReqContext = React.createContext();

const ApiReqContextProvider = ({ children }) => {
  const {
    logconSwitcher,
    setLoginConfirmOpen,
    regconSwitcher,
    setRegConOpen,
    setLoading,
  } = React.useContext(DopFuncsContext);
  const [phone, setPhone] = React.useState("");
  const [logconsms, setLogConSms] = React.useState("");
  const [regname, setRegName] = React.useState("");
  const [regphone, setRegPhone] = React.useState("");
  const [regsms, setRegSms] = React.useState("");

  const [nameuz, setnameuz] = React.useState("");
  const [nameen, setnameen] = React.useState("");
  const [nameru, setnameru] = React.useState("");
  const [definitionuz, setdefinitionuz] = React.useState("");
  const [definitionen, setdefinitionen] = React.useState("");
  const [definitionru, setdefinitionru] = React.useState("");
  const [image, setimage] = React.useState(null);
  const [price, setprice] = React.useState("");
  const [category, setcategory] = React.useState("");

  const [ednameuz, setednameuz] = React.useState("");
  const [ednameen, setednameen] = React.useState("");
  const [ednameru, setednameru] = React.useState("");
  const [eddefinitionuz, seteddefinitionuz] = React.useState("");
  const [eddefinitionen, seteddefinitionen] = React.useState("");
  const [eddefinitionru, seteddefinitionru] = React.useState("");
  const [edimage, setedimage] = React.useState(null);
  const [edprice, setedprice] = React.useState("");
  const [edcategory, setedcategory] = React.useState("");

  const [catnameuz, setcatnameuz] = React.useState("");
  const [catnameen, setcatnameen] = React.useState("");
  const [catnameru, setcatnameru] = React.useState("");

  const [edcatnameuz, setedcatnameuz] = React.useState("");
  const [edcatnameen, setedcatnameen] = React.useState("");
  const [edcatnameru, setedcatnameru] = React.useState("");

  const [prodOpen, setProdOpen] = React.useState(false);
  const [productModalData, setProductModalData] = React.useState();
  const productOpen = (data) => {
    setProdOpen(true);
    setProductModalData(data);
    setednameuz(data?.name_uz);
    setednameen(data?.name_en);
    setednameru(data?.name_ru);
    seteddefinitionuz(data?.definition_uz);
    seteddefinitionen(data?.definition_en);
    seteddefinitionru(data?.definition_ru);
    setedimage(data?.image);
    setedprice(data?.price);
    setedcategory(data?.category.id);
  };
  const productClose = () => setProdOpen(false);
  const [catOpen, setCatOpen] = React.useState(false);
  const [catModalData, setCatModalData] = React.useState();
  const categoryOpen = (data) => {
    setCatOpen(true);
    setCatModalData(data);
    setedcatnameuz(data?.name_uz);
    setedcatnameen(data?.name_en);
    setedcatnameru(data?.name_ru);
  };
  const categoryClose = () => setCatOpen(false);

  const qs = require("qs");

  const handleLoginRequest = () => {
    axios
      .post(`${url}/send/`, {
        phone_number: phone,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status == 200) {
          logconSwitcher();
          setLoading(false);
        }
      });
  };
  const handleLoginConfirmRequest = () => {
    axios
      .post(`${url}/login/`, {
        sms: logconsms,
        phone_number: phone,
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("phone_number", res.data.phone);
        localStorage.setItem("username", res.data.user_name);
        if ((res.data.status == 200) & (res.data.is_admin == false)) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setLoginConfirmOpen(false);
          setLoading(false);
        } else if (res.data.is_admin == true) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          localStorage.setItem("token", res.data.token);
          setLoginConfirmOpen(false);
        }
      });
  };
  const handleRegisterRequest = () => {
    axios
      .post(`${url}/register/`, {
        full_name: regname,
        phone_number: regphone,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status == 200) {
          regconSwitcher();
          setLoading(false);
        }
      });
  };
  const handleRegisterConfirmRequest = () => {
    axios
      .post(`${url}/login/`, {
        sms: regsms,
        phone_number: regphone,
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("phone_number", res.data.phone);
        localStorage.setItem("username", res.data.user_name);
        if ((res.data.status == 200) & (res.data.is_admin == false)) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setRegConOpen(false);
          setLoading(false);
        } else if (res.data.is_admin == true) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          localStorage.setItem("token", res.data.token);
        }
      });
  };
  const addProduct = () => {
    const formData = new FormData();

    formData.append("name_uz", nameuz);
    formData.append("name_en", nameen);
    formData.append("name_ru", nameru);
    formData.append("definition_uz", definitionuz);
    formData.append("definition_en", definitionen);
    formData.append("definition_ru", definitionru);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("category", category);

    try {
      axios({
        url: `${url}/burgers/`,
        method: "POST",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        data: formData,
      }).then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };
  const deleteProduct = (id) => {
    try {
      axios
        .delete(`https://api.buddyburger.kannas.uz/burgers/${id}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };
  const editProduct = async (id) => {
    const formData = new FormData();

    formData.append("name_uz", ednameuz);
    formData.append("name_en", ednameen);
    formData.append("name_ru", ednameru);
    formData.append("definition_uz", eddefinitionuz);
    formData.append("definition_en", eddefinitionen);
    formData.append("definition_ru", eddefinitionru);
    if (typeof edimage != "string") {
      formData.append("image", edimage);
    }
    formData.append("price", edprice);
    formData.append("category", edcategory);

    try {
      const res = await axios({
        url: `${url}/burgers/${id}/`,
        method: "PUT",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        data: formData,
      }).then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };
  const addCategory = () => {
    const formData = new FormData();

    formData.append("name_uz", catnameuz);
    formData.append("name_en", catnameen);
    formData.append("name_ru", catnameru);

    try {
      axios({
        url: `${url}/categories/`,
        method: "POST",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        data: formData,
      }).then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };
  const deleteCategory = (id) => {
    try {
      axios
        .delete(`${url}/categories/${id}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        })
        .then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };
  const editCategory = async (id) => {
    const formData = new FormData();

    formData.append("name_uz", edcatnameuz);
    formData.append("name_en", edcatnameen);
    formData.append("name_ru", edcatnameru);

    try {
      const res = await axios({
        url: `${url}/categories/${id}/`,
        method: "PUT",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        data: formData,
      }).then(() => window.location.reload());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <ApiReqContext.Provider
        value={{
          handleLoginRequest,
          phone,
          setPhone,
          logconsms,
          setLogConSms,
          handleLoginConfirmRequest,
          handleRegisterRequest,
          regname,
          setRegName,
          regphone,
          setRegPhone,
          handleRegisterConfirmRequest,
          regsms,
          setRegSms,
          addProduct,
          nameuz,
          nameen,
          nameru,
          definitionuz,
          definitionen,
          definitionru,
          image,
          price,
          category,
          setnameuz,
          setnameen,
          setnameru,
          setdefinitionuz,
          setdefinitionen,
          setdefinitionru,
          setimage,
          setprice,
          setcategory,
          deleteProduct,
          editProduct,
          ednameuz,
          ednameen,
          ednameru,
          eddefinitionuz,
          eddefinitionen,
          eddefinitionru,
          edimage,
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
          prodOpen,
          productClose,
          productModalData,
          productOpen,
          edcatnameuz,
          edcatnameen,
          edcatnameru,
          setedcatnameuz,
          setedcatnameen,
          setedcatnameru,
          editCategory,
          deleteCategory,
          catOpen,
          categoryOpen,
          categoryClose,
          catModalData,
          catnameuz,
          catnameen,
          catnameru,
          setcatnameuz,
          setcatnameen,
          setcatnameru,
          addCategory,
        }}
      >
        {children}
      </ApiReqContext.Provider>
    </div>
  );
};

export { ApiReqContext, ApiReqContextProvider };
