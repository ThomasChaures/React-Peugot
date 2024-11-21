import { useState, useEffect } from "react";
import React from "react";
import ImgInputForm from "./Components/ImgInputForm";
const index = () => {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);

  return (
    <>
      <section>
        <div>
          <h2>List your car to sell</h2>
          <p>Fill in the details below to create your car listing</p>
        </div>

        <div>
          <form action="">
            <div>
              <h3>Uploads photos</h3>
              <ImgInputForm id={`1`}></ImgInputForm>
              <ImgInputForm id={`2`}></ImgInputForm>
              <ImgInputForm id={`3`}></ImgInputForm>
            </div>


            {/* Primer bloque */}
           <div>
           <div>
              <label htmlFor="brand">Car Brand</label>
              <select name="brand" id="brand">
                    {
                        brands.map(brand => {
                            return (
                                <option value={brand.marca}>{brand.marca}</option>
                            )
                        })
                    }
              </select>
            </div>

            <div>
                <label htmlFor="model">Car Model</label>
                <input type="text" name="model" id="model" />
            </div>
           </div>

            
            {/* Segundo bloque */}

            <div>
            <div>
            <label htmlFor="type">Car Type</label>
              <select name="type" id="type">
                    {
                        types.map(type => {
                            return (
                                <option value={type.marca}>{type.marca}</option>
                            )
                        })
                    }
              </select>
            </div>

            <div>
                <label htmlFor="usage">Usage</label>
                <select name="usage" id="usage">
                    <option value="New">New</option>
                    <option value="New">Used</option>
                </select>
            </div>
            </div>

            {/* tercer bloque */}

            
            <div>
                <div>
                    <label htmlFor="engine">Engine</label>
                    <input type="text" name="engine" id="engine" />
                </div>
                <div>
                    <label htmlFor="horsepower">Horsepower</label>
                    <input type="number" name="horsepower" id="horsepower" />
                </div>
            </div>

            {/* cuarto bloque */}

            <div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" id="year" />
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" />
                </div>
            </div>


          </form>
        </div>
      </section>
    </>
  );
};

export default index;
