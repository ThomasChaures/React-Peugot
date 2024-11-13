import React from "react";
import { useNavigate } from "react-router-dom";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Error404</h1>
      <p>Esta pagina no existe</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Error404Page;
