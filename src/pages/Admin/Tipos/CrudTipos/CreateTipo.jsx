import React, { useState } from "react";
import { addTipo } from "../../../../service/tipos.service.js";
import { useNavigate } from "react-router-dom";
import Error from "../../../../components/Error/Error.jsx";
import Loader from "../../../../components/Loader/Loader.jsx";

const CreateMarca = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tipo: "",
  });
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `You must provide a valid type.`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return error === "";
  };

  const validateForm = () => {
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      const valid = validateField(key, value);
      if (!valid) isValid = false;
    });

    return isValid;
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
    if (validateForm()) {
      setLoader(true);
      try {
        const response = await addTipo(formData);
        console.log("200:", response);
        setLoader(false);
        navigate('/admin/types');
      } catch (error) {
        console.error("Error:", error);
        setLoader(false);
      }
    }
  };

  return (
    <section className="mt-[45px] container max-[870px]:px-10 max-[1270px]:px-10 px-20 max-w-[1360px] max-[1270px]:max-w-[1000px] mx-auto">
      <div>
        <h2 className="text-3xl font-medium text-white">Create Type</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex mt-5 flex-col max-w-[300px] gap-y-4">
            <label htmlFor="tipo" className="text-white">
              Type
            </label>
            <input
              type="text"
              name="tipo"
              id="tipo"
              value={formData.tipo}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded"
            />
            {errors.tipo && (
              <div className="mt-2">
                <Error>{errors.tipo}</Error>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>

      {loader && <Loader />}
    </section>
  );
};

export default CreateMarca;
