import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createContext } from "react";

const SessionContext = createContext();

const useSession = () => {
  return useContext(SessionContext);
};

const useLogOut = () => {
  const { onLogout } = useSession();
  return onLogout;
};

const useLogin = () => {
  const { onLogin } = useSession();
  return onLogin;
};

const useToken = () => {
  const { token } = useSession();
  return token;
};

const SessionProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate(); 

  const onLogout = () => {
    localStorage.clear();
    setToken(null);
    navigate("/login"); 
  };

  const onLogin = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  useEffect(() => {
    if (token) {
      fetch("http://localhost:3333/api/usuario", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
        .then((response) => response.json()) 
        .then((data) => {
          if (data.message) {
            onLogout();
          } else{
            onLogin(token)
        }
        });
    }
  }, []);

  return (
    <SessionContext.Provider value={{ token, onLogin, onLogout }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider, useLogOut, useLogin, useToken };
