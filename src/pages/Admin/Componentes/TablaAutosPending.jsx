import React, { useEffect, useState } from 'react'
import { getAutosAll } from '../../../service/autos.service'
import { Link } from 'react-router-dom'

const TablaAutosPending = () => {
  const [autos, setAutos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getAutosAll()
      .then(data => {
        const autos_forSale = data.filter((auto) => auto.status === "pending");
        setAutos(autos_forSale);
      })
      .catch(error => console.error("Error al obtener los autos:", error));
  }, [])

  const filteredAutos = autos.filter(auto =>
    auto.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auto.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 pt-20  min-h-screen text-gray-300">
      <div className="max-w-10xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-white">Pending Vehicles</h1>
         <div className='flex gap-x-2'>
          <Link to='/admin/vehicles/' className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition duration-300">
            Back to list
          </Link>
         </div>
        </div>
        <div className="p-5">
          <input
            type="text"
            placeholder="Search by model or brand..."
            className="w-full p-3 mb-6 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-700">
                <tr>
                  {['ID', 'Model', 'Brand', 'Image', 'Price', 'Status', 'Vendedor', 'Actions'].map((header) => (
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
                {filteredAutos.map(auto => (
                  <tr key={auto._id} className="hover:bg-gray-700 transition duration-300">
                    <td className="px-6 py-4 text-sm text-gray-300">{auto._id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">{auto.model}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{auto.brand}</td>
                    <td className="px-6 py-4">
                      <img
                        src={`http://localhost:3333/uploads/${auto.img1}`}
                        alt={auto.model}
                        className="w-12 h-12 rounded-full object-cover border border-gray-700"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">${auto.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{auto.status}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {!auto.vendedor ?  auto.vendedor.email : "Official Car" }
                    </td>
                    <td className="px-6 py-4 flex flex-col gap-y-2 text-black text-sm ">
                      <Link to={`/admin/vehicles/pending/check/${auto._id}`} className="bg-indigo-500 hover:bg-indigo-300 py-1 rounded px-1 transition duration-300">Check</Link>
                      <button className="bg-red-600 hover:bg-red-300 py-1 rounded px-1 transition duration-300">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TablaAutosPending
