import React from "react";
import NProgress from "nprogress";
import { useNavigate } from "react-router-dom";

const DopFuncsContext = React.createContext();

const DopFuncsContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [drop, setDrop] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [regOpen, setRegOpen] = React.useState(false);
  const [loginConfirmOpen, setLoginConfirmOpen] = React.useState(false);
  const [regConOpen, setRegConOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const target = document.getElementById("dropdi");
      if (window.scrollY >= target.offsetTop) {
        setDrop(true);
      } else {
        setDrop(false);
      }
    });
  }, []);

  const homeClick = () => {
    NProgress.start();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const filialsClick = () => {
    NProgress.start();
    setTimeout(() => {
      navigate("/filials");
    }, 1000);
  };
  const aboutusClick = () => {
    NProgress.start();
    setTimeout(() => {
      navigate("/aboutus");
    }, 500);
  };
  const contactsClick = () => {
    NProgress.start();
    setTimeout(() => {
      navigate("/contacts");
    }, 500);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };
  const loginSwitcher = () => {
    setLoginOpen(false);
    setLoginConfirmOpen(false);
    setRegOpen(true);
    setRegConOpen(false);
  };
  const regSwitcher = () => {
    setLoginOpen(true);
    setLoginConfirmOpen(false);
    setRegOpen(false);
    setRegConOpen(false);
  };
  const logconSwitcher = () => {
    setLoginOpen(false);
    setLoginConfirmOpen(true);
    setRegOpen(false);
    setRegConOpen(false);
  };
  const regconSwitcher = () => {
    setLoginOpen(false);
    setLoginConfirmOpen(false);
    setRegOpen(false);
    setRegConOpen(true);
  };

  return (
    <div>
      <DopFuncsContext.Provider
        value={{
          drop,
          homeClick,
          filialsClick,
          aboutusClick,
          contactsClick,
          loginOpen,
          handleLoginOpen,
          setLoginOpen,
          loginSwitcher,
          regOpen,
          setRegOpen,
          regSwitcher,
          loginConfirmOpen,
          setLoginConfirmOpen,
          logconSwitcher,
          regconSwitcher,
          regConOpen,
          setRegConOpen,
          loading,
          setLoading,
        }}
      >
        {children}
      </DopFuncsContext.Provider>
    </div>
  );
};

export { DopFuncsContext, DopFuncsContextProvider };
