import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserData } from "../../service/auth.service";
import {useLogOut} from '../../contexts/session.context.jsx'

const ProtectedRoutesAdmin = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [userLogged, setUserLogged] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && token) {
      getUserData(id)
        .then((data) => {
          setUserLogged(data);
        })
        .catch(() => {
          setUserLogged(null);
        })
        .finally(() => setLoading(false)); 
    } else {
      setLoading(false);
    }
  }, [id, token]);

  if (loading) return null; 

  if (!token || !userLogged || userLogged.role !== "User") {
    const onLogout = useLogOut()
    onLogout()
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoutesAdmin;
