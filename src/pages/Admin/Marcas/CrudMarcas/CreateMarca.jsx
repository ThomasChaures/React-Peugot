import React, { useState } from "react";
import ImgInputForm from "../../../SellCar/Components/ImgInputForm.jsx";
import { postUploads } from "../../../../service/uploads.service.js";
import { addMarca } from "../../../../service/marcas.service.js";

const CreateMarca = () => {
  const [files, setFiles] = useState({});
  const [formData, setFormData] = useState({
    img1: "",
    marca: "",
  });

  const handleFileChange = (id, file) => {
    setFiles((prevFiles) => ({ ...prevFiles, [`img${id}`]: file }));
    setFormData((prev) => ({
      ...prev,
      [`img${id}`]: file.name,
    }));
  };

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
      if (formData.img1) {
        const formFile = new FormData();
        console.log(files.img1);
        const img = files.img1;
        formFile.append("file", img);
        postUploads(formFile).then((data) => {
          setFormData((prev) => ({
            ...prev,
            img1: data.file,
          }));
        });
      }
      console.log(formData);
   
      const response = await addMarca(formData).then((data) =>
        console.log(data)
      );
      console.log("Marca creada:", response);
    } catch (error) {
      console.error("Error al crear la marca:", error);
    }
  };

  return (
    <section className="mt-[45px] container max-[870px]:px-10 max-[1270px]:px-10 px-20 max-w-[1360px] max-[1270px]:max-w-[1000px] mx-auto">
      <div>
        <h2 className="text-3xl font-medium text-white">Create Brand</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <ImgInputForm id="1" onFileChange={handleFileChange} dark={true} />
          </div>

          <div>
            <label htmlFor="marca" className="text-white">
              Brand
            </label>
            <input
              type="text"
              name="marca" 
              id="marca"
              value={formData.marca} // Vinculado correctamente al estado
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
