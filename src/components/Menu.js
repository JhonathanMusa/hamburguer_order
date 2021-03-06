import React from "react";

export default function Menu(props) {
  return (
    <div className="container fluid text-center">
      <div className="row">
          <div className="col-sm">
            <h4>Hamburguers</h4>
            <p>Monster</p>
          </div>
          <div className="col-sm">
            <h4>Hot Dogs</h4>
            <p>American</p>
          </div>
          <div className="col-sm">
            <h4>Pizzas</h4>
            <p>Napolitan</p>
          </div>
          <div className="col-sm">
            <h4>Drinks</h4>
            <p>Cola</p>
          </div>
      </div>
    </div>
  );
}
