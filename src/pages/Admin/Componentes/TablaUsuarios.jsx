import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../service/auth.service'

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getUsers()
      .then(data => setUsuarios(data))
      .catch(error => console.error("Error al obtener los usuarios:", error));
  }, [])

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 pt-40 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Usuarios</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Descargar reporte
          </button>
        </div>
        <div className="p-6">
          <input
            type="text"
            placeholder="Buscar por nombre o correo..."
            className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  {['ID', 'Full name', 'Role', 'Email', 'Actions'].map((header) => (
                    <th key={header} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsuarios.map(usuario => (
                  <tr key={usuario._id} className="hover:bg-gray-50 transition duration-300 ease-in-out">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{usuario._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{usuario.name} {usuario.surname}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.email}</td>
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

export default TablaUsuarios
