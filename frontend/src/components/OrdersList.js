import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../redux/actions/orderActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function OrdersList() {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  return (
    <div>
      <h1>Orders List</h1>
      <table className="table text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            <div>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.product}</td>
                  <td>${order.cost}</td>
                </tr>
              ))}
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}
