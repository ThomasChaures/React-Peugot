import React, { useEffect, useState } from "react";
import { getMarcas } from "../../../service/marcas.service";
import { Link } from "react-router-dom";


const TablaMarcas = () => {
  const [marcas, setMarcas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMarcas()
      .then((data) => setMarcas(data))
      .catch((error) => console.error("Error al obtener las marcas:", error));
  }, []);

  const filteredMarcas = marcas.filter((marca) =>
    marca?.marca?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 pt-20 min-h-screen text-gray-300">
      <div className="max-w-10xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-white">Brands</h1>
          <Link to='/admin/brands/create' className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition duration-300">
            Add New Brand
          </Link>
        </div>
        <div className="p-5">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full p-3 mb-6 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-700">
                <tr>
                  {["ID", "Marca", "Actions"].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-sm font-medium text-gray-400 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredMarcas.map((marca) => (
                  <tr
                    key={marca._id}
                    className="hover:bg-gray-700 transition duration-300"
                  >
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {marca._id}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">
                      {marca.marca}
                    </td>
                    <td className="px-6 py-4 flex gap-2 text-black text-sm">
                      <button className="bg-indigo-500  flex items-center justify-center text-white hover:bg-indigo-300 py-1 rounded px-3 transition duration-300">
                        Show
                      </button>
                      <button className="bg-green-500 flex items-center justify-center text-white hover:bg-green-300 py-1 rounded px-3 transition duration-300">
                        Edit
                      </button>
                      <button className="bg-red-600  flex items-center justify-center text-white hover:bg-red-300 py-1 rounded px-3 transition duration-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaMarcas;
