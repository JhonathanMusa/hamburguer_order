import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function Menu() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="container fluid text-center">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="row">
          <div className="col-sm">
            {products.map((product, index) => (
              <div key={index}>
                <span>{product.name} </span>
                <span>${product.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
