import React from "react";

export default function Menu(props) {
  return (
    <div className="container fluid text-center">
      <div className="row">
        <div className="col-sm">
          <h4>Hamburguers</h4>
          <span>Monster</span>
          <br />
          <span>Quarter</span>
        </div>
        <div className="col-sm">
          <h4>Hot Dogs</h4>
          <span>American</span>
          <br />
          <span>traditional</span>
        </div>
        <div className="col-sm">
          <h4>Pizzas</h4>
          <span>Napolitan</span>
          <br />
          <span>Double Cheese</span>
        </div>
        <div className="col-sm">
          <h4>Drinks</h4>
          <span>Cola</span>
          <br/>
          <span>Soda</span>
        </div>
      </div>
    </div>
  );
}
