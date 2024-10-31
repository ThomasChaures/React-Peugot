import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3333/api/usuarios", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password, passwordConfirm: passwordVerify }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.token);

    if(response.status === 201){
      Navigate('/login')
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordVerify = (event) => {
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

        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={handleChangePasswordVerify}
        />
        <button type="submit">Register</button>
      </form>

      <Link to="/login">Login</Link>
    </>
  );
};

export default Register;
