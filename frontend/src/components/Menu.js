import React, { useEffect, useState } from "react";
// import dataMenu from "../dataMenu.js";
import Axios from "axios";

export default function Menu() {
  const [productsMenu, setProductsMenu] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/products/")
      .then((res) => {
        setProductsMenu(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProductsMenu]);

  return (
    <div className="container fluid text-center">
      <div className="row">
        <div className="col-sm">
          {productsMenu.map((product, index) => (
            <div key={index}>
              <span>{product.name} </span>
              <span>${product.price}</span>
            </div>
          ))}
        </div>

        {/* <div className="col-sm">
          <h4>Hamburger</h4>
          {dataMenu.products.hamburger.map((product) => (
            <div key={product._id}>
              <span>{product.name} </span>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
        <div className="col-sm">
          <h4>Hot Dogs</h4>
          {dataMenu.products.hotDogs.map((product) => (
            <div key={product._id}>
              <span>{product.name} </span>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
        <div className="col-sm">
          <h4>Additionals</h4>
          {dataMenu.products.additionals.map((product) => (
            <div key={product._id}>
              <span>{product.name} </span>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
        <div className="col-sm">
          <h4>Drinks</h4>
          {dataMenu.products.drinks.map((product) => (
            <div key={product._id}>
              <span>{product.name} </span>
              <span>${product.price}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
