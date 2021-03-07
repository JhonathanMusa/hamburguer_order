import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import Order from "./Order";
import OrdersList from "./OrdersList";

export default function Nav() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Order & Menu <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-link" to="/orders">
                Orders List
              </Link>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={Menu} />
        <Route path="/" exact component={Order} />
        <Route path="/orders" exact component={OrdersList} />
      </div>
    </Router>
  );
}
