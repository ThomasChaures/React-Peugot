import React, { useEffect, useState } from 'react'
import { getAutos } from '../../../service/autos.service'

const TablaAutos = () => {
  const [autos, setAutos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getAutos()
      .then(data => setAutos(data))
      .catch(error => console.error("Error al obtener los autos:", error));
  }, [])

  const filteredAutos = autos.filter(auto =>
    auto.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auto.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 pt-40 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Autos</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Descargar reporte
          </button>
        </div>
        <div className="p-6">
          <input
            type="text"
            placeholder="Buscar por modelo o marca..."
            className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  {['ID', 'Model', 'Brand', 'Image', 'Price', 'Status' , 'Vendedor', 'Actions'].map((header) => (
                    <th key={header} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAutos.map(auto => (
                  <tr key={auto._id} className="hover:bg-gray-50 transition duration-300 ease-in-out">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{auto._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{auto.model}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{auto.brand}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src='/placeholder.svg?height=48&width=48' alt={auto.model} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${auto.price.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{auto.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {!auto.vendedor ? "Official Car" : auto.vendedor.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">Ver</button>
                      <button className="text-green-600 hover:text-green-900 transition duration-300 ease-in-out">Editar</button>
                      <button className="text-red-600 hover:text-red-900 transition duration-300 ease-in-out">Eliminar</button>
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

export default TablaAutos