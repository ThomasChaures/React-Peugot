import React, { useEffect, useState } from "react";
import { getAuto } from "../../../service/autos.service";
import { Link, useNavigate, useParams } from "react-router-dom";



const ShowAuto = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const [auto, setAuto] = useState({});

  useEffect(() => {
    console.log(id);

    getAuto(id).then((data) => {
      setAuto(data);
    });
  }, []);
  return (
    <section className=" px-20 max-w-[600px] mt-[45px]">
      <h2 className="text-3xl text-white mb-4 font-medium">Show Vehicle</h2>
      <div className="text-white flex  w-full justify-between  gap-x-10 py-4">
        <Link to={'/admin/vehicles'}
          className="bg-blue-500 px-2 py-2 text-center rounded w-full block"
        >
          Back to list
        </Link>
   
      </div>
      <p className="text-white text-xl py-4">
        {auto.model} - {auto.year}
      </p>
      <p className="bg-slate-700 text-2xl text-white px-2 py-2 rounded w-full block">
        <span className="font-medium">Price:</span> ${auto.price}
      </p>
      <div className="flex gap-x-8 pt-4 mb-4 ">
        <div className="w-32 h-32 border border-white rounded overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={`http://localhost:3333/uploads/${auto.img1}`}
            alt=""
          />
        </div>

        <div className="w-32 h-32 border border-white rounded overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={`http://localhost:3333/uploads/${auto.img2}`}
            alt=""
          />
        </div>

        <div className="w-32 h-32 border border-white rounded overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={`http://localhost:3333/uploads/${auto.img3}`}
            alt=""
          />
        </div>
      </div>
      <div className="text-white flex w-full justify-between  gap-x-4 py-2">
        <p className="bg-slate-700 px-2 py-2 rounded w-full block">
          <span className="font-medium">Brand</span>: {auto.brand}
        </p>
        <p className="bg-slate-700 px-2 py-2 rounded w-full block">
          <span className="font-medium">Type:</span> {auto.type}
        </p>
      </div>
      <div>
        {auto.vendedor?.email && (
          <div className="text-white bg-slate-700 rounded flex flex-col gap-y-4 px-2 py-4">
            <p className="text-xl">User</p>
            <ul className="flex flex-col gap-y-3">
              <li>
                {auto.vendedor.name} {auto.vendedor.surname}
              </li>
              <li>{auto.vendedor.email}</li>
            </ul>
          </div>
        )}
      </div>
      <div className="text-white flex w-full justify-between  gap-x-4 py-2">
        <p className="bg-slate-700 px-2 py-2 rounded w-full block">
          <span className="font-medium">Year</span>: {auto.year}
        </p>
        <p className="bg-slate-700 px-2 py-2 rounded w-full block">
          <span className="font-medium">Usage:</span> {auto.type}
        </p>
      </div>
      <div className="text-white flex flex-col w-full justify-between  gap-y-4 py-2">
        <p className="bg-slate-700 px-2 py-2 rounded w-full block">
          <span className="font-medium">Engine</span>: {auto.engine}
        </p>
        <p className="bg-slate-700 px-2 py-2 rounded w-full block">
          <span className="font-medium">Horsepower:</span> {auto.horsepower}
        </p>
      </div>
      <div className="text-white flex flex-col w-full justify-between  gap-y-4 py-2">
        <p className="bg-slate-700 px-2 py-2 flex-col flex rounded w-full">
          <span className="font-medium mb-3">Description:</span>{" "}
          <span>{auto.description}</span>
        </p>
      </div>
   
    </section>
  );
};

export default ShowAuto;
