import React from "react";

export default function Nav() {
  return (
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
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="/">
              Features
            </a>
            <a className="nav-link" href="/">
              Pricing
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
