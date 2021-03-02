import React, { useState } from "react";

export default function Order() {
  const [userOrder, setUserOrder] = useState("");

  const inputHandler = (e) => {
    setUserOrder(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userOrder);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="What do you want?"
          onChange={inputHandler}
        />
        <button type="submit">Order</button>
      </form>
    </div>
  );
}
