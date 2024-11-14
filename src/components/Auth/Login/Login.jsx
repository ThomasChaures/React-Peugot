import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../../contexts/session.context.jsx";
import { login } from "../../../service/auth.service.js";

const Login = () => {
  const navigate = useNavigate();
  const onLogin = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email: email, password: password })
      .then((usuario) => {
        onLogin(usuario.token, usuario._id);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form className="mt-20" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChangePassword}
        />
        <button type="submit">Login</button>
      </form>

      <Link to="/register">Register</Link>
    </>
  );
};

export default Login;
