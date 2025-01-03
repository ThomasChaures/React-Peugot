import { useState, useEffect } from "react";
import React from "react";
import Form from "./Comentarios/Form";
import Comentario from "./Comentarios/Comentario";
import img from "../../assets/img/placeholder.webp";
import img2 from "../../assets/img/auto2.jpeg";
import img3 from "../../assets/img/auto3.webp";
import { useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../../service/auth.service";
import { getAuto } from "../../service/autos.service";
import { useId } from "../../contexts/session.context";

import { comprarAuto } from "../../service/autos.service";
const Details = () => {
  let { id } = useParams();
  console.log(id);

  const onId = useId();
  const navigate = useNavigate();

  const [auto, setAuto] = useState({});
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState({});

  const [i1, setImg1] = useState(img);
  const [i2, setImg2] = useState(img2);
  const [i3, setImg3] = useState(img3);

  const [mainImg, setMainImg] = useState(img);

  const changeImg = (image) => {
    setMainImg(image);
  };

  const formattedNumber = (number) => {
    return number?.toLocaleString("es-ES") || "";
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleCompra = () => {
    try {
      const { _id, ...autoSinId } = auto;
      comprarAuto(auto._id, autoSinId, onId).then((data) => {
        navigate("/profile");
      });
    } catch (error) {}
  };

  useEffect(() => {
    getUserData(onId).then((data) => {
      setEmail(data.email);
      setRole(data.role);
      setUser(data);
      console.log(data.email, data.name, data.surname);
    });

    getAuto(id)
      .then((data) => {
        console.log("auto", data);
        setAuto(data);
        if (data.img1 || data.img2 || data.img3) {
          console.log(data.img3);
          setMainImg(`http://localhost:3333/uploads/${data.img1}`);
          setImg1(`http://localhost:3333/uploads/${data.img1}`);
          setImg2(`http://localhost:3333/uploads/${data.img2}`);
          setImg3(`http://localhost:3333/uploads/${data.img3}`);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <section className="mt-40 flex gap-4 items-start max-lg:flex-col max-2xl:px-10 max-w-[1360px] mx-auto">
        <div className="flex-col max-lg:w-full flex  max-lg:order-2 items-start">
          <div className="flex  gap-4 items-end">
            <div className="h-[497px] max-lg:h-[400px] max-lg:w-full overflow-hidden max-xl:w-[500px]  relative order-2 w-[800px] bg-gray-100">
              <img
                className="w-full h-full object-contain"
                src={mainImg}
                alt=""
              />
            </div>

            <div className="max-w-[200px] flex flex-col order-1  gap-2">
              <div
                onClick={() => changeImg(i1)}
                className="max-w-[140px] hover:opacity-100 transition-opacity  cursor-pointer  overflow-hidden h-[100px] opacity-70 border border-black"
              >
                <img
                  className="w-full h-full object-contain"
                  src={i1}
                  alt="Auto 1"
                />
              </div>
              <div
                onClick={() => changeImg(i2)}
                className="max-w-[140px] hover:opacity-100 transition-opacity  cursor-pointer overflow-hidden  max-h-[100px] opacity-70 border border-black"
              >
                <img
                  className="w-full h-full object-contain"
                  src={i2}
                  alt="Auto 2"
                />
              </div>
              <div
                onClick={() => changeImg(i3)}
                className="max-w-[140px] cursor-pointer hover:opacity-100 transition-opacity  overflow-hidden  h-[100px] opacity-70 border border-black"
              >
                <img
                  className="w-full h-full object-contain"
                  src={i3}
                  alt="Auto 3"
                />
              </div>
            </div>
          </div>
          <div className="border-t w-full mt-[20px] pt-3 pb-3">
            <h2 className="text-lg pb-2  poppins-medium">Description</h2>
            <p className="text-[15px] max-w-[600px] break-all text-black/70  poppins-medium">
              {auto.description}
            </p>
          </div>

          <div className="mt-3 hidden max-lg:flex w-full flex-col gap-y-2">
            {
             auto?.vendedor?.email !== user?.email || auto.status === 'for sale' && (
                <button
                  onClick={() => {
                    handleCompra();
                  }}
                  type="submit"
                  className="bg-blue-600 text-md poppins-regular cursor-pointer flex items-center justify-center hover:bg-blue-500 transition-all rounded text-white h-12 w-full"
                >
                  Start purchase
                </button>
              )

              /* <div className="bg-blue-200/50 border border-blue-600 text-blue-600 text-md poppins-regular cursor-pointer flex items-center justify-center hover:text-white hover:bg-blue-500 transition-all rounded  h-10 w-full">
            Save as Favorite
          </div> */
            }
            {auto.status === "sold" && (
              <div
                className="bg-red-600 text-md poppins-regular flex items-center justify-center transition-all rounded text-white h-12 w-full"
              >
                Purchased
              </div>
            )}
          </div>
          <div className="mt-4 w-full">
            <h2 className="text-2xl mb-3 poppins-medium">Ask about</h2>

            <Form id={auto._id} name={user.name} surname={user.surname} />

            <div className="mt-4">
              <h3 className="text-black text-xl poppins-medium">Questions</h3>

              <ul className="py-3">
                {auto?.comments && auto.comments.length > 0 ? (
                  auto.comments.map((coment, indice) => (
                    <li key={indice}>
                      <Comentario
                        index={indice}
                        id={auto._id}
                        name={user.name}
                        surname={user.surname}
                        comentario={coment}
                        vendedor={null}
                        email={email}
                        role={role}
                      />
                    </li>
                  ))
                ) : (
                  <p>No comments available.</p>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[33%] max-lg:max-w-full max-lg:order-1 flex flex-col gap-y-1.5  w-full">
          <div className="border-b pb-3">
            <h1 className="text-3xl pb-3  poppins-semibold">
              {auto.brand} - {auto.model}
            </h1>
            <p className="text-2xl  poppins-medium">
              ${formattedNumber(auto.price)}
            </p>
          </div>
          <div className="border-b pt-3 pb-3">
            <h2 className="text-lg pb-2  poppins-medium">Year</h2>
            <p className="text-[15px] text-black/70 disabled  poppins-medium">
              {auto.year}
            </p>
          </div>
          <div className="border-b pt-3 pb-3">
            <h2 className="text-lg pb-2  poppins-medium">Type</h2>
            <p className="text-[15px] text-black/70 disabled  poppins-medium">
              {capitalizeFirstLetter(auto.type)}
            </p>
          </div>
          <div className="border-b pt-3 pb-3">
            <h2 className="text-lg pb-2  poppins-medium">Usage</h2>
            <p className="text-[15px] text-black/70  poppins-medium">
              {capitalizeFirstLetter(auto.usage)}
            </p>
          </div>
          <div className="border-b pt-3 pb-3">
            <h2 className="text-lg pb-2  poppins-medium">Specs</h2>
            <ul>
              <li>Engine: {auto.engine}</li>
              <li>Horesepower: {auto.horsepower}</li>
            </ul>
          </div>
          <div className="mt-3 max-lg:hidden flex flex-col gap-y-2">
            {
              auto?.vendedor?.email !== user?.email  && (
                <button
                  onClick={() => {
                    handleCompra();
                  }}
                  className="bg-blue-600 text-md poppins-regular cursor-pointer flex items-center justify-center hover:bg-blue-500 transition-all rounded text-white h-12 w-full"
                >
                  Buy
                </button>
              )
              /* <div className="bg-blue-200/50 border border-blue-600 text-blue-600 text-md poppins-regular cursor-pointer flex items-center justify-center hover:text-white hover:bg-blue-500 transition-all rounded  h-10 w-full">
            Save as Favorite
          </div> */
            }
             
            {auto.status === "sold" && (
              <div
               className="bg-red-600 text-md poppins-regular flex items-center justify-center transition-all rounded text-white h-12 w-full"
              >
                Purchased
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
