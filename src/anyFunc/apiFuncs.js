import React from "react";
import axios from "axios";
import { url } from "../utilities";

const ApiFuncsContext = React.createContext();

const ApiFuncsContextProvider = ({ children }) => {
  const [categories, setCategories] = React.useState([]);
  const [burgers, setBurgers] = React.useState([]);
  const [filials, setFilials] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${url}/categories/`).then((res) => setCategories(res.data));
  }, []);

  React.useEffect(() => {
    axios.get(`${url}/burgers/`).then((res) => setBurgers(res.data));
  }, []);

  React.useEffect(() => {
    axios.get(`${url}/filial/`).then((res) => setFilials(res.data));
  }, []);

  if (!categories) {
    return "";
  }

  if (!burgers) {
    return "";
  }

  if (!filials) {
    return "";
  }

  return (
    <div>
      <ApiFuncsContext.Provider
        value={{
          categories,
          burgers,
          filials,
        }}
      >
        {children}
      </ApiFuncsContext.Provider>
    </div>
  );
};

export { ApiFuncsContext, ApiFuncsContextProvider };
