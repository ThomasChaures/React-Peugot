import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../../contexts/session.context.jsx";
import { register } from "../../../service/auth.service.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();
  const onLogin = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    register({
      email: email,
      password: password,
      passwordConfirm: passwordVerify,
    })
      .then((data) => {
        if (response.status === 201) {
          onLogin(data.usuario.token, data.usuario._id);
          navigate("/");
        } else {
          setError("No se pudo registrar al usuario.");
        }
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

  const handleChangePasswordVerify = (event) => {
    setPasswordVerify(event.target.value);
  };

  const checkPassword = () => {
    return password !== passwordVerify
      ? "form-control is-invalid"
      : "form-control";
  };

  const checkEmail = () => {
    return email === "" ? "form-control is-invalid" : "form-control";
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow-lg rounded"
        style={{ width: "350px", backgroundColor: "#f9f9f9" }}
      >
        <h3 className="text-center mb-4 text-primary">Registrar Usuario</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className={checkEmail()}
            id="email"
            placeholder="Ingresa tu correo"
            onChange={handleChangeEmail}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className={checkPassword()}
            id="password"
            placeholder="Ingresa tu contraseña"
            onChange={handleChangePassword}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Repetir contraseña
          </label>
          <input
            type="password"
            className={checkPassword()}
            id="passwordVerify"
            placeholder="Ingresa tu contraseña nuevamente"
            onChange={handleChangePasswordVerify}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrar!
        </button>
        <div className="text-center mt-3">
          <Link to="/login" className="text-decoration-none text-secondary">
            Ya tenes usuario?
          </Link>
        </div>

        {error && (
          <div className="text-center mt-3">
            <p className="text-danger">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
