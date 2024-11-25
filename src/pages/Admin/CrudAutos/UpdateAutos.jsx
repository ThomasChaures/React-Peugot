import { useState, useEffect } from "react";
import React from "react";
import ImgInputForm from "../../SellCar/Components/ImgInputForm.jsx";
import { getTipos } from "../../../service/tipos.service.js";
import { patchAuto } from "../../../service/autos.service.js";
import { getMarcas } from "../../../service/marcas.service.js";
import { useNavigate } from "react-router-dom";
import { postUploads } from "../../../service/uploads.service";
import { getAuto } from "../../../service/autos.service.js";
import { useParams } from "react-router-dom";
import Error from "../../../components/Error/Error.jsx";

const UpdateAutos = () => {
  const navigate = useNavigate();

  let { auto_id } = useParams();
  const [auto, setAuto] = useState("");

  const [id, setId] = useState(localStorage.getItem("id"));
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [files, setFiles] = useState({});
  const [flag, setFlag] = useState(false);
  const [errors, setErrors] = useState({
    img: "",
    brand: "",
    model: "",
    type: "",
    price: null,
    horsepower: null,
    engine: "",
    description: "",
    usage: "",
  });
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
  });

  const handleFileChange = (id, file) => {
    setFiles((prevFiles) => ({ ...prevFiles, [`img${id}`]: file }));
    setFormData((prev) => ({
      ...prev,
      [`img${id}`]: file.name,
    }));
  };

  const changeInputForm = (name, value) => {
    console.log(id);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("files", files);

    if (!formData.brand) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        brand: "You must select a brand.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        brand: "",
      }));
      setFlag(true);
    }

    if (!formData.type) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        type: "You must select a type.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        type: "",
      }));
      setFlag(true);
    }

    if (!formData.model) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        model: "You must put a model.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        model: "",
      }));
      setFlag(true);
    }

    if (!formData.usage) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        usage: "You must select the usage.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        usage: "",
      }));
      setFlag(true);
    }

    if (!formData.price) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "You must put a price.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "",
      }));
      setFlag(true);
    }

    if (!formData.horsepower) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        horsepower: "You must put a horsepower.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        horsepower: "",
      }));
      setFlag(true);
    }

    if (!formData.year) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        year: "You must put a year.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        year: "",
      }));
      setFlag(true);
    }

    if (!formData.engine) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        engine: "You must put a engine.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        engine: "",
      }));
      setFlag(true);
    }

    if (!formData.description) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "You must put a description.",
      }));
      setFlag(false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "",
      }));
      setFlag(true);
    }

    if (flag) {
      if (files.img1) {
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

      if (files.img2) {
        const formFile = new FormData();
        console.log(files.img2);
        const img = files.img2;
        formFile.append("file", img);
        postUploads(formFile).then((data) => {
          setFormData((prev) => ({
            ...prev,
            img2: data.file,
          }));
        });
      }

      if (files.img3) {
        const formFile = new FormData();
        console.log(files.img3);
        const img = files.img3;
        formFile.append("file", img);
        postUploads(formFile).then((data) => {
          setFormData((prev) => ({
            ...prev,
            img3: data.file,
          }));
        });
      }

 

      console.log(formData);
      patchAuto(formData, auto_id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log(auto_id)
    getAuto(auto_id).then((data) => {
      setAuto(data);
    });

    getTipos().then((data) => setTypes(data));
    getMarcas().then((data) => setBrands(data));
  }, [auto_id]);
  
  useEffect(() => {
  
    if (auto) {
      setFormData((prev) => ({
        ...prev,
        brand: auto.brand || "",
        model: auto.model || "",
        type: auto.type || "",
        engine: auto.engine || "",
        horsepower: auto.horsepower || 0,
        year: auto.year || "",
        price: auto.price || 0,
        usage: auto.usage || "",
        description: auto.description || "",
        img1: auto.img1 || '',
        img2: auto.img2 || '',
        img3: auto.img3 || ''
      }));
    }
  }, [auto]);
  

  return (
    <section className="mt-[45px] container max-[870px]:px-10  max-[1270px]:px-10 px-20 max-w-[1360px] max-[1270px]:max-w-[1000px] mx-auto">
      <div>
        <h2 className="text-3xl font-medium text-white">Create Vehicle</h2>
      </div>

      <div className="mt-10 w-full rounded">
        <form
          enctype="multipart/form-data"
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

              {errors.img && (
                <div className="mt-10">
                  <Error>{errors.img}</Error>
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

export default UpdateAutos;
