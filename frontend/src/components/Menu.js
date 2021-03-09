import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

export default function Menu() {
  
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="container fluid text-center">
      <div className="row">
        <div className="col-sm">
          <h4>Hamburger</h4>
          {products.map((data, index) => (
            <div key={index}>
              <span>{data.name} </span>
              <span>${data.price}</span>
            </div>
          ))}
        </div>
        {/*  <div className="col-sm">
          <h4>Hot Dog</h4>
          {products
            .filter((productCategory) => productCategory.category === "Hot Dog")
            .map((data, index) => (
              <div key={index}>
                <span>{data.name} </span>
                <span>${data.price}</span>
              </div>
            ))}
        </div>
        <div className="col-sm">
          <h4>Additionals</h4>
          {products
            .filter(
              (productCategory) => productCategory.category === "Additionals"
            )
            .map((data, index) => (
              <div key={index}>
                <span>{data.name} </span>
                <span>${data.price}</span>
              </div>
            ))}
        </div>
        <div className="col-sm">
          <h4>Drinks</h4>
          {products
            .filter((productCategory) => productCategory.category === "Drinks")
            .map((data, index) => (
              <div key={index}>
                <span>{data.name} </span>
                <span>${data.price}</span>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
}
