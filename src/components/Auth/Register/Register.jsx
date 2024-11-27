import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../../contexts/session.context.jsx";
import { register } from "../../../service/auth.service.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordVerify] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const onLogin = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = {};

    if (!name) fieldErrors.name = "Name is required.";
    if (!surname) fieldErrors.surname = "Surname is required.";
    if (!email.includes("@")) fieldErrors.email = "Enter a valid email.";
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      fieldErrors.password = "Password must be at least 8 characters and contain at least one uppercase letter.";
    }
    if (password !== passwordConfirm) {
      fieldErrors.passwordVerify = "Passwords do not match.";
    }
    
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    

    try {
      const data = await register({
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        name: name,
        surname: surname,
      });
      console.log(data)

      if (data) {
        onLogin(data.usuario.token, data.usuario._id);
        navigate('/')

      } else {
        setErrors({ form: "Unable to register the user." });
      }
    } catch (error) {
      setErrors({ form: "An unexpected error occurred." });
      console.log(error);
    }
  };

  return (
    <section className="h-screen bg-slate-950 flex items-center">
      <div className="w-[30%] max-lg:w-[50%]  container p-8 rounded-lg shadow-md max-w-[600px]">
        <p className="mb-10 text-3xl text-white">MOTORHUB</p>
        <h2 className="text-2xl font-semibold mb-6 text-white">Register</h2>
        <form onSubmit={handleSubmit} className="gap-y-5 flex flex-col">
          <div className="flex flex-col gap-x-10">
            <div className="flex gap-x-4 justify-between w-full">
              <div className="mb-4 w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`mt-1 block w-full text-white px-2 py-3 border-b ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } bg-transparent shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="surname"
                  className="block text-sm font-medium text-white"
                >
                  Surname
                </label>
                <input
                  type="text"
                  className={`mt-1 block w-full text-white px-2 py-3 border-b ${
                    errors.surname ? "border-red-500" : "border-gray-300"
                  } bg-transparent shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  id="surname"
                  placeholder="Enter your surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                {errors.surname && (
                  <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                className={`mt-1 block w-full text-white px-2 py-3 border-b ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } bg-transparent shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="flex gap-x-4 justify-between w-full">
              <div className="mb-4 w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  className={`mt-1 block w-full text-white px-2 py-3 border-b ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } bg-transparent shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="passwordVerify"
                  className="block text-sm font-medium text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`mt-1 block w-full text-white px-2 py-3 border-b ${
                    errors.passwordVerify ? "border-red-500" : "border-gray-300"
                  } bg-transparent shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  id="passwordVerify"
                  placeholder="Confirm your password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordVerify(e.target.value)}
                />
                {errors.passwordVerify && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.passwordVerify}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            Register
          </button>
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Already have an account?
            </Link>
          </div>
          {errors.form && (
            <div className="mt-4 text-center">
              <p className="text-red-500 text-sm">{errors.form}</p>
            </div>
          )}
        </form>
      </div>
      <div className="w-[50%] max-lg:hidden h-full">
        <img src="./bgauth.jpeg" className="object-cover h-full" alt="" />
      </div>
    </section>
  );
};

export default Register;
