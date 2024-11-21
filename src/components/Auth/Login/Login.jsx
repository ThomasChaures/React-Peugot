import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../../contexts/session.context.jsx";
import { login } from "../../../service/auth.service.js";


const Login = () => {
  const navigate = useNavigate();
  const onLogin = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password })
      .then((user) => {
        onLogin(user.token, user._id);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response?.data?.message || "Incorrect credentials");
      });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  return (
    <section className="h-screen  bg-slate-950 flex items-center ">
      <div className="w-[30%] container p-8 rounded-lg shadow-md max-w-[600px]">
        <p className="mb-10 text-3xl text-white">MOTORHUB</p>
        <h2 className="text-2xl font-semibold mb-6 text-white">Login</h2>
        {error && (
          <div className="mb-4 text-red-500 text-sm" role="alert" aria-live="assertive">
            {error}
          </div>
        )}
        <form className="gap-y-5 flex flex-col" onSubmit={handleSubmit}>
          <div className="pb-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              className="mt-1 block w-full px-2 py-3 text-white border-b border-gray-300 bg-transparent shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="pb-2">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              className="mt-1 block w-full text-white px-2 py-3 border-b border-gray-300 bg-transparent shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
      <div className="w-[50%] h-full">
        <img src="./bgauth.jpeg" className="object-cover h-full" alt="" />
      </div>
    </section>
  );
};


export default Login;
