import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function OrdersList() {
  const [listOrders, setListOrders] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/orders")
      .then((response) => {
        setListOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setListOrders]);
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
          {listOrders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{order.product}</td>
              <td>${order.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
