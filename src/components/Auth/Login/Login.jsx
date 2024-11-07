import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SessionContext } from "../../../contexts/SessionContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3333/api/usuarios/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    onLogin(data.token);
    navigate("/");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
