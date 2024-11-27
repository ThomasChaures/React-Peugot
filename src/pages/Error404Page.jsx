import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-40 flex flex-col items-center justify-center">
      <h1 className="text-[400px] text-slate-950">404</h1>
      <p className="font-bold text-xl">Sorry, we couldn't find that page.</p>
      <Link className="bg-blue-500 border border-blue-600 text-white text-md poppins-regular cursor-pointer flex items-center justify-center hover:!text-blue-600 hover:bg-blue-200/40 transition-all rounded  h-10 w-[300px] mt-4" to="/">Back to home</Link>
    </section>
  );
};

export default Error404Page;
