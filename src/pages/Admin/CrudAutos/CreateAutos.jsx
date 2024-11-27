import { useState, useEffect } from "react";
import React from "react";
import ImgInputForm from "../../SellCar/Components/ImgInputForm.jsx";
import { getTipos } from "../../../service/tipos.service.js";
import { postAuto } from "../../../service/autos.service.js";
import { getMarcas } from "../../../service/marcas.service.js";
import { useNavigate } from "react-router-dom";
import { postUploads } from "../../../service/uploads.service.js";
import Error from "../../../components/Error/Error.jsx";

const CreateAutos = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(localStorage.getItem("id"));
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    img1: "",
    img2: "",
    img3: "",
    brand: "",
    model: "",
    type: "",
    price: 0,
    horsepower: 0,
    engine: "",
    description: "",
    usage: "",
    year: "",
  });

 
  const handleFileChange = (id, file) => {
    setFiles((prevFiles) => ({ ...prevFiles, [`img${id}`]: file }));
    setFormData((prev) => ({
      ...prev,
      [`img${id}`]: file.name,
    }));
  };

  const changeInputForm = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateField = (name, value) => {
    let error = "";

    if ((name === "img1" || name === "img2" || name === "img3") && (value === '')) {
      error = "You must upload 3 images.";
    } else if (!value) {
      error = `You must provide a valid ${name}.`;
    } else if (name === "price" && value <= 0) {
      error = "Price must be greater than 0.";
    } else if (name === "horsepower" && value <= 0) {
      error = "Horsepower must be a positive number.";
    } else if (name === "year" && (value < 1970 || value > 2024)) {
      error = "Year must be between 1970 and 2024.";
    } else if ((name === "price" || name === "horsepower") && value < 0) {
      error = `${name} cannot be negative.`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return error === "";
  };

  // Valida todo el formulario
  const validateForm = () => {
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      const valid = validateField(key, value);
      if (!valid) isValid = false;
    });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid, submitting...");

      // Manejo de imágenes
      ["img1", "img2", "img3"].forEach((imgKey) => {
        if (formData[imgKey]) {
          const formFile = new FormData();
          const img = files[imgKey];
          formFile.append("file", img);
          postUploads(formFile).then((data) => {
            setFormData((prev) => ({
              ...prev,
              [imgKey]: data.file,
            }));
          });
        }
      });

      // Envío del formulario
      postAuto(formData)
        .then((data) => {
          console.log("Auto created:", data);
          navigate("/admin/vehicles");
        })
        .catch((err) => console.log("Error creating auto:", err));
    }
  };

  useEffect(() => {
    console.log(id);
    getTipos().then((data) => setTypes(data));
    getMarcas().then((data) => setBrands(data));
  }, []);
  return (
    <section className="mt-[45px] container max-[870px]:px-10  max-[1270px]:px-10 px-20 max-w-[1360px] max-[1270px]:max-w-[1000px] mx-auto">
      <div>
        <h2 className="text-3xl font-medium text-white">Create Vehicle</h2>
      </div>

      <div className="mt-10 w-full rounded">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[1200px] w-full gap-x-20 xl:gap-x-10 max-[870px]:flex-col xl:flex-nowrap"
        >
          <div className="flex flex-col xl:w-3/5">
            <h3 className="text-lg text-white">Uploads photos</h3>
            <div className="flex flex-col mb-10  w-full ">
              <div className="flex max-[870px]:flex-col w-full  max-[870px]:gap-y-2 gap-x-10 xl:gap-x-5">
                <ImgInputForm
                  id="1"
                  onFileChange={handleFileChange}
                  dark={true}
                />
                <ImgInputForm
                  id="2"
                  onFileChange={handleFileChange}
                  dark={true}
                />
                <ImgInputForm
                  id="3"
                  onFileChange={handleFileChange}
                  dark={true}
                />
              </div>

              {(errors.img1)&& (
                <div className="mt-10">
                  <Error>You must upload 3 images.</Error>
                </div>
              )}
            </div>

            {/* Primer bloque */}
            <div className="flex gap-x-10 items-start max-[870px]:flex-wrap max-[870px]:gap-y-5 justify-between xl:flex-nowrap xl:gap-x-5">
              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="brand">
                  Car Brand
                </label>
                <select
                  className="border border-black rounded py-1"
                  name="brand"
                  id="brand"
                  value={formData.brand}
                  onChange={(e) => changeInputForm("brand", e.target.value)}
                >
                  <option value="" disabled>
                    Select a Brand
                  </option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand.marca}>
                      {brand.marca}
                    </option>
                  ))}
                </select>
                {errors.brand && <Error>{errors.brand}</Error>}
              </div>

              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="model">
                  Car Model
                </label>
                <input
                  type="text"
                  className="border px-2 border-black rounded py-1"
                  name="model"
                  id="model"
                  value={formData.model}
                  onChange={(e) => changeInputForm("model", e.target.value)}
                />
                {errors.model && <Error>{errors.model}</Error>}
              </div>
            </div>

            {/* Segundo bloque */}
            <div className="flex my-4 items-start max-[870px]:flex-wrap max-[870px]:gap-y-5 justify-between gap-x-10 xl:gap-x-5 w-full">
              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="type">
                  Car Type
                </label>
                <select
                  className="border border-black rounded py-1"
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={(e) => changeInputForm("type", e.target.value)}
                >
                  <option value="" disabled>
                    Select a Type
                  </option>
                  {types.map((type, index) => (
                    <option key={index} value={type.tipo}>
                      {type.tipo}
                    </option>
                  ))}
                </select>
                {errors.type && <Error>{errors.type}</Error>}
              </div>

              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="usage">
                  Usage
                </label>
                <select
                  className="border border-black rounded py-1"
                  name="usage"
                  id="usage"
                  value={formData.usage}
                  onChange={(e) => changeInputForm("usage", e.target.value)}
                >
                  <option value="" disabled>
                    Select a Usage
                  </option>
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                </select>
                {errors.usage && <Error>{errors.usage}</Error>}
              </div>
            </div>

            {/* Tercer bloque */}
            <div className="flex items-start max-[870px]:flex-wrap max-[870px]:gap-y-5 my-4 justify-between gap-x-10 xl:gap-x-5 w-full">
              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="engine">
                  Engine
                </label>
                <input
                  className="border px-2 border-black rounded py-1"
                  type="text"
                  name="engine"
                  id="engine"
                  value={formData.engine}
                  onChange={(e) => changeInputForm("engine", e.target.value)}
                />
                {errors.engine && <Error>{errors.engine}</Error>}
              </div>

              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="horsepower">
                  Horsepower
                </label>
                <input
                  className="border px-2 border-black rounded py-1"
                  type="number"
                  name="horsepower"
                  id="horsepower"
                  value={formData.horsepower}
                  onChange={(e) =>
                    changeInputForm("horsepower", e.target.value)
                  }
                />
                {errors.horsepower && <Error>{errors.horsepower}</Error>}
              </div>
            </div>

            {/* Cuarto bloque */}
            <div className="flex items-start my-4 max-[870px]:flex-wrap max-[870px]:gap-y-5 justify-between gap-x-10 xl:gap-x-5 w-full">
              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="year">
                  Year
                </label>
                <input
                  className="border px-2 border-black rounded py-1"
                  type="number"
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={(e) => changeInputForm("year", e.target.value)}
                />
                {errors.year && <Error>{errors.year}</Error>}
              </div>

              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="price">
                  Price
                </label>
                <input
                  className="border px-2 border-black rounded py-1"
                  type="text"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={(e) => changeInputForm("price", e.target.value)}
                />
                {errors.price && <Error>{errors.price}</Error>}
              </div>
            </div>

            {/* Quinto bloque */}
            <div className="flex flex-col my-4 gap-y-5 w-full">
              <div className="flex gap-y-2 flex-col w-full">
                <label className="text-white" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="border resize-none px-2 h-40 border-black rounded py-1"
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    changeInputForm("description", e.target.value)
                  }
                ></textarea>
                {errors.description && <Error>{errors.description}</Error>}
              </div>
            </div>
          </div>

          <button
            className="bg-blue-600 max-w-[720px] my-5 text-md poppins-regular cursor-pointer flex items-center justify-center hover:bg-blue-500 transition-all rounded text-white h-12 w-full"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateAutos;
