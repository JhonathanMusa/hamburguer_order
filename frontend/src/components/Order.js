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
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="form-control mt-3"
          type="text"
          placeholder="What do you want?"
          onChange={inputHandler}
        />
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        Send
      </button>
    </form>
  );
}
