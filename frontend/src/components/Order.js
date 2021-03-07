import React, { useState } from "react";
import Axios from "axios";

export default function Order() {
  const [userOrder, setUserOrder] = useState([]);

  const inputHandler = (e) => {
    setUserOrder({
      ...userOrder,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/new-order", userOrder)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    console.log(userOrder);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="form-control mt-3"
          name="product"
          onChange={inputHandler}
          placeholder="What do you want?"
          type="text"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control mt-3"
          name="cost"
          onChange={inputHandler}
          placeholder="Price"
          type="number"
        />
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        Send
      </button>
    </form>
  );
}
