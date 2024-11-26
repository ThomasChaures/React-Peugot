import React, { useState } from "react";

import { addTipo } from "../../../../service/tipos.service.js";

const CreateMarca = () => {
  const [formData, setFormData] = useState({
    tipo: "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
   
      const response = await addTipo(formData).then((data) =>
        console.log(data)
      );
      console.log("200:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="mt-[45px] container max-[870px]:px-10 max-[1270px]:px-10 px-20 max-w-[1360px] max-[1270px]:max-w-[1000px] mx-auto">
      <div>
        <h2 className="text-3xl font-medium text-white">Create Type</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="tipo" className="text-white">
              Brand
            </label>
            <input
              type="text"
              name="tipo" 
              id="tipo"
              value={formData.tipo} 
              onChange={handleInputChange}
              className="border px-2 py-1 rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateMarca;
